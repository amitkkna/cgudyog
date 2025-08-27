'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon, 
  NewspaperIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  TagIcon,
  ClockIcon,
  UserIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';

interface NewsItem {
  id: number;
  title: {
    en: string;
    hi: string;
  };
  content: {
    en: string;
    hi: string;
  };
  excerpt: {
    en: string;
    hi: string;
  };
  date: string;
  image?: string;
  category: {
    en: string;
    hi: string;
  };
  author: {
    en: string;
    hi: string;
  };
  readTime: {
    en: string;
    hi: string;
  };
  featured: boolean;
}

// Sample news data - In real app, this would come from a database
const sampleNews: NewsItem[] = [
  {
    id: 1,
    title: {
      en: "Chhattisgarh Industrial Growth Reaches New Heights",
      hi: "छत्तीसगढ़ का औद्योगिक विकास नई ऊंचाइयों पर पहुंचा"
    },
    excerpt: {
      en: "The state's industrial sector has shown remarkable growth with new investments and expansion projects across multiple sectors.",
      hi: "राज्य के औद्योगिक क्षेत्र ने विभिन्न क्षेत्रों में नए निवेश और विस्तार परियोजनाओं के साथ उल्लेखनीय वृद्धि दिखाई है।"
    },
    content: {
      en: "Chhattisgarh's industrial landscape continues to flourish with significant investments in manufacturing, mining, and technology sectors. The state government's progressive policies and business-friendly environment have attracted both domestic and international investors, leading to unprecedented growth in industrial output and employment opportunities.",
      hi: "छत्तीसगढ़ का औद्योगिक परिदृश्य विनिर्माण, खनन और प्रौद्योगिकी क्षेत्रों में महत्वपूर्ण निवेश के साथ फलता-फूलता रहा है। राज्य सरकार की प्रगतिशील नीतियों और व्यापार-अनुकूल वातावरण ने घरेलू और अंतर्राष्ट्रीय दोनों निवेशकों को आकर्षित किया है, जिससे औद्योगिक उत्पादन और रोजगार के अवसरों में अभूतपूर्व वृद्धि हुई है।"
    },
    date: "2024-08-25",
    category: {
      en: "Industry News",
      hi: "उद्योग समाचार"
    },
    author: {
      en: "Industrial Correspondent",
      hi: "औद्योगिक संवाददाता"
    },
    readTime: {
      en: "5 min read",
      hi: "5 मिनट पढ़ें"
    },
    featured: true,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: {
      en: "15 New Members Join Udyog Mahasangh This Month",
      hi: "इस महीने उद्योग महासंघ में 15 नए सदस्य शामिल हुए"
    },
    excerpt: {
      en: "Growing membership base reflects the increasing trust in our association's ability to foster business growth and networking.",
      hi: "बढ़ता सदस्यता आधार व्यापारिक वृद्धि और नेटवर्किंग को बढ़ावा देने में हमारी संस्था की क्षमता पर बढ़ते भरोसे को दर्शाता है।"
    },
    content: {
      en: "We are pleased to announce that 15 new businesses have joined Chhattisgarh Udyog Mahasangh this month, spanning across manufacturing, trading, and service sectors. This expansion strengthens our network and provides more opportunities for collaboration and business growth among members.",
      hi: "हमें यह घोषणा करते हुए खुशी हो रही है कि इस महीने 15 नए व्यापार छत्तीसगढ़ उद्योग महासंघ में शामिल हुए हैं, जो विनिर्माण, व्यापार और सेवा क्षेत्रों में फैले हुए हैं। यह विस्तार हमारे नेटवर्क को मजबूत बनाता है और सदस्यों के बीच सहयोग और व्यापारिक वृद्धि के लिए अधिक अवसर प्रदान करता है।"
    },
    date: "2024-08-24",
    category: {
      en: "Association News",
      hi: "संघ समाचार"
    },
    author: {
      en: "Membership Committee",
      hi: "सदस्यता समिति"
    },
    readTime: {
      en: "3 min read",
      hi: "3 मिनट पढ़ें"
    },
    featured: true
  },
  {
    id: 3,
    title: {
      en: "Digital Transformation Workshop Series Announced",
      hi: "डिजिटल परिवर्तन कार्यशाला श्रृंखला की घोषणा"
    },
    excerpt: {
      en: "Comprehensive training program designed to help businesses adapt to the digital age and leverage technology for growth.",
      hi: "व्यापक प्रशिक्षण कार्यक्रम जो व्यवसायों को डिजिटल युग के अनुकूल होने और विकास के लिए प्रौद्योगिकी का लाभ उठाने में मदद करने के लिए डिज़ाइन किया गया है।"
    },
    content: {
      en: "Join us for an exclusive series of workshops on digital transformation specifically designed for businesses in Chhattisgarh. Topics include e-commerce integration, digital marketing strategies, automation tools, and data analytics for better business decision-making.",
      hi: "छत्तीसगढ़ के व्यवसायों के लिए विशेष रूप से डिज़ाइन की गई डिजिटल परिवर्तन पर कार्यशालाओं की एक विशेष श्रृंखला में शामिल हों। विषयों में ई-कॉमर्स एकीकरण, डिजिटल मार्केटिंग रणनीतियां, स्वचालन उपकरण, और बेहतर व्यापारिक निर्णय लेने के लिए डेटा एनालिटिक्स शामिल हैं।"
    },
    date: "2024-08-23",
    category: {
      en: "Events",
      hi: "कार्यक्रम"
    },
    author: {
      en: "Training Department",
      hi: "प्रशिक्षण विभाग"
    },
    readTime: {
      en: "4 min read",
      hi: "4 मिनट पढ़ें"
    },
    featured: false
  },
  {
    id: 4,
    title: {
      en: "Government Announces New MSME Support Schemes",
      hi: "सरकार ने नई MSME सहायता योजनाओं की घोषणा की"
    },
    excerpt: {
      en: "Latest government initiatives provide enhanced financial support and incentives for micro, small, and medium enterprises.",
      hi: "नवीनतम सरकारी पहल सूक्ष्म, लघु और मध्यम उद्यमों के लिए बेहतर वित्तीय सहायता और प्रोत्साहन प्रदान करती है।"
    },
    content: {
      en: "The Chhattisgarh government has unveiled a comprehensive support package for MSMEs, including collateral-free loans, technology upgrade subsidies, and export promotion incentives. These measures are expected to boost entrepreneurship and create new employment opportunities.",
      hi: "छत्तीसगढ़ सरकार ने MSME के लिए एक व्यापक सहायता पैकेज का अनावरण किया है, जिसमें बिना गारंटी के ऋण, तकनीकी उन्नयन सब्सिडी, और निर्यात प्रोत्साहन शामिल हैं। इन उपायों से उद्यमिता को बढ़ावा मिलने और नए रोजगार के अवसर सृजित होने की उम्मीद है।"
    },
    date: "2024-08-22",
    category: {
      en: "Government Policy",
      hi: "सरकारी नीति"
    },
    author: {
      en: "Policy Analyst",
      hi: "नीति विश्लेषक"
    },
    readTime: {
      en: "6 min read",
      hi: "6 मिनट पढ़ें"
    },
    featured: false
  },
  {
    id: 5,
    title: {
      en: "Sustainable Manufacturing Practices Gain Momentum",
      hi: "सतत विनिर्माण प्रथाओं को गति मिल रही है"
    },
    excerpt: {
      en: "Local industries are increasingly adopting eco-friendly practices and sustainable manufacturing processes.",
      hi: "स्थानीय उद्योग तेजी से पर्यावरण-अनुकूल प्रथाओं और सतत विनिर्माण प्रक्रियाओं को अपना रहे हैं।"
    },
    content: {
      en: "Environmental consciousness is driving change in Chhattisgarh's manufacturing sector. Companies are investing in clean technologies, renewable energy, and waste reduction programs to create a more sustainable industrial ecosystem while maintaining competitiveness.",
      hi: "पर्यावरणीय चेतना छत्तीसगढ़ के विनिर्माण क्षेत्र में परिवर्तन ला रही है। कंपनियां स्वच्छ प्रौद्योगिकियों, नवीकरणीय ऊर्जा, और अपशिष्ट कमी कार्यक्रमों में निवेश कर रही हैं ताकि प्रतिस्पर्धा बनाए रखते हुए एक अधिक टिकाऊ औद्योगिक पारिस्थितिकी तंत्र बनाया जा सके।"
    },
    date: "2024-08-21",
    category: {
      en: "Sustainability",
      hi: "स्थिरता"
    },
    author: {
      en: "Environmental Reporter",
      hi: "पर्यावरण संवाददाता"
    },
    readTime: {
      en: "7 min read",
      hi: "7 मिनट पढ़ें"
    },
    featured: false
  },
  {
    id: 6,
    title: {
      en: "Export Growth Shows Strong Performance in Q2",
      hi: "द्वितीय तिमाही में निर्यात वृद्धि ने मजबूत प्रदर्शन दिखाया"
    },
    excerpt: {
      en: "Chhattisgarh exporters report significant growth in international trade, particularly in minerals and agricultural products.",
      hi: "छत्तीसगढ़ के निर्यातकों ने अंतर्राष्ट्रीय व्यापार में महत्वपूर्ण वृद्धि की रिपोर्ट की है, विशेष रूप से खनिज और कृषि उत्पादों में।"
    },
    content: {
      en: "The second quarter has shown exceptional performance in export activities with a 25% increase compared to the same period last year. Steel, coal, and rice exports have been the major contributors to this growth, opening new international markets.",
      hi: "दूसरी तिमाही में निर्यात गतिविधियों में असाधारण प्रदर्शन दिखा है जो पिछले साल की समान अवधि की तुलना में 25% की वृद्धि के साथ है। इस्पात, कोयला, और चावल के निर्यात इस वृद्धि के प्रमुख योगदानकर्ता रहे हैं, जिससे नए अंतर्राष्ट्रीय बाजार खुले हैं।"
    },
    date: "2024-08-20",
    category: {
      en: "Trade & Export",
      hi: "व्यापार और निर्यात"
    },
    author: {
      en: "Trade Correspondent",
      hi: "व्यापार संवाददाता"
    },
    readTime: {
      en: "5 min read",
      hi: "5 मिनट पढ़ें"
    },
    featured: false
  }
];

