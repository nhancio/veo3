import { useState } from 'react';
import { Wand2, Settings, Clock, Zap, Play } from 'lucide-react';
import { generateFastSDXL, type VideoFile } from '../utils/fal';

const Generate = () => {
  const [prompt, setPrompt] = useState('');
  const [audioInstructions, setAudioInstructions] = useState('');
  const [generationMode, setGenerationMode] = useState('ultra');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('');
  const [generatedVideo, setGeneratedVideo] = useState<VideoFile | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedVideo(null);
    setDebugInfo('');
    
    try {
      setDebugInfo(prev => prev + `Request: {\n  prompt: \"${prompt}\"\n}\n`);
      const result = await generateFastSDXL(prompt);
      
      setDebugInfo(prev => prev + `Response: ${JSON.stringify(result, null, 2)}\n`);
      setGeneratedVideo(result.video);
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to generate video';
      setError(errorMessage);
      setDebugInfo(prev => prev + `Error: ${errorMessage}\n`);
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const getCreditCost = () => {
    return generationMode === 'fast' ? 15 : 35;
  };

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
                disabled={isGenerating || !prompt.trim()}
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
              {error && (
                <div className="mt-4 text-red-400 text-center">{error}</div>
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
                ) : generatedVideo ? (
                  <div className="w-full h-full relative">
                    <video 
                      src={generatedVideo.url} 
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