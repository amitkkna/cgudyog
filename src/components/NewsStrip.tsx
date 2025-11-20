'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface NewsStripItem {
  id: number;
  title: {
    en: string;
    hi: string;
  };
  date: string;
  category: {
    en: string;
    hi: string;
  };
  isBreaking?: boolean;
  url?: string;
}

interface NewsStripProps {
  position?: 'top' | 'bottom' | 'inline';
  variant?: 'scrolling' | 'sliding' | 'static';
  autoPlay?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
  showControls?: boolean;
  showClose?: boolean;
  maxItems?: number;
  className?: string;
  language?: 'en' | 'hi';
}

// Sample news data for the strip
const stripNewsData: NewsStripItem[] = [
  {
    id: 1,
    title: {
      en: "Chhattisgarh Industrial Growth Reaches New Heights with 25% Increase",
      hi: "छत्तीसगढ़ का औद्योगिक विकास 25% वृद्धि के साथ नई ऊंचाइयों पर"
    },
    date: "2024-08-25",
    category: {
      en: "Industry News",
      hi: "उद्योग समाचार"
    },
    isBreaking: true,
    url: "/news/1"
  },
  {
    id: 2,
    title: {
      en: "15 New Members Join Udyog Mahasangh This Month",
      hi: "इस महीने उद्योग महासंघ में 15 नए सदस्य शामिल"
    },
    date: "2024-08-24",
    category: {
      en: "Association News",
      hi: "संघ समाचार"
    },
    url: "/news/2"
  },
  {
    id: 3,
    title: {
      en: "Government Announces New MSME Support Schemes Worth ₹500 Crores",
      hi: "सरकार ने ₹500 करोड़ की नई MSME सहायता योजनाओं की घोषणा"
    },
    date: "2024-08-22",
    category: {
      en: "Government Policy",
      hi: "सरकारी नीति"
    },
    isBreaking: true,
    url: "/news/4"
  },
  {
    id: 4,
    title: {
      en: "Digital Transformation Workshop Series Starts Next Week",
      hi: "डिजिटल परिवर्तन कार्यशाला श्रृंखला अगले सप्ताह शुरू"
    },
    date: "2024-08-23",
    category: {
      en: "Events",
      hi: "कार्यक्रम"
    },
    url: "/news/3"
  },
  {
    id: 5,
    title: {
      en: "Export Growth Shows Strong Performance with Record ₹2,500 Crores",
      hi: "निर्यात वृद्धि ने रिकॉर्ड ₹2,500 करोड़ के साथ मजबूत प्रदर्शन"
    },
    date: "2024-08-20",
    category: {
      en: "Trade & Export",
      hi: "व्यापार और निर्यात"
    },
    url: "/news/6"
  },
  {
    id: 6,
    title: {
      en: "₹50,000 Crore Investment Pipeline Announced - Major Industrial Boost",
      hi: "₹50,000 करोड़ निवेश पाइपलाइन घोषित - बड़ा औद्योगिक बूस्ट"
    },
    date: "2024-09-05",
    category: {
      en: "Investment News",
      hi: "निवेश समाचार"
    },
    isBreaking: true,
    url: "/news/7"
  },
  {
    id: 7,
    title: {
      en: "Chhattisgarh Becomes India's Leading Steel Production Hub - 40MT Capacity",
      hi: "छत्तीसगढ़ भारत का अग्रणी इस्पात उत्पादन केंद्र - 40MT क्षमता"
    },
    date: "2024-09-04",
    category: {
      en: "Industry Achievement",
      hi: "उद्योग उपलब्धि"
    },
    isBreaking: true,
    url: "/news/8"
  },
  {
    id: 8,
    title: {
      en: "500+ Start-ups Registered - Entrepreneurship Ecosystem Flourishes",
      hi: "500+ स्टार्ट-अप पंजीकृत - उद्यमिता इकोसिस्टम का विकास"
    },
    date: "2024-09-03",
    category: {
      en: "Entrepreneurship",
      hi: "उद्यमिता"
    },
    url: "/news/9"
  },
  {
    id: 9,
    title: {
      en: "International Delegation Visits for Trade Partnerships - ₹15,000 Cr MoUs Expected",
      hi: "व्यापारिक साझेदारी के लिए अंतर्राष्ट्रीय प्रतिनिधिमंडल - ₹15,000 करोड़ MoU अपेक्षित"
    },
    date: "2024-09-02",
    category: {
      en: "International Trade",
      hi: "अंतर्राष्ट्रीय व्यापार"
    },
    url: "/news/10"
  },
  {
    id: 10,
    title: {
      en: "Green Energy Milestone - 2000 MW Solar Capacity Achieved",
      hi: "हरित ऊर्जा मील का पत्थर - 2000 मेगावाट सौर क्षमता हासिल"
    },
    date: "2024-09-01",
    category: {
      en: "Renewable Energy",
      hi: "नवीकरणीय ऊर्जा"
    },
    url: "/news/11"
  }
];

