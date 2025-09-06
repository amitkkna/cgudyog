'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  TrophyIcon,
  ClockIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <BuildingOfficeIcon className="h-10 w-10 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Chhattisgarh</h1>
                <p className="text-lg text-blue-600">Udyog Mahasangh</p>
              </div>
            </motion.div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
              <Link href="/directory" className="text-gray-600 hover:text-blue-600 transition-colors">Directory</Link>
              <Link href="/marketplace" className="text-gray-600 hover:text-blue-600 transition-colors">Marketplace</Link>
              <Link href="/job-listing" className="text-gray-600 hover:text-blue-600 transition-colors">Jobs</Link>
              <Link href="/news" className="text-gray-600 hover:text-blue-600 transition-colors">News</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/admin" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Chhattisgarh Udyog Mahasangh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The premier business platform in Chhattisgarh, serving as the cornerstone 
              for industrial growth and business networking since our establishment.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <TrophyIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a comprehensive digital platform that connects industries, suppliers, 
                government departments, and transporters across Chhattisgarh, fostering business 
                growth and economic development in the region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <GlobeAltIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading business association in Chhattisgarh, providing innovative 
                solutions and creating a robust ecosystem that empowers businesses to thrive 
                in the digital age.
              </p>
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What We Offer
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <UserGroupIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Business Networking</h4>
                <p className="text-gray-600">
                  Connect with industry leaders, suppliers, and potential business partners 
                  across various sectors in Chhattisgarh.
                </p>
              </div>
              
              <div className="text-center">
                <ChartBarIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Digital Directory</h4>
                <p className="text-gray-600">
                  Comprehensive digital telephone directory providing easy access to 
                  business information and contact details.
                </p>
              </div>
              
              <div className="text-center">
                <ClockIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">24/7 Access</h4>
                <p className="text-gray-600">
                  Round-the-clock online access to business information and networking 
                  opportunities for enhanced convenience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* President's Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-lg p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Message from the President
            </h3>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <UserGroupIcon className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              
              <div className="flex-1">
                <blockquote className="text-lg text-gray-600 italic mb-4">
                  &quot;It is a matter of great prestige that Chhattisgarh Udyog Mahasangh creates its 
                  Digital Telephone Directory-2024 Edition-VI. As the premier business platform in 
                  Chhattisgarh, we are committed to providing comprehensive solutions and fostering 
                  economic growth across all sectors. I am thankful to all members, colleagues, and 
                  business associates for their valuable support in making this directory a reality.&quot;
                </blockquote>
                
                <div className="text-right">
                  <p className="font-semibold text-gray-900">Mahesh Kakkar</p>
                  <p className="text-gray-600">President, Chhattisgarh Udyog Mahasangh</p>
                </div>
              </div>
            </div>
          </motion.div>
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
