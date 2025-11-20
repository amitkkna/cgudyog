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

// Enhanced news data with more comprehensive content
const sampleNews: NewsItem[] = [
  {
    id: 1,
    title: {
      en: "BREAKING: Chhattisgarh Industrial Growth Reaches Record 35% Increase",
      hi: "ब्रेकिंग: छत्तीसगढ़ का औद्योगिक विकास रिकॉर्ड 35% वृद्धि पर पहुंचा"
    },
    excerpt: {
      en: "Historic milestone achieved as state's industrial sector posts highest growth rate in two decades with major international investments.",
      hi: "प्रमुख अंतर्राष्ट्रीय निवेश के साथ राज्य के औद्योगिक क्षेत्र ने दो दशकों में सबसे अधिक विकास दर दर्ज करते हुए ऐतिहासिक मील का पत्थर हासिल किया।"
    },
    content: {
      en: "Chhattisgarh has achieved a remarkable milestone with industrial growth reaching 35%, the highest in two decades. Major international companies including Fortune 500 firms have announced investments worth ₹25,000 crores across manufacturing, mining, and renewable energy sectors. The state's progressive industrial policies, streamlined approval processes, and world-class infrastructure have positioned it as India's emerging industrial powerhouse.",
      hi: "छत्तीसगढ़ ने औद्योगिक विकास 35% तक पहुंचने के साथ एक उल्लेखनीय मील का पत्थर हासिल किया है, जो दो दशकों में सबसे अधिक है। फॉर्च्यून 500 फर्मों सहित प्रमुख अंतर्राष्ट्रीय कंपनियों ने विनिर्माण, खनन और नवीकरणीय ऊर्जा क्षेत्रों में ₹25,000 करोड़ के निवेश की घोषणा की है।"
    },
    date: "2024-09-06",
    category: {
      en: "Breaking News",
      hi: "ब्रेकिंग न्यूज़"
    },
    author: {
      en: "Economic Affairs Desk",
      hi: "आर्थिक मामलों की डेस्क"
    },
    readTime: {
      en: "7 min read",
      hi: "7 मिनट पढ़ें"
    },
    featured: true,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
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
  },
  {
    id: 7,
    title: {
      en: "₹50,000 Crore Investment Pipeline Announced for Chhattisgarh",
      hi: "छत्तीसगढ़ के लिए ₹50,000 करोड़ का निवेश पाइपलाइन घोषित"
    },
    excerpt: {
      en: "Major industrial conglomerates commit massive investments spanning steel, cement, power, and renewable energy sectors.",
      hi: "प्रमुख औद्योगिक समूहों ने इस्पात, सीमेंट, ऊर्जा और नवीकरणीय ऊर्जा क्षेत्रों में बड़े पैमाने पर निवेश की प्रतिबद्धता जताई है।"
    },
    content: {
      en: "In a landmark development, leading industrial houses have announced a cumulative investment of ₹50,000 crores in Chhattisgarh over the next five years. This includes expansion of existing steel plants, new cement manufacturing units, renewable energy projects, and advanced manufacturing facilities. The investments are expected to create over 2 lakh direct and indirect employment opportunities.",
      hi: "एक ऐतिहासिक विकास में, अग्रणी औद्योगिक घरानों ने अगले पांच वर्षों में छत्तीसगढ़ में ₹50,000 करोड़ के संचयी निवेश की घोषणा की है। इसमें मौजूदा स्टील प्लांटों का विस्तार, नई सीमेंट विनिर्माण इकाइयां, नवीकरणीय ऊर्जा परियोजनाएं और उन्नत विनिर्माण सुविधाएं शामिल हैं।"
    },
    date: "2024-09-05",
    category: {
      en: "Investment News",
      hi: "निवेश समाचार"
    },
    author: {
      en: "Investment Desk",
      hi: "निवेश डेस्क"
    },
    readTime: {
      en: "8 min read",
      hi: "8 मिनट पढ़ें"
    },
    featured: true,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop"
  },
  {
    id: 8,
    title: {
      en: "Chhattisgarh Emerges as India's Leading Steel Production Hub",
      hi: "छत्तीसगढ़ भारत के अग्रणी इस्पात उत्पादन केंद्र के रूप में उभरा"
    },
    excerpt: {
      en: "State's steel production capacity reaches 40 million tonnes, positioning it as the country's largest steel producing region.",
      hi: "राज्य की इस्पात उत्पादन क्षमता 40 मिलियन टन तक पहुंच गई है, जो इसे देश के सबसे बड़े इस्पात उत्पादक क्षेत्र के रूप में स्थापित करती है।"
    },
    content: {
      en: "Chhattisgarh has achieved a historic milestone by becoming India's leading steel production hub with an annual capacity of 40 million tonnes. The state's abundant mineral resources, strategic location, and supportive government policies have attracted major steel manufacturers. This achievement places Chhattisgarh ahead of traditional steel-producing states and makes it a crucial player in India's steel self-reliance mission.",
      hi: "छत्तीसगढ़ ने 40 मिलियन टन की वार्षिक क्षमता के साथ भारत के अग्रणी इस्पात उत्पादन केंद्र बनकर एक ऐतिहासिक मील का पत्थर हासिल किया है। राज्य के प्रचुर खनिज संसाधन, रणनीतिक स्थान और सहायक सरकारी नीतियों ने प्रमुख इस्पात निर्माताओं को आकर्षित किया है।"
    },
    date: "2024-09-04",
    category: {
      en: "Industry Achievement",
      hi: "उद्योग उपलब्धि"
    },
    author: {
      en: "Steel Industry Analyst",
      hi: "इस्पात उद्योग विश्लेषक"
    },
    readTime: {
      en: "6 min read",
      hi: "6 मिनट पढ़ें"
    },
    featured: true,
    image: "https://images.unsplash.com/photo-1565890681840-b40295ad1ba4?w=800&h=400&fit=crop"
  },
  {
    id: 9,
    title: {
      en: "Start-up Ecosystem Flourishes with 500+ New Registrations",
      hi: "500+ नए पंजीकरण के साथ स्टार्ट-अप इकोसिस्टम का विकास"
    },
    excerpt: {
      en: "Chhattisgarh's entrepreneurial landscape witnesses unprecedented growth with innovative start-ups across technology and manufacturing sectors.",
      hi: "छत्तीसगढ़ के उद्यमशीलता परिदृश्य में प्रौद्योगिकी और विनिर्माण क्षेत्रों में नवाचार स्टार्ट-अप के साथ अभूतपूर्व वृद्धि देखी गई है।"
    },
    content: {
      en: "The state has registered over 500 new start-ups in the past year, marking a 300% increase from the previous year. These start-ups span across fintech, agritech, edtech, and manufacturing sectors. The government's start-up policy, incubation centers, and funding support have created a thriving ecosystem for young entrepreneurs.",
      hi: "राज्य ने पिछले साल 500 से अधिक नए स्टार्ट-अप पंजीकृत किए हैं, जो पिछले साल से 300% की वृद्धि दर्शाता है। ये स्टार्ट-अप फिनटेक, एग्रीटेक, एडटेक और विनिर्माण क्षेत्रों में फैले हुए हैं।"
    },
    date: "2024-09-03",
    category: {
      en: "Entrepreneurship",
      hi: "उद्यमिता"
    },
    author: {
      en: "Start-up Reporter",
      hi: "स्टार्ट-अप संवाददाता"
    },
    readTime: {
      en: "5 min read",
      hi: "5 मिनट पढ़ें"
    },
    featured: false,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop"
  },
  {
    id: 10,
    title: {
      en: "International Business Delegation Visits Raipur for Trade Partnerships",
      hi: "व्यापारिक साझेदारी के लिए अंतर्राष्ट्रीय व्यापार प्रतिनिधिमंडल की रायपुर यात्रा"
    },
    excerpt: {
      en: "High-level business delegation from five countries explores collaboration opportunities in mining, agriculture, and renewable energy.",
      hi: "पांच देशों के उच्च-स्तरीय व्यापार प्रतिनिधिमंडल ने खनन, कृषि और नवीकरणीय ऊर्जा में सहयोग के अवसरों की खोज की।"
    },
    content: {
      en: "A prestigious international business delegation comprising representatives from Germany, Japan, South Korea, Australia, and UAE visited Raipur to explore potential partnerships. The delegation showed keen interest in Chhattisgarh's mineral wealth, agricultural produce, and renewable energy potential. Several MoUs worth ₹15,000 crores are expected to be signed.",
      hi: "जर्मनी, जापान, दक्षिण कोरिया, ऑस्ट्रेलिया और UAE के प्रतिनिधियों से मिलकर एक प्रतिष्ठित अंतर्राष्ट्रीय व्यापार प्रतिनिधिमंडल ने संभावित साझेदारी की खोज के लिए रायपुर का दौरा किया।"
    },
    date: "2024-09-02",
    category: {
      en: "International Trade",
      hi: "अंतर्राष्ट्रीय व्यापार"
    },
    author: {
      en: "International Affairs Correspondent",
      hi: "अंतर्राष्ट्रीय मामलों के संवाददाता"
    },
    readTime: {
      en: "7 min read",
      hi: "7 मिनट पढ़ें"
    },
    featured: false,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop"
  },
  {
    id: 11,
    title: {
      en: "Green Energy Revolution: 2000 MW Solar Capacity Achieved",
      hi: "हरित ऊर्जा क्रांति: 2000 मेगावाट सौर क्षमता हासिल"
    },
    excerpt: {
      en: "Chhattisgarh leads renewable energy transition with massive solar installations and innovative green technology adoption.",
      hi: "छत्तीसगढ़ बड़े पैमाने पर सौर प्रतिष्ठानों और नवाचार हरित प्रौद्योगिकी अपनाने के साथ नवीकरणीय ऊर्जा संक्रमण का नेतृत्व करता है।"
    },
    content: {
      en: "The state has achieved a remarkable milestone of 2000 MW solar power generation capacity, making it one of India's leading renewable energy producers. This achievement aligns with India's commitment to achieve net-zero emissions by 2070. The state is also developing floating solar projects and energy storage solutions.",
      hi: "राज्य ने 2000 मेगावाट सौर ऊर्जा उत्पादन क्षमता का एक उल्लेखनीय मील का पत्थर हासिल किया है, जो इसे भारत के अग्रणी नवीकरणीय ऊर्जा उत्पादकों में से एक बनाता है।"
    },
    date: "2024-09-01",
    category: {
      en: "Renewable Energy",
      hi: "नवीकरणीय ऊर्जा"
    },
    author: {
      en: "Energy Correspondent",
      hi: "ऊर्जा संवाददाता"
    },
    readTime: {
      en: "6 min read",
      hi: "6 मिनट पढ़ें"
    },
    featured: false,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop"
  }
];

