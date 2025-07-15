import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: 0,
      icon: Zap,
      description: 'Get started with AI video creation',
      credits: '50 credits/month',
      features: [
        '50 video generation credits',
        'Fast mode only - Basic text-to-video',
        'Standard quality (720p)',
        'Basic audio generation',
        'Personal use license',
        'Community support'
      ],
      popular: false,
      color: 'gray',
      limitations: ['Watermark on videos', 'Limited to Fast mode', 'Personal use only']
    },
    {
      name: 'Pro',
      price: 29,
      icon: Star,
      description: 'Perfect for content creators',
      credits: '500 credits/month',
      features: [
        '500 video generation credits',
        'Fast & Ultra modes - All AI video features',
        'High quality (1080p) AI videos',
        'Advanced audio & lip-sync technology',
        'No watermarks on AI-generated videos',
        'Full commercial license',
        'Priority support',
        'Custom audio instructions',
        'Image-to-video support',
        'Physics-based realism'
      ],
      popular: true,
      color: 'cyan'
    },
    {
      name: 'Ultra',
      price: 99,
      icon: Crown,
      description: 'For professional studios and agencies',
      credits: '2,000 credits/month',
      features: [
        '2,000 video generation credits',
        'All generation modes & premium features',
        'Ultra quality (4K) cinematic videos',
        'Premium audio & dialogue with AI lip sync',
        'No watermarks - Professional quality',
        'Extended commercial license',
        '24/7 priority support',
        'API access for bulk generation',
        'Bulk generation tools',
        'Custom model training',
        'Priority queue access',
        'White-label solutions'
      ],
      popular: false,
      color: 'purple'
    }
  ];


  return (
    <div className="min-h-screen bg-black pt-20">
      {/* SEO Meta Tags for Pricing Page */}
      <div style={{ display: 'none' }}>
        <h1>Affordable AI Video Generation Plans for Everyone</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Affordable AI Video Generation</span> Plans for Everyone
          </h1>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
            Whether you're just exploring or producing at scale, choose the right plan for your AI video generation needs. 
            Unlock higher quality, faster generation, and commercial licensing for your AI-generated videos.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-500 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 shadow-2xl shadow-cyan-500/20' 
                  : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
              } backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Most Popular for AI Video Creation</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                  plan.popular ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20' : 'bg-gray-800'
                }`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.popular ? 'text-cyan-400' : 'text-gray-400'
                  }`} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-lg mb-6">{plan.description}</p>
                
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 text-xl ml-2">/month</span>
                </div>
                <p className={`text-lg font-semibold ${
                  plan.popular ? 'text-cyan-400' : 'text-gray-400'
                }`}>
                  {plan.credits}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className={`w-6 h-6 ${
                      plan.popular ? 'text-cyan-400' : 'text-green-400'
                    }`} />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.limitations && (
                <div className="mb-8">
                  <p className="text-gray-500 text-sm mb-2">Limitations:</p>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="text-gray-500 text-sm">
                        • {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button className={`w-full py-4 rounded-xl font-bold text-xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black hover:from-cyan-400 hover:to-purple-400 glow-button'
                  : plan.price === 0
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black'
              }`}>
                {plan.price === 0 ? 'Start Creating AI Videos Free' : 'Upgrade to ' + plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Commercial Usage Note */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-3xl p-8 mb-16 backdrop-blur-sm">
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Commercial Usage Rights for AI-Generated Videos</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Pro and Ultra plans include full commercial usage rights for your AI-generated videos. 
                Use them in marketing campaigns, social media, presentations, client work, and more. 
                Free plan includes watermarks and is limited to personal use only.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">No watermarks on AI videos (Pro & Ultra)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Full commercial license for AI-generated content</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Resale rights for AI videos (Ultra only)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">White-label AI video solutions (Ultra only)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Usage Guide */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 mb-16 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">AI Video Generation Credit Usage Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-cyan-400">Fast Mode - Quick AI Video Generation</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Standard Quality (720p) AI Video</span>
                  <span className="text-white font-semibold">15 credits</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Generation Time</span>
                  <span className="text-gray-400">~30 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Features</span>
                  <span className="text-gray-400">Basic text-to-video</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-400">Ultra Mode - Premium AI Video Quality</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">High Quality (1080p) AI Video</span>
                  <span className="text-white font-semibold">35 credits</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Ultra Quality (4K) Cinematic</span>
                  <span className="text-white font-semibold">50 credits</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Generation Time</span>
                  <span className="text-gray-400">~2 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Features</span>
                  <span className="text-gray-400">Full AI video suite</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-gray-400 text-xl mb-8">
            Ready to transform your creative process with AI video generation? 
            <a href="mailto:support@veoai.com" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-2">
              Contact our AI video experts
            </a>
          </p>
          <div className="flex justify-center items-center space-x-8 text-lg text-gray-500">
            <span className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>30-day money-back guarantee</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>No setup fees for AI video creation</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Cancel anytime</span>
            </span>
          </div>
          <div className="mt-8">
            <p className="text-gray-500 text-lg">
              Start creating AI-generated videos today – with no upfront cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;