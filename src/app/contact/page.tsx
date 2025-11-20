'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  const contactDetails = [
    {
      icon: MapPinIcon,
      title: 'Visit Our Office',
      details: ['Plot No: 80 D & E, Phase-II', 'Siltara Industrial Area-493111', 'Raipur, Chhattisgarh'],
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 771 2345678'],
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: ['info@cgudyogmaha.com', 'support@cgudyogmaha.com'],
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    },
    {
      icon: ClockIcon,
      title: 'Working Hours',
      details: ['Mon - Sat: 10:00 AM - 7:00 PM', 'Sunday: Closed'],
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      {/* Header Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90" />

        {/* Animated Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              Contact Support
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Conversation</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
              Have questions about membership, events, or business opportunities?
              We&apos;re here to help you grow your business in Chhattisgarh.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-24">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 bg-slate-50 p-8 md:p-12 border-r border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-8">
                {contactDetails.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-12 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <GlobeAltIcon className="h-5 w-5" /> {/* Placeholder icon */}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-8 md:p-12 bg-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-500">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50 focus:bg-white"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50 focus:bg-white"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  >
                    <option value="">Select a topic</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="event">Event Registration</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                    placeholder="How can we help you?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.542006858313!2d81.6045!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c51c4507!2sSiltara%20Industrial%20Area%2C%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_10px_20px_rgba(0,0,0,0.1)]" />
      </section>
    </div>
  );
}

function GlobeAltIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S12 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}
