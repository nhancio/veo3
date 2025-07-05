import React from 'react';
import { Check, Star, Zap, Crown, Rocket, CreditCard, HelpCircle } from 'lucide-react';

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

  const faqs = [
    {
      question: "What is Veo 3?",
      answer: "Veo 3 is Google's latest AI video generation model that creates high-quality, cinematic 8-second videos from text prompts or images. Our platform provides access to this cutting-edge technology with enhanced features like native audio generation, lip-sync capabilities, and physics-based realism for ultra-realistic video creation."
    },
    {
      question: "What's the difference between VeoAI and Google Flow?",
      answer: "We both use the official Google VEO 3 model, but Google Flow has daily limits while we don't. Our platform offers unlimited generations based on your credit plan, plus additional features like advanced audio instructions, commercial licensing, and priority processing queues for faster video generation."
    },
    {
      question: "Can Veo 3 generate videos longer than 8 seconds?",
      answer: "Currently, Veo 3 is optimized for 8-second clips to ensure maximum quality and cinematic impact. This duration is perfect for social media content, advertisements, and quick storytelling. We're working on extended duration options for future releases."
    },
    {
      question: "Can I use Veo 3 for commercial projects?",
      answer: "Yes! Pro and Ultra plans include full commercial usage rights for your AI-generated videos. You can use them in marketing campaigns, client work, social media advertising, presentations, and even resell the content (Ultra plan only). Free plan videos include watermarks and are limited to personal use."
    },
    {
      question: "What types of audio can Veo 3 generate?",
      answer: "Veo 3 can generate ambient sounds, background music, dialogue with perfect lip-sync, sound effects, and atmospheric audio that matches your video content. Our advanced audio instructions allow you to specify everything from 'epic orchestral music' to 'gentle rain sounds with distant thunder' for complete creative control."
    },
    {
      question: "Can I use Veo 3 videos on social media?",
      answer: "Absolutely! Veo 3's 8-second format is perfect for social media platforms like Instagram Reels, TikTok, Twitter, LinkedIn, and Facebook. Pro and Ultra plans remove watermarks, making your content look professional and ready for any social platform or marketing campaign."
    },
    {
      question: "Is Veo 3 easy to use for beginners?",
      answer: "Yes! Our interface is designed for creators of all skill levels. Simply describe your vision in text (like 'sunset beach with waves'), optionally upload a reference image, add audio instructions, and click generate. No video editing experience required – the AI handles all the complex work."
    },
    {
      question: "How does Veo 3 compare to other AI video tools?",
      answer: "Veo 3 stands out with superior physics-based realism, native audio generation with lip-sync, and cinematic quality that rivals professional video production. Unlike other tools, we offer both text-to-video and image-to-video capabilities with advanced motion fidelity and realistic lighting simulation."
    },
    {
      question: "How do AI video generation credits work?",
      answer: "Each AI video generation consumes credits based on mode and quality. Fast mode uses 15 credits for basic text-to-video, Ultra mode uses 35-50 credits for premium AI-generated videos with advanced features. Credits refresh monthly and unused credits roll over for paid plans."
    },
    {
      question: "Can I upgrade my AI video plan anytime?",
      answer: "Yes! You can upgrade or downgrade your AI video generation plan at any time. Unused credits roll over to the next month for paid plans, and you'll have immediate access to new features upon upgrading."
    },
    {
      question: "What's the AI-generated video length and quality?",
      answer: "All AI-generated videos are 8 seconds long in various quality options: Standard (720p), High (1080p), and Ultra (4K). Each video includes cinematic motion, realistic physics, and optional audio with perfect synchronization."
    },
    {
      question: "Is there a free AI video generator trial?",
      answer: "Yes! The Free plan gives you 50 credits monthly to try our AI video generation platform. No credit card required to start creating AI videos. You can experience the full Veo 3 technology with basic features before upgrading."
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

        {/* Comprehensive FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <HelpCircle className="w-12 h-12 text-cyan-400" />
              <h2 className="text-5xl font-bold text-white">Veo 3 AI Video Generator FAQ</h2>
            </div>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about our Veo 3 AI video generation platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-start space-x-3">
                  <span className="text-cyan-400 text-2xl">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 text-2xl font-bold">A:</span>
                  <p className="text-gray-400 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              </div>
            ))}
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