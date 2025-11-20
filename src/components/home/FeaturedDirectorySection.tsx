'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    MagnifyingGlassIcon,
    ArrowRightIcon,
    BuildingOfficeIcon,
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';
import { sampleBusinesses } from '@/data/sampleData';

export default function FeaturedDirectorySection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Manufacturing', 'Trading', 'Transportation', 'Services'];

    const filteredBusinesses = sampleBusinesses.filter(business => {
        const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            business.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
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
    );
}