const categories = {
  en: ["All", "Breaking News", "Industry News", "Association News", "Events", "Government Policy", "Sustainability", "Trade & Export", "Investment News", "Industry Achievement", "Entrepreneurship", "International Trade", "Renewable Energy"],
  hi: ["सभी", "ब्रेकिंग न्यूज़", "उद्योग समाचार", "संघ समाचार", "कार्यक्रम", "सरकारी नीति", "स्थिरता", "व्यापार और निर्यात", "निवेश समाचार", "उद्योग उपलब्धि", "उद्यमिता", "अंतर्राष्ट्रीय व्यापार", "नवीकरणीय ऊर्जा"]
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


      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      {/* Premium Breaking News Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-3 shadow-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide"
              >
                {language === 'en' ? 'BREAKING' : 'ब्रेकिंग'}
              </motion.span>
              <div className="hidden md:block w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <p className="text-sm md:text-base font-medium">
                {language === 'en'
                  ? 'Chhattisgarh Industrial Growth Reaches Record 35% Increase - Major International Investments Announced'
                  : 'छत्तीसगढ़ का औद्योगिक विकास रिकॉर्ड 35% वृद्धि पर पहुंचा - प्रमुख अंतर्राष्ट्रीय निवेश की घोषणा'
                }
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <ClockIcon className="h-4 w-4" />
              <span>{language === 'en' ? 'Live Updates' : 'लाइव अपडेट'}</span>
            </div>
          </div>
        </div>
      </motion.div>

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
        <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="mr-2">⭐</span>
                {language === 'en' ? 'Premium Featured Stories' : 'प्रीमियम मुख्य समाचार'}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Breaking Headlines' : 'मुख्य समाचार'}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Stay ahead with the most impactful stories shaping Chhattisgarh\'s business landscape'
                  : 'छत्तीसगढ़ के व्यापारिक परिदृश्य को आकार देने वाली सबसे प्रभावशाली कहानियों के साथ आगे रहें'
                }
              </p>
            </motion.div>

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


    </div>
  );
}
