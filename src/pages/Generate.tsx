import { useState, useRef, useEffect } from 'react';
import { Wand2, Clock } from 'lucide-react';
import { fal } from '@fal-ai/client';
import { useAuth } from '../utils/useAuth';
import supabase from '../utils/supabase';

// Configure FAL client with API key from env
fal.config({ credentials: import.meta.env.VITE_FAL_API_KEY });

const Generate = () => {
  const { profile, loading } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [audioInstructions, setAudioInstructions] = useState('');
  const [generationMode, setGenerationMode] = useState('ultra');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('');
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [queueLogs, setQueueLogs] = useState<string[]>([]);
  const [falAuthenticated, setFalAuthenticated] = useState<boolean>(false);
  const [falAuthError, setFalAuthError] = useState<string | null>(null);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  // Authenticate with Fal API on mount
  useEffect(() => {
    async function checkFalAuth() {
      try {
        // Try a simple status call with a dummy requestId to check auth
        await fal.queue.status('fal-ai/veo3/fast', { requestId: 'dummy', logs: false });
        setFalAuthenticated(true);
        setFalAuthError(null);
      } catch (err: any) {
        if (err?.message?.includes('Authentication')) {
          setFalAuthenticated(false);
          setFalAuthError('Fal API authentication failed. Please check your API key.');
        } else {
          setFalAuthenticated(true); // If error is just invalid requestId, auth is fine
          setFalAuthError(null);
        }
      }
    }
    checkFalAuth();
  }, []);

  const handleGenerate = async () => {
    if (!falAuthenticated) {
      setError('Fal API authentication failed. Cannot generate video.');
      return;
    }
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }
    setIsGenerating(true);
    setError(null);
    setGeneratedVideoUrl(null);
    setDebugInfo('');
    setQueueLogs([]);
    let creationId = null;
    try {
      setDebugInfo(prev => prev + `Request: {\n  prompt: \"${prompt}\"}\n`);
      // 1. Submit request to Fal
      const result = await fal.subscribe('fal-ai/veo3/fast', {
        input: { prompt },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === 'IN_PROGRESS') {
            setQueueLogs(logs => [...logs, ...(update.logs?.map(l => l.message) || [])]);
          }
        },
      });
      setDebugInfo(prev => prev + `Fal requestId: ${result.requestId}\n`);
      // 2. Store requestId in DB
      if (profile) {
        const { data, error: dbError } = await supabase.from('creations').insert([
          {
            user_id: profile.id,
            title: prompt.substring(0, 60) || 'Untitled',
            description: audioInstructions || null,
            request_id: result.requestId, // <-- Add this column to your table if not present
            video_url: null,
            thumbnail_url: null,
            duration_seconds: null,
            quality: generationMode,
            tags: null,
            created_at: new Date().toISOString(),
          }
        ]).select('id').single();
        if (dbError) throw dbError;
        creationId = data?.id;
      }
      // 3. Poll for status
      const pollStatus = async () => {
        try {
          const status = await fal.queue.status('fal-ai/veo3/fast', {
            requestId: result.requestId,
            logs: true,
          });
          setDebugInfo(prev => prev + `Status: ${status.status}\n`);
          if (status.status === 'COMPLETED') {
            // 4. Fetch result
            const finalResult = await fal.queue.result('fal-ai/veo3/fast', {
              requestId: result.requestId,
            });
            setGeneratedVideoUrl(finalResult.data?.video?.url || null);
            setDebugInfo(prev => prev + `Video URL: ${finalResult.data?.video?.url}\n`);
            // 5. Update DB with video_url
            if (creationId && finalResult.data?.video?.url) {
              await supabase.from('creations').update({ video_url: finalResult.data.video.url }).eq('id', creationId);
            }
            setIsGenerating(false);
            if (pollingRef.current) clearTimeout(pollingRef.current);
          } else if (status.status === 'FAILED') {
            setError('Video generation failed.');
            setIsGenerating(false);
            if (pollingRef.current) clearTimeout(pollingRef.current);
          } else {
            // Keep polling
            pollingRef.current = setTimeout(pollStatus, 2000);
          }
        } catch (err: any) {
          setError('Error polling status: ' + (err.message || err.toString()));
          setIsGenerating(false);
          if (pollingRef.current) clearTimeout(pollingRef.current);
        }
      };
      pollStatus();
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to generate video';
      setError(errorMessage);
      setDebugInfo(prev => prev + `Error: ${errorMessage}\n`);
      setIsGenerating(false);
      if (pollingRef.current) clearTimeout(pollingRef.current);
    }
  };

  if (!loading && profile && profile.credit_balance === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Purchase credits to use veo3</h2>
          <p className="text-lg text-gray-300">You have 0 credits. Please purchase credits to generate videos.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Generate <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Videos Instantly</span> from Your Ideas
          </h1>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
            Our AI video creation tool lets you turn simple descriptions into cinematic video clips.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Input Section */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Create Your AI Video Scene</h2>
              {/* Text Prompt */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-300 mb-4">
                  AI Video Prompt
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your scene..."
                  className="w-full h-32 px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none text-lg"
                />
              </div>
              {/* Generate Button */}
              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim() || !falAuthenticated}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black py-6 rounded-xl font-bold text-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-button disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
              >
                {isGenerating ? (
                  <>
                    <Clock className="w-6 h-6 animate-spin" />
                    <span>Generating AI Video...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-6 h-6" />
                    <span>Generate AI Video</span>
                  </>
                )}
              </button>
              {falAuthError && (
                <div className="mt-4 text-red-400 text-center">{falAuthError}</div>
              )}
              {error && (
                <div className="mt-4 text-red-400 text-center">{error}</div>
              )}
              {/* Show logs/progress */}
              {queueLogs.length > 0 && (
                <div className="mt-4 bg-gray-900 text-gray-200 p-4 rounded-xl text-xs overflow-x-auto max-h-60 whitespace-pre-wrap">
                  {queueLogs.map((log, idx) => <div key={idx}>{log}</div>)}
                </div>
              )}
              {debugInfo && (
                <pre className="mt-4 bg-gray-900 text-gray-200 p-4 rounded-xl text-xs overflow-x-auto max-h-60 whitespace-pre-wrap">
                  {debugInfo}
                </pre>
              )}
            </div>
          </div>
          {/* Right Column - Output Section */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">AI Video Preview</h2>
              <div className="aspect-video bg-black rounded-xl border border-gray-700 flex items-center justify-center mb-6 relative overflow-hidden">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-400 text-lg">Creating your video...</p>
                  </div>
                ) : generatedVideoUrl ? (
                  <div className="w-full h-full relative">
                    <video 
                      src={generatedVideoUrl} 
                      controls 
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <div className="text-4xl mb-4">✨</div>
                    <p className="text-gray-400">Your AI-generated video will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;