import React, { useState } from 'react';
import { Upload, Wand2, Settings, Clock, Zap, Play, Download, Share2, RotateCcw } from 'lucide-react';
import { generateFastSDXL } from '../utils/fal';

const Generate = () => {
  const [prompt, setPrompt] = useState('');
  const [audioInstructions, setAudioInstructions] = useState('');
  const [generationMode, setGenerationMode] = useState('ultra');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    setHasGenerated(false);
    setDebugInfo('');
    try {
      setDebugInfo(prev => prev + `Request: {\n  prompt: \"${prompt}\"\n}\n`);
      const result = await generateFastSDXL(prompt);
      setDebugInfo(prev => prev + `Response: ${JSON.stringify(result, null, 2)}\n`);
      // For now, just alert the result (can be improved to show video/image)
      alert(JSON.stringify(result, null, 2));
      setHasGenerated(true);
    } catch (err: any) {
      setError(err.message || 'Failed to generate video');
      setDebugInfo(prev => prev + `Error: ${err.message || err}\n`);
    } finally {
      setIsGenerating(false);
    }
  };

  const getCreditCost = () => {
    return generationMode === 'fast' ? 15 : 35;
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* SEO Meta Tags for Generate Page */}
      <div style={{ display: 'none' }}>
        <h1>Generate AI Videos Instantly from Your Ideas</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Generate <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Videos Instantly</span> from Your Ideas
          </h1>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
            Our AI video creation tool lets you turn simple descriptions into cinematic video clips. 
            Whether you're building content, storytelling, or prototyping – this tool generates fast, high-quality visuals with minimal input.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Create Your AI Video Scene</h2>
              
              {/* Text Prompt */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-300 mb-4">
                  AI Video Prompt - Text to Video Generator
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Add a prompt like 'robot walking through cyber city' or 'sunset beach with waves and birds flying' - describe your scene for our AI video generator..."
                  className="w-full h-32 px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none text-lg"
                />
                <p className="text-gray-500 text-sm mt-2">
                  Tip: Be specific with lighting, mood, and camera angles for better AI-generated results
                </p>
              </div>

              {/* Image Upload */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-300 mb-4">
                  Reference Image for AI Video (Optional) - Image to Video AI
                </label>
                <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors cursor-pointer group">
                  <Upload className="w-12 h-12 text-gray-500 group-hover:text-cyan-400 mx-auto mb-4 transition-colors" />
                  <p className="text-gray-400 text-lg mb-2">Upload an optional image for scene reference</p>
                  <p className="text-gray-600">PNG, JPG up to 10MB - Transform static images into AI videos</p>
                </div>
              </div>

              {/* Audio Instructions */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-300 mb-4">
                  Audio & Dialogue Instructions - AI Lip Sync
                </label>
                <textarea
                  value={audioInstructions}
                  onChange={(e) => setAudioInstructions(e.target.value)}
                  placeholder="Include dialogue or sound (optional) - e.g., 'Epic orchestral music with thunder sounds and dragon roars' or add specific dialogue for AI lip sync..."
                  className="w-full h-24 px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none text-lg"
                />
                <p className="text-gray-500 text-sm mt-2">
                  Add native lip sync, physics-based motion, and ambient sound automatically
                </p>
              </div>

              {/* Generation Mode */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-300 mb-4">
                  AI Video Generation Mode
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      value="fast"
                      checked={generationMode === 'fast'}
                      onChange={(e) => setGenerationMode(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      generationMode === 'fast' 
                        ? 'border-cyan-500 bg-cyan-500/10' 
                        : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                    }`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <Zap className="w-6 h-6 text-yellow-400" />
                        <span className="text-xl font-bold text-white">Fast Mode</span>
                      </div>
                      <p className="text-gray-400">30 seconds generation</p>
                      <p className="text-cyan-400 font-semibold mt-2">15 credits</p>
                      <p className="text-gray-500 text-sm mt-1">Basic text-to-video mode</p>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      value="ultra"
                      checked={generationMode === 'ultra'}
                      onChange={(e) => setGenerationMode(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      generationMode === 'ultra' 
                        ? 'border-purple-500 bg-purple-500/10' 
                        : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                    }`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <Settings className="w-6 h-6 text-purple-400" />
                        <span className="text-xl font-bold text-white">Ultra Quality</span>
                      </div>
                      <p className="text-gray-400">2 minutes generation</p>
                      <p className="text-purple-400 font-semibold mt-2">35 credits</p>
                      <p className="text-gray-500 text-sm mt-1">Ultra quality generation with advanced features</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Cost Display */}
              <div className="bg-black/50 border border-gray-700 rounded-xl p-6 flex justify-between items-center mb-8">
                <div>
                  <p className="text-gray-400 text-lg">AI Video Generation Cost</p>
                  <p className="font-bold text-2xl text-white">{getCreditCost()} credits</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-lg">Your Credit Balance</p>
                  <p className="font-bold text-2xl text-cyan-400">2,500 credits</p>
                </div>
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
                <pre className="mt-4 bg-gray-900 text-gray-200 p-4 rounded-xl text-xs overflow-x-auto max-h-60 whitespace-pre-wrap">{debugInfo}</pre>
              )}
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">AI Video Preview</h2>
              
              <div className="aspect-video bg-black rounded-xl border border-gray-700 flex items-center justify-center mb-6 relative overflow-hidden">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-400 text-lg">Creating your cinematic AI video masterpiece...</p>
                  </div>
                ) : hasGenerated ? (
                  <div className="relative w-full h-full">
                    <img 
                      src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="AI-generated cinematic video preview from prompt"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-colors" title="Play video preview">
                        <Play className="w-12 h-12 text-white" />
                      </button>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      8s AI Video
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                      <Play className="w-12 h-12 text-gray-600" />
                    </div>
                    <p className="text-gray-500 text-lg">Your AI-generated video will appear here</p>
                  </div>
                )}
              </div>

              {hasGenerated && (
                <div className="grid grid-cols-3 gap-4">
                  <button className="flex items-center justify-center space-x-2 bg-cyan-600 text-white px-6 py-3 rounded-xl hover:bg-cyan-700 transition-colors">
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors">
                    <RotateCcw className="w-5 h-5" />
                    <span>Regenerate</span>
                  </button>
                </div>
              )}
            </div>

            {/* AI Video Generation Tips */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">AI Video Creation Pro Tips</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Be specific with your descriptions for better AI video results</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Include lighting, mood, and camera angle details in your prompt</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Ultra mode provides higher quality AI-generated videos but takes longer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Reference images help guide the visual style of your AI video</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Add dialogue instructions for automatic AI lip sync features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;