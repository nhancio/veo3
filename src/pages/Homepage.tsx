import { useState } from 'react';
import { ArrowRight, Play, Sparkles, Video, Upload, Mic, Crown, UserPlus, FileText, Settings, Download, ChevronLeft, ChevronRight, Twitter, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const features = [
    {
      icon: Video,
      title: "Text to Video AI",
      description: "Describe a scene, and our model generates a short film in seconds. Turn your words into vivid cinematic moments with advanced AI understanding.",
      keyword: "Text-to-Video AI"
    },
    {
      icon: Upload,
      title: "Image to Video AI",
      description: "Upload a photo and turn it into a moving, AI-generated clip. Transform static images into dynamic video content with natural motion.",
      keyword: "Image-to-Video AI"
    },
    {
      icon: Mic,
      title: "AI Lip Sync & Audio",
      description: "Add dialogue and effects with automatic voice sync and background sound. Perfect audio-visual alignment with realistic lip movements.",
      keyword: "AI Lip Sync Video"
    },
    {
      icon: Sparkles,
      title: "Cinematic Realism",
      description: "Our AI simulates natural motion, lighting, and physics for lifelike results. Physics-based accuracy in movement and lighting for ultra-realistic video generation.",
      keyword: "Realistic AI Video Generator"
    }
  ];

  const veoSteps = [
    {
      number: "1",
      icon: UserPlus,
      title: "Sign Up or Log In",
      description: "Create an account or log in to access Veo 3.",
      color: "cyan"
    },
    {
      number: "2", 
      icon: FileText,
      title: "Enter Your Prompt",
      description: "Type a text description or upload images to describe the video you want.",
      color: "purple"
    },
    {
      number: "3",
      icon: Settings,
      title: "Customize Audio",
      description: "Add instructions for sound effects, dialogue, or ambient noise to enhance your video.",
      color: "cyan"
    },
    {
      number: "4",
      icon: Download,
      title: "Generate and Review",
      description: "Let Veo 3 create your video, then preview and download your AI-generated clip.",
      color: "purple"
    }
  ];


  // Real Veo 3 videos from Twitter
  const twitterVideos = [
    {
      id: 1,
      title: "Cinematic Ocean Waves with Seagulls",
      thumbnail: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
      twitterUrl: "https://x.com/nmatares/status/1924931844879134804",
      author: "@nmatares",
      likes: "2.1K",
      retweets: "456",
      description: "Stunning ocean waves with seagulls flying overhead in cinematic quality",
      prompt: "Ocean waves crashing on shore with seagulls flying overhead, cinematic lighting"
    },
    {
      id: 2,
      title: "Futuristic City Skyline at Sunset",
      thumbnail: "https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=800",
      twitterUrl: "https://x.com/yutianc/status/1924939694367818091",
      author: "@yutianc",
      likes: "3.7K",
      retweets: "892",
      description: "Breathtaking futuristic cityscape with golden hour lighting and flying vehicles",
      prompt: "Futuristic city skyline at sunset with flying cars and neon lights"
    },
    {
      id: 3,
      title: "Astronaut Walking on Mars Surface",
      thumbnail: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800",
      twitterUrl: "https://x.com/HashemGhaili/status/1925332319604257203",
      author: "@HashemGhaili",
      likes: "8.9K",
      retweets: "2.3K",
      description: "Realistic astronaut exploration on Mars with dust storms and red landscape",
      prompt: "Astronaut walking on Mars surface with dust storms and red rocky terrain"
    },
    {
      id: 4,
      title: "Magical Forest with Glowing Particles",
      thumbnail: "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=800",
      twitterUrl: "https://x.com/hhm/status/1924982194457690176",
      author: "@hhm",
      likes: "1.8K",
      retweets: "367",
      description: "Enchanted forest scene with magical glowing particles and ethereal lighting",
      prompt: "Mystical forest with glowing magical particles floating through ancient trees"
    },
    {
      id: 5,
      title: "Underwater Coral Reef Ecosystem",
      thumbnail: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
      twitterUrl: "https://x.com/medhini_n/status/1924923837571092613",
      author: "@medhini_n",
      likes: "2.4K",
      retweets: "521",
      description: "Vibrant underwater coral reef with tropical fish swimming in crystal clear water",
      prompt: "Underwater coral reef with colorful fish swimming through vibrant corals"
    },
    {
      id: 6,
      title: "Dragon Flying Over Medieval Castle",
      thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      twitterUrl: "https://x.com/techhalla/status/1925206104679809432",
      author: "@techhalla",
      likes: "5.2K",
      retweets: "1.1K",
      description: "Epic fantasy scene with a majestic dragon soaring over a medieval castle",
      prompt: "Majestic dragon with golden scales flying over medieval castle at twilight"
    },
    {
      id: 7,
      title: "Northern Lights Over Snowy Mountains",
      thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      twitterUrl: "https://x.com/jen_w1n/status/1924914469265649795",
      author: "@jen_w1n",
      likes: "3.1K",
      retweets: "678",
      description: "Spectacular aurora borealis dancing over snow-covered mountain peaks",
      prompt: "Northern lights aurora borealis over snow-covered mountains at night"
    },
    {
      id: 8,
      title: "Cyberpunk Street with Neon Rain",
      thumbnail: "https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=800",
      twitterUrl: "https://x.com/babaeizadeh/status/1924942128851124284",
      author: "@babaeizadeh",
      likes: "4.6K",
      retweets: "934",
      description: "Atmospheric cyberpunk street scene with neon reflections in rain puddles",
      prompt: "Cyberpunk street at night with neon signs reflecting in rain puddles"
    },
    {
      id: 9,
      title: "Ancient Temple in Jungle Ruins",
      thumbnail: "https://images.pexels.com/photos/161154/pexels-photo-161154.jpeg?auto=compress&cs=tinysrgb&w=800",
      twitterUrl: "https://x.com/nearcyan/status/1924963340876710365",
      author: "@nearcyan",
      likes: "2.7K",
      retweets: "589",
      description: "Mysterious ancient temple overgrown with jungle vines and golden sunlight",
      prompt: "Ancient stone temple ruins overgrown with jungle vines, golden sunlight streaming"
    }
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % Math.ceil(twitterVideos.length / 3));
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + Math.ceil(twitterVideos.length / 3)) % Math.ceil(twitterVideos.length / 3));
  };

  const getVisibleVideos = () => {
    const startIndex = currentVideoIndex * 3;
    return twitterVideos.slice(startIndex, startIndex + 3);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-cyan-500/30 px-6 py-3 rounded-full text-cyan-400 text-lg font-medium mb-8 backdrop-blur-sm glow-border">
            <Sparkles className="w-6 h-6" />
            <span>Next-Gen AI Video Creation</span>
          </div>

          {/* Main Heading - H1 for SEO */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Create Cinematic
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent glow-text">
              AI Videos from Text or Images
            </span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              in Seconds
            </span>
          </h1>

          {/* Subheading - SEO optimized */}
          <p className="max-w-4xl mx-auto text-2xl text-gray-300 leading-relaxed mb-12">
            Transform your ideas into stunning cinematic videos with our AI video generator. 
            Just type a prompt or upload an image – and let AI bring it to life with realistic motion, audio, and lip-syncing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link 
              to="/generate"
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-10 py-5 rounded-full text-xl font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-button flex items-center space-x-3"
            >
              <Video className="w-6 h-6" />
              <span>Generate</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/my-creations"
              className="group bg-transparent border-2 border-gray-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-3"
            >
              <Play className="w-6 h-6" />
              <span>My Creations</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-gray-400 text-lg">AI Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">8sec</div>
              <div className="text-gray-400 text-lg">Generation Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">4K</div>
              <div className="text-gray-400 text-lg">Ultra Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Powerful AI Video Generation Features
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Experience cutting-edge AI video creation technology designed for creators and storytellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                <div className="mb-2">
                  <span className="inline-block bg-cyan-100/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {feature.keyword}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Create AI Videos with Veo 3 Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              How to Create AI Videos with Veo 3
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Follow these simple steps to generate videos with synchronized audio using Veo 3
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {veoSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl text-black ${
                    step.color === 'cyan' 
                      ? 'bg-gradient-to-r from-cyan-400 to-cyan-500' 
                      : 'bg-gradient-to-r from-purple-400 to-purple-500'
                  }`}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4 ${
                  step.color === 'cyan' 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-600/20' 
                    : 'bg-gradient-to-r from-purple-500/20 to-purple-600/20'
                } group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300`}>
                  <step.icon className={`w-8 h-8 ${
                    step.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                  } group-hover:text-cyan-300 transition-colors duration-300`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Start Your First Video CTA */}
          <div className="text-center">
            <Link 
              to="/generate"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-12 py-6 rounded-full text-2xl font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-button"
            >
              <Video className="w-8 h-8" />
              <span>Start Your First Video</span>
              <ArrowRight className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Twitter Video Showcase Carousel */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Twitter className="w-12 h-12 text-cyan-400" />
              <h2 className="text-5xl font-bold text-white">
                Top Veo 3 Videos on Twitter
              </h2>
            </div>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              Discover viral AI-generated videos created by our community. See what's trending and get inspired for your next creation.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-500">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>Live from Twitter</span>
              </span>
              <span>•</span>
              <span>Updated daily</span>
              <span>•</span>
              <span>Community favorites</span>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={prevVideo}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900/80 border border-gray-700 rounded-full p-4 hover:bg-gray-800 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button 
              onClick={nextVideo}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900/80 border border-gray-700 rounded-full p-4 hover:bg-gray-800 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Video Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
              {getVisibleVideos().map((video) => (
                <div 
                  key={video.id}
                  className="group bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={`AI-generated video: ${video.title}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-colors">
                        <Play className="w-10 h-10 text-white" />
                      </button>
                    </div>

                    {/* Twitter Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
                        <Twitter className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {video.description}
                    </p>
                    
                    {/* Prompt */}
                    <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
                      <p className="text-sm text-gray-500 mb-1">Prompt used:</p>
                      <p className="text-cyan-300 text-sm italic">"{video.prompt}"</p>
                    </div>

                    {/* Author & Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                          <span className="text-cyan-400 font-bold text-sm">
                            {video.author.charAt(1).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-gray-300 font-medium">{video.author}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>❤️ {video.likes}</span>
                        <span>🔄 {video.retweets}</span>
                      </div>
                    </div>

                    {/* View on Twitter Button */}
                    <a 
                      href={video.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full bg-transparent border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition-all duration-300 font-semibold"
                    >
                      <Twitter className="w-5 h-5" />
                      <span>View on Twitter</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-3 mt-12">
              {Array.from({ length: Math.ceil(twitterVideos.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentVideoIndex 
                      ? 'bg-cyan-400 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-400 mb-6">
              Join thousands of creators sharing their AI videos on social media
            </p>
            <Link 
              to="/generate"
              className="inline-flex items-center space-x-3 bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full text-xl font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              <Video className="w-6 h-6" />
              <span>Create Your Viral Video</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-bold text-white mb-8">
            Bring Your Imagination to Life with AI
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Start creating AI-generated videos online – no editing skills needed. 
            Join thousands of creators who are already using AI to produce stunning cinematic content.
          </p>
          <Link 
            to="/generate"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-12 py-6 rounded-full text-2xl font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-button"
          >
            <Crown className="w-8 h-8" />
            <span>Try AI Video Generator Now</span>
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;