const categories = {
  en: ["All", "Industry News", "Association News", "Events", "Government Policy", "Sustainability", "Trade & Export"],
  hi: ["सभी", "उद्योग समाचार", "संघ समाचार", "कार्यक्रम", "सरकारी नीति", "स्थिरता", "व्यापार और निर्यात"]
};

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredNews, setFilteredNews] = useState(sampleNews);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  useEffect(() => {
    const filtered = sampleNews.filter(news => {
      const currentLang = language;
      const matchesSearch = news.title[currentLang].toLowerCase().includes(searchTerm.toLowerCase()) ||
                           news.content[currentLang].toLowerCase().includes(searchTerm.toLowerCase()) ||
                           news.excerpt[currentLang].toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === (language === 'en' ? 'All' : 'सभी') || 
                             news.category[currentLang] === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredNews(filtered);
  }, [searchTerm, selectedCategory, language]);

  const featuredNews = filteredNews.filter(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'hi' : 'en';
    setLanguage(newLang);
    // Reset category when switching language
    setSelectedCategory(newLang === 'en' ? 'All' : 'सभी');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
                <BuildingOfficeIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Chhattisgarh
                </h1>
                <p className="text-lg text-blue-600 font-semibold">Udyog Mahasangh</p>
              </div>
            </motion.div>
            
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  {language === 'en' ? 'Home' : 'होम'}
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  {language === 'en' ? 'About' : 'हमारे बारे में'}
                </Link>
                <Link href="/directory" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  {language === 'en' ? 'Directory' : 'निर्देशिका'}
                </Link>
                <Link href="/news" className="text-blue-600 font-semibold border-b-2 border-blue-600">
                  {language === 'en' ? 'News' : 'समाचार'}
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  {language === 'en' ? 'Contact' : 'संपर्क'}
                </Link>
                <Link href="/admin" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  {language === 'en' ? 'Admin' : 'एडमिन'}
                </Link>
              </nav>
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 hover:bg-white/90 transition-all duration-300"
              >
                <LanguageIcon className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">
                  {language === 'en' ? 'हिंदी' : 'English'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <NewspaperIcon className="h-10 w-10 text-blue-600 mr-3" />
              <span className="text-blue-600 font-semibold text-xl">
                {language === 'en' ? 'Latest Updates' : 'नवीनतम अपडेट'}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {language === 'en' ? (
                <>News & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Announcements</span></>
              ) : (
                <>समाचार और <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">घोषणाएं</span></>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'en' 
                ? "Stay informed with the latest developments, industry insights, and important announcements from Chhattisgarh's business ecosystem"
                : "छत्तीसगढ़ के व्यापारिक पारिस्थितिकी तंत्र से नवीनतम विकास, उद्योग अंतर्दृष्टि और महत्वपूर्ण घोषणाओं के साथ सूचित रहें"
              }
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-lg"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={language === 'en' 
                    ? "Search news, announcements, or topics..." 
                    : "समाचार, घोषणाएं या विषय खोजें..."
                  }
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <TagIcon className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  className="pl-12 pr-8 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-medium min-w-[250px] appearance-none bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories[language].map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-12 text-center"
            >
              {language === 'en' ? 'Featured Stories' : 'मुख्य समाचार'}
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  {news.image && (
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${news.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {news.category[language]}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <CalendarDaysIcon className="h-4 w-4 mr-2" />
                        {new Date(news.date).toLocaleDateString(language === 'en' ? 'en-IN' : 'hi-IN', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        {news.readTime[language]}
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                      {news.title[language]}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {news.excerpt[language]}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <UserIcon className="h-4 w-4 mr-2" />
                        {news.author[language]}
                      </div>
                      <Link 
                        href={`/news/${news.id}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Read Full Article
                        <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularNews.length > 0 && (
            <>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-12 text-center"
              >
                {language === 'en' ? 'Latest News' : 'नवीनतम समाचार'}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularNews.map((news, index) => (
                  <motion.article
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative h-48 bg-gradient-to-r from-blue-400 to-indigo-500">
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {news.category[language]}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarDaysIcon className="h-4 w-4 mr-2" />
                          {new Date(news.date).toLocaleDateString(language === 'en' ? 'en-IN' : 'hi-IN', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          {news.readTime[language]}
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {news.title[language]}
                      </h4>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {news.excerpt[language]}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <UserIcon className="h-3 w-3 mr-1" />
                          {news.author[language]}
                        </div>
                        <Link 
                          href={`/news/${news.id}`}
                          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                        >
                          {language === 'en' ? 'Read More' : 'और पढ़ें'}
                          <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}

          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <NewspaperIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {language === 'en' ? 'No news found' : 'कोई समाचार नहीं मिला'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'Try adjusting your search terms or category filter.' 
                  : 'अपने खोज शब्दों या श्रेणी फ़िल्टर को समायोजित करने का प्रयास करें।'
                }
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            {language === 'en' 
              ? '© 2024 Chhattisgarh Udyog Mahasangh. All rights reserved.' 
              : '© 2024 छत्तीसगढ़ उद्योग महासंघ। सभी अधिकार सुरक्षित।'
            }
          </p>
        </div>
      </footer>
    </div>
  );
}