export default function NewsStrip({
  position = 'top',
  variant = 'scrolling',
  autoPlay = true,
  speed = 60,
  pauseOnHover = true,
  showControls = false,
  showClose = false,
  maxItems = 5,
  className = '',
  language = 'en'
}: NewsStripProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const newsItems = stripNewsData.slice(0, maxItems);

  // Auto-advance for sliding variant
  useEffect(() => {
    if (variant === 'sliding' && autoPlay && !isPaused && isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
      }, speed * 100);
      return () => clearInterval(interval);
    }
  }, [variant, autoPlay, isPaused, isVisible, newsItems.length, speed]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const baseClasses = `
    relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black
    text-white shadow-2xl
    ${position === 'top' ? 'sticky top-0 z-40' : ''}
    ${position === 'bottom' ? 'sticky bottom-0 z-40' : ''}
    ${position === 'inline' ? 'my-4 rounded-xl' : ''}
    ${className}
  `;

  const displayNews = newsItems;

  return (
    <div className={baseClasses}>
      <div className="relative px-6 py-3">
        <div className="flex items-center justify-between">
          {/* News Content Area */}
          <div className="flex-1">
            {variant === 'scrolling' && (
              <div
                className={`flex ${pauseOnHover ? 'hover:pause' : ''}`}
                onMouseEnter={() => pauseOnHover && setIsPaused(true)}
                onMouseLeave={() => pauseOnHover && setIsPaused(false)}
              >
                <motion.div
                  className="flex space-x-8 whitespace-nowrap"
                  animate={{ x: isPaused ? 0 : '-100%' }}
                  transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  {[...displayNews, ...displayNews].map((item, index) => (
                    <Link
                      key={`${item.id}-${index}`}
                      href={item.url || '/news'}
                      className="flex items-center space-x-4 hover:text-yellow-300 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                        <span className="font-medium text-base">{item.title[language]}</span>
                        <span className="text-blue-200 text-sm border-l border-blue-300 pl-3">
                          {item.category[language]}
                        </span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </div>
            )}

            {variant === 'sliding' && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <Link
                    href={displayNews[currentIndex]?.url || '/news'}
                    className="hover:text-yellow-300 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-center space-x-6">
                      <span className="font-medium text-xl">
                        {displayNews[currentIndex]?.title[language]}
                      </span>
                      <span className="text-blue-200 text-sm font-medium border-l border-blue-300 pl-4">
                        {displayNews[currentIndex]?.category[language]}
                      </span>
                      <div className="flex items-center text-blue-200 text-sm border-l border-blue-300 pl-4">
                        <CalendarDaysIcon className="h-4 w-4 mr-1" />
                        {new Date(displayNews[currentIndex]?.date).toLocaleDateString(language === 'en' ? 'en-IN' : 'hi-IN', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            )}

            {variant === 'static' && (
              <div className="space-y-2">
                {displayNews.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    href={item.url || '/news'}
                    className="block hover:text-yellow-300 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      <span className="font-medium text-sm truncate">
                        {item.title[language]}
                      </span>
                      <span className="text-blue-200 text-xs">
                        {item.category[language]}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {showControls && variant === 'sliding' && (
              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-lg p-1">
                <button
                  onClick={handlePrevious}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
                <span className="text-xs px-2">
                  {currentIndex + 1}/{displayNews.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            )}

            {showClose && (
              <button
                onClick={handleClose}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}

            <Link
              href="/news"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg text-sm font-semibold transition-colors duration-300"
            >
              {language === 'en' ? 'View All' : 'सभी देखें'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
