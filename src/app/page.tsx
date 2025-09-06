'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NewsStrip from '@/components/NewsStrip';
import { 
  MagnifyingGlassIcon, 
  BuildingOfficeIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  NewspaperIcon,
  SparklesIcon,
  ArrowRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

interface BusinessEntry {
  id: number;
  name: string;
  category: string;
  phone: string;
  email: string;
  address: string;
  description?: string;
  image?: string;
  established?: string;
  website?: string;
}

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  image?: string;
  category: string;
}

const sampleBusinesses: BusinessEntry[] = [
  {
    id: 1,
    name: "ABC Manufacturing Pvt Ltd",
    category: "Manufacturing",
    phone: "98261-35000",
    email: "info@abcmfg.com",
    address: "Siltara Industrial Area, Raipur",
    description: "Leading manufacturer of industrial equipment and machinery",
    established: "1995",
    website: "www.abcmfg.com"
  },
  {
    id: 2,
    name: "XYZ Traders & Exporters",
    category: "Trading",
    phone: "98263-95544",
    email: "contact@xyztraders.com",
    address: "Civil Lines, Raipur",
    description: "Premier trading company specializing in export-import",
    established: "2001",
    website: "www.xyztraders.com"
  },
  {
    id: 3,
    name: "Chhattisgarh Logistics Solutions",
    category: "Transportation",
    phone: "98264-12345",
    email: "info@cglogistics.com",
    address: "Tatibandh, Raipur",
    description: "Complete logistics and transportation solutions",
    established: "2010",
    website: "www.cglogistics.com"
  },
  {
    id: 4,
    name: "Steel Tech Industries",
    category: "Manufacturing",
    phone: "98265-67890",
    email: "info@steeltech.com",
    address: "Urla Industrial Area, Raipur",
    description: "Advanced steel processing and fabrication",
    established: "1988",
    website: "www.steeltech.com"
  }
];

const sampleNews: NewsItem[] = [
  {
    id: 1,
    title: "Chhattisgarh Industrial Growth Reaches New Heights",
    content: "The state's industrial sector has shown remarkable growth with new investments...",
    date: "2024-08-25",
    category: "Industry News",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "New Members Join Udyog Mahasangh This Month",
    content: "15 new businesses have joined our association, expanding our network...",
    date: "2024-08-24",
    category: "Association News"
  },
  {
    id: 3,
    title: "Digital Transformation Workshop Scheduled",
    content: "Join us for an exclusive workshop on digital transformation for businesses...",
    date: "2024-08-23",
    category: "Events"
  }
];

const heroImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop"
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const categories = ['All', 'Manufacturing', 'Trading', 'Transportation', 'Services'];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredBusinesses = sampleBusinesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Header */}
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
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 font-semibold border-b-2 border-blue-600">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">About</Link>
              <Link href="/directory" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Directory</Link>
              <Link href="/marketplace" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Marketplace</Link>
              <Link href="/job-listing" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Jobs</Link>
              <Link href="/news" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">News</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Contact</Link>
              <Link href="/admin" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* News Strip */}
      <NewsStrip 
        position="inline"
        variant="scrolling"
        autoPlay={true}
        speed={35}
        pauseOnHover={true}
        showControls={false}
        showClose={true}
        maxItems={6}
        language="en"
      />

      {/* Enhanced Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
          />
        </AnimatePresence>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <SparklesIcon className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="text-yellow-600 font-semibold text-lg">Premier Business Platform</span>
              <SparklesIcon className="h-8 w-8 text-yellow-500 ml-2" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Business </span>
              in Chhattisgarh
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect, grow, and thrive with the most comprehensive digital ecosystem 
              for industries, suppliers, and entrepreneurs across Chhattisgarh
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/directory"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center"
              >
                Explore Directory
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Powering Chhattisgarh&apos;s <span className="text-blue-600">Economic Growth</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses that trust us as their premier networking platform
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { icon: UserGroupIcon, number: "472,909", label: "Total Visitors", color: "from-blue-500 to-blue-600" },
              { icon: BuildingOfficeIcon, number: "500+", label: "Member Companies", color: "from-green-500 to-green-600" },
              { icon: ChartBarIcon, number: "15+", label: "Industry Sectors", color: "from-purple-500 to-purple-600" },
              { icon: GlobeAltIcon, number: "24/7", label: "Online Access", color: "from-orange-500 to-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl w-fit mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2 text-center">{stat.number}</p>
                <p className="text-gray-600 font-medium text-center">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <NewspaperIcon className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold text-lg">Latest Updates</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">News & Announcements</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest news, events, and developments in Chhattisgarh&apos;s business landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {sampleNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {news.image && (
                  <div className="relative h-48 bg-gradient-to-r from-blue-400 to-indigo-500 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {news.category}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <CalendarDaysIcon className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-500 text-sm">
                      {new Date(news.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {news.content}
                  </p>
                  
                  <Link 
                    href={`/news/${news.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/news"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View All News
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Business Directory Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <BuildingOfficeIcon className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold text-lg">Business Network</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Directory</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover and connect with leading businesses across various industries in Chhattisgarh
            </p>
          </motion.div>

          {/* Enhanced Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search businesses, categories, or locations..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-medium min-w-[200px]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <Link
                href="/directory"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center whitespace-nowrap"
              >
                View All
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Enhanced Business Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBusinesses.slice(0, 4).map((business, index) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mr-3">
                        <BuildingOfficeIcon className="h-6 w-6 text-white" />
                      </div>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {business.category}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {business.name}
                    </h4>
                    {business.description && (
                      <p className="text-gray-600 mb-4 leading-relaxed">{business.description}</p>
                    )}
                  </div>
                  {business.established && (
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Est.</p>
                      <p className="font-semibold text-blue-600">{business.established}</p>
                    </div>
                  )}
                </div>
                
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-3 text-blue-500" />
                    <a href={`tel:${business.phone}`} className="hover:text-blue-600 transition-colors font-medium">
                      {business.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 mr-3 text-blue-500" />
                    <a href={`mailto:${business.email}`} className="hover:text-blue-600 transition-colors">
                      {business.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-3 text-blue-500" />
                    <span>{business.address}</span>
                  </div>
                  {business.website && (
                    <div className="flex items-center">
                      <GlobeAltIcon className="h-5 w-5 mr-3 text-blue-500" />
                      <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        {business.website}
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="group/btn w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    View Details
                    <ArrowRightIcon className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/directory"
              className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore Complete Directory
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-3 text-blue-400" />
                  <span>Plot No: 80 D & E, Phase-II Siltara Industrial Area-493111, Raipur, Chhattisgarh</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-3 text-blue-400" />
                  <span>98261-35000, 98263-95544</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-3 text-blue-400" />
                  <span>cumraipur@gmail.com, info@cgudyogmahasangh.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">President&apos;s Message</h3>
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">
                  &quot;It is a matter of great prestige that Chhattisgarh Udyog Mahasangh creates its 
                  Digital Telephone Directory-2024 Edition-VI. We are committed to providing a 
                  comprehensive platform for all industries in Chhattisgarh.&quot;
                </p>
                <p className="font-semibold">- Mahesh Kakkar, President</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Chhattisgarh Udyog Mahasangh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
