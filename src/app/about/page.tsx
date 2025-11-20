'use client';

import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  TrophyIcon,
  ClockIcon,
  GlobeAltIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const stats = [
  { label: 'Active Members', value: '5,000+', icon: UserGroupIcon },
  { label: 'Years of Excellence', value: '25+', icon: ClockIcon },
  { label: 'Industries Served', value: '50+', icon: BuildingOfficeIcon },
  { label: 'Growth Rate', value: '15%', icon: ArrowTrendingUpIcon },
];

const timeline = [
  { year: '1998', title: 'Establishment', description: 'Founded with a vision to unite Chhattisgarh industries.' },
  { year: '2005', title: 'State Recognition', description: 'Recognized as the primary industrial body by the state govt.' },
  { year: '2015', title: 'Digital Initiative', description: 'Launched first digital directory to modernize networking.' },
  { year: '2024', title: 'Global Outreach', description: 'Expanding partnerships to international markets.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      {/* Hero Section with Pattern */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        {/* Animated Blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-medium mb-6">
              <SparklesIcon className="h-4 w-4" />
              Empowering Industries Since 1998
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Driving Industrial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Excellence & Growth
              </span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
              The premier business platform in Chhattisgarh, serving as the cornerstone
              for industrial growth, policy advocacy, and business networking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex p-4 rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <TrophyIcon className="h-12 w-12 text-blue-600 mb-6 relative z-10" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  To create a comprehensive digital platform that connects industries, suppliers,
                  government departments, and transporters across Chhattisgarh, fostering business
                  growth and economic development in the region.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <GlobeAltIcon className="h-12 w-12 text-purple-600 mb-6 relative z-10" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  To be the leading business association in Chhattisgarh, providing innovative
                  solutions and creating a robust ecosystem that empowers businesses to thrive
                  in the digital age.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern Office Building"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                  <h4 className="text-2xl font-bold mb-2">Building the Future</h4>
                  <p className="text-white/80">Creating infrastructure for sustainable industrial growth.</p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden lg:block"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-green-100 rounded-full text-green-600">
                    <CheckCircleIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Trusted by</div>
                    <div className="font-bold text-gray-900">Govt. of Chhattisgarh</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600">A legacy of commitment and continuous evolution</p>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`md:flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                      <span className="text-5xl font-bold text-blue-100 mb-2">{item.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 max-w-sm">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 opacity-10">
              <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.925 14.929 15.087C15.537 14.249 16.393 13.567 17.497 13.041C18.601 12.515 19.817 12.252 21.145 12.252L21.145 9C19.713 9 18.397 9.364 17.197 10.092C15.997 10.82 15.089 11.832 14.473 13.128C13.857 14.424 13.549 15.96 13.549 17.736L13.549 21L14.017 21ZM5.009 21L5.009 18C5.009 16.896 5.313 15.925 5.921 15.087C6.529 14.249 7.385 13.567 8.489 13.041C9.593 12.515 10.809 12.252 12.137 12.252L12.137 9C10.705 9 9.389 9.364 8.189 10.092C6.989 10.82 6.081 11.832 5.465 13.128C4.849 14.424 4.541 15.96 4.541 17.736L4.541 21L5.009 21Z" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-48 flex-shrink-0 bg-white/10 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                  <UserGroupIcon className="h-20 w-20 text-white/80" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-6 text-blue-200">President&apos;s Message</h3>
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 italic">
                  &quot;It is a matter of great prestige that Chhattisgarh Udyog Mahasangh creates its
                  Digital Telephone Directory-2024 Edition-VI. We are committed to providing comprehensive solutions and fostering
                  economic growth across all sectors.&quot;
                </blockquote>
                <div>
                  <div className="text-2xl font-bold font-serif">Mahesh Kakkar</div>
                  <div className="text-blue-300">President, Chhattisgarh Udyog Mahasangh</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
