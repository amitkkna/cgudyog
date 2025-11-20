'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    BuildingOfficeIcon,
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Contact', href: '/contact' },
            { name: 'News', href: '/news' },
            { name: 'Events', href: '/events' },
        ],
        services: [
            { name: 'Business Directory', href: '/directory' },
            { name: 'Marketplace', href: '/marketplace' },
            { name: 'Job Listings', href: '/job-listing' },
            { name: 'Admin Panel', href: '/admin' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Cookie Policy', href: '/cookies' },
        ],
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
                                <BuildingOfficeIcon className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    CG Udyog
                                </h3>
                                <p className="text-xs text-gray-400">Mahasangh</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Empowering businesses across Chhattisgarh with digital solutions and networking opportunities.
                        </p>
                        <div className="flex space-x-3">
                            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                                <a
                                    key={social}
                                    href={`#${social}`}
                                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label={social}
                                >
                                    <span className="text-sm capitalize">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Company links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-sm">
                                <MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400">
                                    Plot No: 80 D & E, Phase-II<br />
                                    Siltara Industrial Area<br />
                                    Raipur, CG - 493111
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm">
                                <PhoneIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                                <a href="tel:9826135000" className="text-gray-400 hover:text-blue-400 transition-colors">
                                    98261-35000
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 text-sm">
                                <EnvelopeIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                                <a href="mailto:info@cgudyogmahasangh.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                    info@cgudyogmahasangh.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} Chhattisgarh Udyog Mahasangh. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
