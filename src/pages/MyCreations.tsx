import React, { useState, useEffect } from 'react';
import { Play, Download, Share2, Trash2, Filter, Search, Calendar, Tag } from 'lucide-react';
import supabase from '../utils/supabase';
import { useAuth } from '../utils/useAuth';

const MyCreations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMode, setFilterMode] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [creations, setCreations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCreations = async () => {
      if (!user) {
        setCreations([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('creations')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (error) {
        setError('Failed to load creations.');
        setCreations([]);
      } else {
        setCreations(data || []);
      }
      setLoading(false);
    };
    fetchCreations();
  }, [user]);

  // Filtering, searching, and sorting
  let filteredCreations = creations;
  if (filterMode !== 'all') {
    filteredCreations = filteredCreations.filter(c => c.quality?.toLowerCase() === filterMode);
  }
  if (searchTerm) {
    filteredCreations = filteredCreations.filter(c =>
      c.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (sortBy === 'newest') {
    filteredCreations = filteredCreations.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  } else if (sortBy === 'oldest') {
    filteredCreations = filteredCreations.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
  } else if (sortBy === 'title') {
    filteredCreations = filteredCreations.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  }

  const totalVideos = creations.length;
  const thisMonthVideos = creations.filter(c => {
    const created = new Date(c.created_at);
    const now = new Date();
    return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
  }).length;
  const totalDuration = creations.reduce((sum, c) => sum + (c.duration_seconds || 0), 0);

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
                <p className="text-3xl font-bold text-white">{totalDuration}s</p>
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
                title="Filter by video mode"
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
                title="Sort videos"
              >
                <option value="newest">Newest AI Videos First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
              </select>
            </div>
          </div>
        </div>
        {/* Video Gallery */}
        {loading ? (
          <div className="text-center text-gray-400 text-xl py-20">Loading your creations...</div>
        ) : error ? (
          <div className="text-center text-red-400 text-xl py-20">{error}</div>
        ) : filteredCreations.length === 0 ? (
          <div className="text-center text-gray-400 text-xl py-20">No creations found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCreations.map((video) => (
              <div 
                key={video.id}
                className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail_url || video.thumbnail || ''}
                    alt={video.title || 'AI video'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors" title="Preview Video">
                      <Play className="w-8 h-8 text-white" />
                    </button>
                  </div>
                  {/* Duration & Mode Badge */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration_seconds ? `${video.duration_seconds}s` : ''}
                    </span>
                    {video.quality && (
                      <span className={`px-2 py-1 rounded text-sm font-semibold ${
                        video.quality.toLowerCase() === 'ultra' 
                          ? 'bg-purple-500/80 text-white' 
                          : 'bg-yellow-500/80 text-black'
                      }`}>
                        {video.quality.charAt(0).toUpperCase() + video.quality.slice(1)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {video.created_at ? new Date(video.created_at).toLocaleDateString() : ''}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(video.tags || []).map((tag: string, index: number) => (
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
                    <a
                      href={video.video_url || '#'}
                      download
                      className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      <span className="text-sm font-medium">Download</span>
                    </a>
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
        )}
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