import React, { useState } from 'react';
import { Video, Globe, Mail, FileText, Shield, CreditCard, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');

  const languages = [
    // English Speaking Countries
    { code: 'en-US', name: 'English (United States)', flag: '🇺🇸' },
    { code: 'en-GB', name: 'English (United Kingdom)', flag: '🇬🇧' },
    { code: 'en-CA', name: 'English (Canada)', flag: '🇨🇦' },
    { code: 'en-AU', name: 'English (Australia)', flag: '🇦🇺' },
    { code: 'en-NZ', name: 'English (New Zealand)', flag: '🇳🇿' },
    { code: 'en-IE', name: 'English (Ireland)', flag: '🇮🇪' },
    { code: 'en-ZA', name: 'English (South Africa)', flag: '🇿🇦' },
    { code: 'en-IN', name: 'English (India)', flag: '🇮🇳' },
    { code: 'en-SG', name: 'English (Singapore)', flag: '🇸🇬' },
    
    // Spanish Speaking Countries
    { code: 'es-ES', name: 'Español (España)', flag: '🇪🇸' },
    { code: 'es-MX', name: 'Español (México)', flag: '🇲🇽' },
    { code: 'es-AR', name: 'Español (Argentina)', flag: '🇦🇷' },
    { code: 'es-CO', name: 'Español (Colombia)', flag: '🇨🇴' },
    { code: 'es-CL', name: 'Español (Chile)', flag: '🇨🇱' },
    { code: 'es-PE', name: 'Español (Perú)', flag: '🇵🇪' },
    { code: 'es-VE', name: 'Español (Venezuela)', flag: '🇻🇪' },
    { code: 'es-EC', name: 'Español (Ecuador)', flag: '🇪🇨' },
    { code: 'es-UY', name: 'Español (Uruguay)', flag: '🇺🇾' },
    { code: 'es-PY', name: 'Español (Paraguay)', flag: '🇵🇾' },
    { code: 'es-BO', name: 'Español (Bolivia)', flag: '🇧🇴' },
    { code: 'es-GT', name: 'Español (Guatemala)', flag: '🇬🇹' },
    { code: 'es-CR', name: 'Español (Costa Rica)', flag: '🇨🇷' },
    { code: 'es-PA', name: 'Español (Panamá)', flag: '🇵🇦' },
    { code: 'es-DO', name: 'Español (República Dominicana)', flag: '🇩🇴' },
    
    // French Speaking Countries
    { code: 'fr-FR', name: 'Français (France)', flag: '🇫🇷' },
    { code: 'fr-CA', name: 'Français (Canada)', flag: '🇨🇦' },
    { code: 'fr-BE', name: 'Français (Belgique)', flag: '🇧🇪' },
    { code: 'fr-CH', name: 'Français (Suisse)', flag: '🇨🇭' },
    { code: 'fr-LU', name: 'Français (Luxembourg)', flag: '🇱🇺' },
    { code: 'fr-MC', name: 'Français (Monaco)', flag: '🇲🇨' },
    
    // German Speaking Countries
    { code: 'de-DE', name: 'Deutsch (Deutschland)', flag: '🇩🇪' },
    { code: 'de-AT', name: 'Deutsch (Österreich)', flag: '🇦🇹' },
    { code: 'de-CH', name: 'Deutsch (Schweiz)', flag: '🇨🇭' },
    { code: 'de-LI', name: 'Deutsch (Liechtenstein)', flag: '🇱🇮' },
    { code: 'de-LU', name: 'Deutsch (Luxembourg)', flag: '🇱🇺' },
    
    // Italian
    { code: 'it-IT', name: 'Italiano (Italia)', flag: '🇮🇹' },
    { code: 'it-CH', name: 'Italiano (Svizzera)', flag: '🇨🇭' },
    { code: 'it-SM', name: 'Italiano (San Marino)', flag: '🇸🇲' },
    { code: 'it-VA', name: 'Italiano (Vaticano)', flag: '🇻🇦' },
    
    // Portuguese Speaking Countries
    { code: 'pt-BR', name: 'Português (Brasil)', flag: '🇧🇷' },
    { code: 'pt-PT', name: 'Português (Portugal)', flag: '🇵🇹' },
    { code: 'pt-AO', name: 'Português (Angola)', flag: '🇦🇴' },
    { code: 'pt-MZ', name: 'Português (Moçambique)', flag: '🇲🇿' },
    
    // Asian Languages
    { code: 'zh-CN', name: '中文 (中国大陆)', flag: '🇨🇳' },
    { code: 'zh-TW', name: '中文 (台灣)', flag: '🇹🇼' },
    { code: 'zh-HK', name: '中文 (香港)', flag: '🇭🇰' },
    { code: 'zh-SG', name: '中文 (新加坡)', flag: '🇸🇬' },
    { code: 'ja-JP', name: '日本語 (日本)', flag: '🇯🇵' },
    { code: 'ko-KR', name: '한국어 (대한민국)', flag: '🇰🇷' },
    { code: 'hi-IN', name: 'हिन्दी (भारत)', flag: '🇮🇳' },
    { code: 'th-TH', name: 'ไทย (ประเทศไทย)', flag: '🇹🇭' },
    { code: 'vi-VN', name: 'Tiếng Việt (Việt Nam)', flag: '🇻🇳' },
    { code: 'id-ID', name: 'Bahasa Indonesia (Indonesia)', flag: '🇮🇩' },
    { code: 'ms-MY', name: 'Bahasa Melayu (Malaysia)', flag: '🇲🇾' },
    { code: 'tl-PH', name: 'Filipino (Pilipinas)', flag: '🇵🇭' },
    { code: 'bn-BD', name: 'বাংলা (বাংলাদেশ)', flag: '🇧🇩' },
    { code: 'ur-PK', name: 'اردو (پاکستان)', flag: '🇵🇰' },
    { code: 'ta-IN', name: 'தமிழ் (இந்தியா)', flag: '🇮🇳' },
    { code: 'te-IN', name: 'తెలుగు (భారతదేశం)', flag: '🇮🇳' },
    { code: 'mr-IN', name: 'मराठी (भारत)', flag: '🇮🇳' },
    { code: 'gu-IN', name: 'ગુજરાતી (ભારત)', flag: '🇮🇳' },
    { code: 'kn-IN', name: 'ಕನ್ನಡ (ಭಾರತ)', flag: '🇮🇳' },
    { code: 'ml-IN', name: 'മലയാളം (ഇന്ത്യ)', flag: '🇮🇳' },
    { code: 'pa-IN', name: 'ਪੰਜਾਬੀ (ਭਾਰਤ)', flag: '🇮🇳' },
    
    // Middle Eastern & African Languages
    { code: 'ar-SA', name: 'العربية (السعودية)', flag: '🇸🇦' },
    { code: 'ar-AE', name: 'العربية (الإمارات)', flag: '🇦🇪' },
    { code: 'ar-EG', name: 'العربية (مصر)', flag: '🇪🇬' },
    { code: 'ar-MA', name: 'العربية (المغرب)', flag: '🇲🇦' },
    { code: 'ar-DZ', name: 'العربية (الجزائر)', flag: '🇩🇿' },
    { code: 'ar-TN', name: 'العربية (تونس)', flag: '🇹🇳' },
    { code: 'ar-LB', name: 'العربية (لبنان)', flag: '🇱🇧' },
    { code: 'ar-JO', name: 'العربية (الأردن)', flag: '🇯🇴' },
    { code: 'ar-KW', name: 'العربية (الكويت)', flag: '🇰🇼' },
    { code: 'ar-QA', name: 'العربية (قطر)', flag: '🇶🇦' },
    { code: 'ar-BH', name: 'العربية (البحرين)', flag: '🇧🇭' },
    { code: 'ar-OM', name: 'العربية (عُمان)', flag: '🇴🇲' },
    { code: 'ar-YE', name: 'العربية (اليمن)', flag: '🇾🇪' },
    { code: 'ar-SY', name: 'العربية (سوريا)', flag: '🇸🇾' },
    { code: 'ar-IQ', name: 'العربية (العراق)', flag: '🇮🇶' },
    { code: 'he-IL', name: 'עברית (ישראל)', flag: '🇮🇱' },
    { code: 'tr-TR', name: 'Türkçe (Türkiye)', flag: '🇹🇷' },
    { code: 'fa-IR', name: 'فارسی (ایران)', flag: '🇮🇷' },
    { code: 'sw-KE', name: 'Kiswahili (Kenya)', flag: '🇰🇪' },
    { code: 'sw-TZ', name: 'Kiswahili (Tanzania)', flag: '🇹🇿' },
    { code: 'am-ET', name: 'አማርኛ (ኢትዮጵያ)', flag: '🇪🇹' },
    { code: 'zu-ZA', name: 'isiZulu (South Africa)', flag: '🇿🇦' },
    { code: 'xh-ZA', name: 'isiXhosa (South Africa)', flag: '🇿🇦' },
    { code: 'af-ZA', name: 'Afrikaans (Suid-Afrika)', flag: '🇿🇦' },
    
    // European Languages
    { code: 'ru-RU', name: 'Русский (Россия)', flag: '🇷🇺' },
    { code: 'ru-BY', name: 'Русский (Беларусь)', flag: '🇧🇾' },
    { code: 'ru-KZ', name: 'Русский (Казахстан)', flag: '🇰🇿' },
    { code: 'uk-UA', name: 'Українська (Україна)', flag: '🇺🇦' },
    { code: 'pl-PL', name: 'Polski (Polska)', flag: '🇵🇱' },
    { code: 'nl-NL', name: 'Nederlands (Nederland)', flag: '🇳🇱' },
    { code: 'nl-BE', name: 'Nederlands (België)', flag: '🇧🇪' },
    { code: 'sv-SE', name: 'Svenska (Sverige)', flag: '🇸🇪' },
    { code: 'sv-FI', name: 'Svenska (Finland)', flag: '🇫🇮' },
    { code: 'no-NO', name: 'Norsk (Norge)', flag: '🇳🇴' },
    { code: 'da-DK', name: 'Dansk (Danmark)', flag: '🇩🇰' },
    { code: 'fi-FI', name: 'Suomi (Suomi)', flag: '🇫🇮' },
    { code: 'is-IS', name: 'Íslenska (Ísland)', flag: '🇮🇸' },
    { code: 'cs-CZ', name: 'Čeština (Česká republika)', flag: '🇨🇿' },
    { code: 'sk-SK', name: 'Slovenčina (Slovensko)', flag: '🇸🇰' },
    { code: 'hu-HU', name: 'Magyar (Magyarország)', flag: '🇭🇺' },
    { code: 'ro-RO', name: 'Română (România)', flag: '🇷🇴' },
    { code: 'bg-BG', name: 'Български (България)', flag: '🇧🇬' },
    { code: 'hr-HR', name: 'Hrvatski (Hrvatska)', flag: '🇭🇷' },
    { code: 'sr-RS', name: 'Српски (Србија)', flag: '🇷🇸' },
    { code: 'bs-BA', name: 'Bosanski (Bosna i Hercegovina)', flag: '🇧🇦' },
    { code: 'me-ME', name: 'Crnogorski (Crna Gora)', flag: '🇲🇪' },
    { code: 'mk-MK', name: 'Македонски (Македонија)', flag: '🇲🇰' },
    { code: 'sl-SI', name: 'Slovenščina (Slovenija)', flag: '🇸🇮' },
    { code: 'et-EE', name: 'Eesti (Eesti)', flag: '🇪🇪' },
    { code: 'lv-LV', name: 'Latviešu (Latvija)', flag: '🇱🇻' },
    { code: 'lt-LT', name: 'Lietuvių (Lietuva)', flag: '🇱🇹' },
    { code: 'el-GR', name: 'Ελληνικά (Ελλάδα)', flag: '🇬🇷' },
    { code: 'el-CY', name: 'Ελληνικά (Κύπρος)', flag: '🇨🇾' },
    { code: 'mt-MT', name: 'Malti (Malta)', flag: '🇲🇹' },
    { code: 'ga-IE', name: 'Gaeilge (Éire)', flag: '🇮🇪' },
    { code: 'cy-GB', name: 'Cymraeg (Cymru)', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
    { code: 'eu-ES', name: 'Euskera (Euskadi)', flag: '🇪🇸' },
    { code: 'ca-ES', name: 'Català (Catalunya)', flag: '🇪🇸' },
    { code: 'gl-ES', name: 'Galego (Galicia)', flag: '🇪🇸' },
    
    // Nordic Languages
    { code: 'fo-FO', name: 'Føroyskt (Føroyar)', flag: '🇫🇴' },
    { code: 'kl-GL', name: 'Kalaallisut (Kalaallit Nunaat)', flag: '🇬🇱' },
    
    // Other Languages
    { code: 'eo', name: 'Esperanto', flag: '🌍' },
    { code: 'la', name: 'Latina', flag: '🏛️' }
  ];

  // Group languages by region for better organization
  const languageGroups = [
    {
      name: 'English Speaking',
      languages: languages.filter(lang => lang.code.startsWith('en-'))
    },
    {
      name: 'Spanish Speaking',
      languages: languages.filter(lang => lang.code.startsWith('es-'))
    },
    {
      name: 'French Speaking',
      languages: languages.filter(lang => lang.code.startsWith('fr-'))
    },
    {
      name: 'German Speaking',
      languages: languages.filter(lang => lang.code.startsWith('de-'))
    },
    {
      name: 'Asian Languages',
      languages: languages.filter(lang => 
        ['zh-', 'ja-', 'ko-', 'hi-', 'th-', 'vi-', 'id-', 'ms-', 'tl-', 'bn-', 'ur-', 'ta-', 'te-', 'mr-', 'gu-', 'kn-', 'ml-', 'pa-'].some(prefix => lang.code.startsWith(prefix))
      )
    },
    {
      name: 'Arabic Speaking',
      languages: languages.filter(lang => lang.code.startsWith('ar-'))
    },
    {
      name: 'European Languages',
      languages: languages.filter(lang => 
        ['ru-', 'uk-', 'pl-', 'nl-', 'sv-', 'no-', 'da-', 'fi-', 'is-', 'cs-', 'sk-', 'hu-', 'ro-', 'bg-', 'hr-', 'sr-', 'bs-', 'me-', 'mk-', 'sl-', 'et-', 'lv-', 'lt-', 'el-', 'mt-', 'ga-', 'cy-', 'eu-', 'ca-', 'gl-', 'fo-', 'kl-'].some(prefix => lang.code.startsWith(prefix))
      )
    },
    {
      name: 'Other Languages',
      languages: languages.filter(lang => 
        ['it-', 'pt-', 'he-', 'tr-', 'fa-', 'sw-', 'am-', 'zu-', 'xh-', 'af-', 'eo', 'la'].some(prefix => lang.code.startsWith(prefix)) || lang.code === 'eo' || lang.code === 'la'
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Video className="w-10 h-10 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg"></div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                VeoAI
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              The most advanced AI video generation platform. Create stunning 8-second 
              cinematic clips with built-in audio and perfect realism.
            </p>
            
            {/* Enhanced Language Selector */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="w-6 h-6" />
                <span className="text-lg font-semibold">Choose Your Language & Region</span>
              </div>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg max-h-60 overflow-y-auto"
                style={{ maxHeight: '240px' }}
              >
                {languageGroups.map((group) => (
                  <optgroup key={group.name} label={group.name} className="text-cyan-400 font-semibold">
                    {group.languages.map((lang) => (
                      <option key={lang.code} value={lang.code} className="text-white bg-gray-800 py-2">
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <p className="text-sm text-gray-500">
                Available in {languages.length}+ languages and regions worldwide
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Github className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Features</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Pricing</a></li>
              <li><a href="/generate" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Generate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Changelog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Press Kit</a></li>
              <li><a href="mailto:hello@veoai.com" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 text-lg">
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Legal & Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 text-lg">
                <FileText className="w-5 h-5" />
                <span>Terms of Service</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 text-lg">
                <Shield className="w-5 h-5" />
                <span>Privacy Policy</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 text-lg">
                <CreditCard className="w-5 h-5" />
                <span>Refund Policy</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg">
            © 2025 VeoAI. All rights reserved.
          </p>
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
            <a href="mailto:hello@veoai.com" className="text-gray-400 hover:text-cyan-400 text-lg transition-colors">
              hello@veoai.com
            </a>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 text-lg">
              Made with ❤️ for creators worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;