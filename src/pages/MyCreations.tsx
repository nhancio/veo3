import React, { useState } from 'react';
import { Play, Download, Share2, Trash2, Filter, Search, Calendar, Tag } from 'lucide-react';

const MyCreations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMode, setFilterMode] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const videos = [
    {
      id: 1,
      title: 'Majestic Dragon Flight - AI Generated Video',
      thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8s',
      created: '2 hours ago',
      mode: 'ultra',
      tags: ['fantasy', 'dragon', 'epic'],
      alt: 'AI-generated cinematic video of dragon flying over mountains'
    },
    {
      id: 2,
      title: 'Neon Cyberpunk Street - Text to Video AI',
      thumbnail: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8s',
      created: '5 hours ago',
      mode: 'fast',
      tags: ['cyberpunk', 'neon', 'city'],
      alt: 'AI video generator creating cyberpunk neon street scene'
    },
    {
      id: 3,
      title: 'Ocean Storm Waves - Realistic AI Video',
      thumbnail: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8s',
      created: '1 day ago',
      mode: 'ultra',
      tags: ['ocean', 'storm', 'nature'],
      alt: 'Realistic AI-generated video of ocean storm with waves'
    },
    {
      id: 4,
      title: 'Mystical Forest Path - AI Video Creation',
      thumbnail: 'https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8s',
      created: '2 days ago',
      mode: 'fast',
      tags: ['forest', 'mystical', 'path'],
      alt: 'AI video creation tool generating mystical forest scene'
    },
    {
      id: 5,
      title: 'Space Station Orbit - Cinematic AI Video',
      thumbnail: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8s',
      created: '3 days ago',
      mode: 'ultra',
      tags: ['space', 'station', 'sci-fi'],
      alt: 'Cinematic AI-generated video of space station in orbit'
    },
    {
      id: 6,
      title: 'Ancient Temple Ruins - AI Generated',
      thumbnail: 'https://images.pexels.com/photos/161154/pexels-photo-161154.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8s',
      created: '1 week ago',
      mode: 'fast',
      tags: ['ancient', 'temple', 'ruins'],
      alt: 'AI-generated video of ancient temple ruins with atmospheric lighting'
    }
  ];

  const totalVideos = videos.length;
  const thisMonthVideos = videos.filter(v => 
    v.created.includes('hours') || v.created.includes('days') || v.created === '1 week ago'
  ).length;

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* SEO Meta Tags for My Creations Page */}
      <div style={{ display: 'none' }}>
        <h1>Access and manage your generated AI videos. Download, share, or regenerate clips in your library with ease.</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            My AI Video <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Creations</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            You've generated <span className="text-cyan-400 font-semibold">{thisMonthVideos}</span> AI videos this month. 
            Manage, download, and share your AI-generated video library.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-lg">Total AI Videos</p>
                <p className="text-3xl font-bold text-white">{totalVideos}</p>
              </div>
              <Play className="w-10 h-10 text-cyan-400" />
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-lg">This Month</p>
                <p className="text-3xl font-bold text-cyan-400">{thisMonthVideos}</p>
              </div>
              <Calendar className="w-10 h-10 text-cyan-400" />
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-lg">Total Duration</p>
                <p className="text-3xl font-bold text-white">{totalVideos * 8}s</p>
              </div>
              <Tag className="w-10 h-10 text-cyan-400" />
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-lg">Credits Used</p>
                <p className="text-3xl font-bold text-purple-400">180</p>
              </div>
              <Filter className="w-10 h-10 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-12 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search your AI-generated videos..."
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Filter by Mode */}
            <div>
              <select
                value={filterMode}
                onChange={(e) => setFilterMode(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              >
                <option value="all">All AI Video Modes</option>
                <option value="fast">Fast Mode Videos</option>
                <option value="ultra">Ultra Quality Videos</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              >
                <option value="newest">Newest AI Videos First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>

                {/* Duration & Mode Badge */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </span>
                  <span className={`px-2 py-1 rounded text-sm font-semibold ${
                    video.mode === 'ultra' 
                      ? 'bg-purple-500/80 text-white' 
                      : 'bg-yellow-500/80 text-black'
                  }`}>
                    {video.mode === 'ultra' ? 'Ultra' : 'Fast'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-400 mb-4">{video.created}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Download className="w-5 h-5" />
                    <span className="text-sm font-medium">Download</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                  <button className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors">
                    <Trash2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full text-xl font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300">
            Load More AI Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCreations;