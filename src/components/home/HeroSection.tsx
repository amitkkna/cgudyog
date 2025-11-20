'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const heroImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop"
];

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            style={{ opacity, scale }}
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/30"
                animate={{
                    background: [
                        'linear-gradient(to bottom right, rgba(29, 78, 216, 0.3), rgba(88, 28, 135, 0.2), rgba(67, 56, 202, 0.3))',
                        'linear-gradient(to bottom right, rgba(67, 56, 202, 0.3), rgba(29, 78, 216, 0.2), rgba(88, 28, 135, 0.3))',
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            />

            {/* Background image carousel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
                />
            </AnimatePresence>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl animate-pulse delay-1000" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="flex items-center justify-center mb-8"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-amber-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/30">
                            <SparklesIcon className="h-6 w-6 text-yellow-500 mr-2 animate-pulse" />
                            <span className="text-yellow-600 font-semibold text-lg bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                                Premier Business Platform
                            </span>
                            <SparklesIcon className="h-6 w-6 text-yellow-500 ml-2 animate-pulse" />
                        </div>
                    </motion.div>

                    {/* Main heading with stagger animation */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Transforming
                        </motion.span>
                        <br className="hidden md:block" />
                        <motion.span
                            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            {' '}Business{' '}
                        </motion.span>
                        <br className="md:hidden" />
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            in Chhattisgarh
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        Connect, grow, and thrive with the most comprehensive digital ecosystem
                        for industries, suppliers, and entrepreneurs across Chhattisgarh
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <Link
                            href="/directory"
                            className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 flex items-center shadow-lg hover:shadow-2xl hover:shadow-blue-500/50"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative">Explore Directory</span>
                            <ArrowRightIcon className="h-5 w-5 ml-2 relative group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/about"
                            className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/50 shadow-lg hover:shadow-xl"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
