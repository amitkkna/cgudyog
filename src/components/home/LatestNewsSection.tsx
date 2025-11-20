'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    NewspaperIcon,
    CalendarDaysIcon,
    ArrowRightIcon,
    ClockIcon,
    FireIcon
} from '@heroicons/react/24/outline';
import { sampleNews } from '@/data/sampleData';

const categoryColors: { [key: string]: { bg: string; text: string; border: string; gradient: string } } = {
    'Industry News': {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-300',
        gradient: 'from-blue-500 to-indigo-600'
    },
    'Association News': {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-300',
        gradient: 'from-purple-500 to-pink-600'
    },
    'Events': {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-300',
        gradient: 'from-green-500 to-emerald-600'
    },
    'Policy Update': {
        bg: 'bg-orange-100',
        text: 'text-orange-700',
        border: 'border-orange-300',
        gradient: 'from-orange-500 to-red-600'
    },
    'Awards': {
        bg: 'bg-yellow-100',
        text: 'text-yellow-700',
        border: 'border-yellow-300',
        gradient: 'from-yellow-500 to-orange-600'
    },
    'Sustainability': {
        bg: 'bg-emerald-100',
        text: 'text-emerald-700',
        border: 'border-emerald-300',
        gradient: 'from-emerald-500 to-teal-600'
    },
};

export default function LatestNewsSection() {
    const featuredNews = sampleNews[0];
    const otherNews = sampleNews.slice(1, 5); // Reduced to 4 items to match height perfectly

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-4 border border-orange-200"
                    >
                        <FireIcon className="h-5 w-5 text-orange-600" />
                        <span className="text-orange-700 font-semibold text-sm">Latest Updates</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        News & <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Announcements</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay informed with the latest news, events, and developments in Chhattisgarh&apos;s business landscape
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Featured News - Large Card */}
                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full min-h-[500px]"
                    >
                        {/* Image or Gradient Background - Full Height */}
                        <div className="relative h-full min-h-[500px]">
                            {featuredNews.image ? (
                                <>
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                        style={{ backgroundImage: `url(${featuredNews.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                                </>) : (
                                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[featuredNews.category]?.gradient || 'from-blue-500 to-indigo-600'}`}>
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <NewspaperIcon className="h-32 w-32 text-white/20" />
                                    </div>
                                </div>
                            )}

                            {/* Category Badge */}
                            <div className="absolute top-6 left-6 z-10">
                                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border ${categoryColors[featuredNews.category]?.bg || 'bg-gray-100'
                                    } ${categoryColors[featuredNews.category]?.text || 'text-gray-700'} ${categoryColors[featuredNews.category]?.border || 'border-gray-300'
                                    }`}>
                                    {featuredNews.category}
                                </span>
                            </div>

                            {/* Featured Badge */}
                            <div className="absolute top-6 right-6 z-10">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-bold shadow-lg">
                                    <FireIcon className="h-4 w-4" />
                                    Featured
                                </span>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                <div className="flex items-center gap-4 mb-4 text-white/80 text-sm">
                                    <div className="flex items-center gap-1.5">
                                        <CalendarDaysIcon className="h-4 w-4" />
                                        <span>{new Date(featuredNews.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <ClockIcon className="h-4 w-4" />
                                        <span>5 min read</span>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                                    {featuredNews.title}
                                </h3>

                                <p className="text-gray-200 mb-4 line-clamp-2 leading-relaxed">
                                    {featuredNews.content}
                                </p>

                                <Link
                                    href={`/news/${featuredNews.id}`}
                                    className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all group/link"
                                >
                                    <span>Read Full Story</span>
                                    <ArrowRightIcon className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.article>

                    {/* Other News - Compact List (Horizontal Layout) */}
                    <div className="flex flex-col gap-4 h-full justify-between">
                        {otherNews.map((news, index) => {
                            const categoryStyle = categoryColors[news.category] || {
                                bg: 'bg-gray-100',
                                text: 'text-gray-700',
                                border: 'border-gray-300',
                                gradient: 'from-gray-500 to-gray-600'
                            };

                            return (
                                <motion.article
                                    key={news.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex h-[115px]"
                                >
                                    {/* Thumbnail - Left Side */}
                                    <div className="relative w-32 h-full flex-shrink-0 overflow-hidden">
                                        {news.image ? (
                                            <>
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                                    style={{ backgroundImage: `url(${news.image})` }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                                            </>
                                        ) : (
                                            <div className={`absolute inset-0 bg-gradient-to-br ${categoryStyle.gradient} flex items-center justify-center`}>
                                                <NewspaperIcon className="h-10 w-10 text-white/40" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content - Right Side */}
                                    <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${categoryStyle.bg} ${categoryStyle.text}`}>
                                                {news.category}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {new Date(news.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                                            </span>
                                        </div>

                                        <h4 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                                            {news.title}
                                        </h4>

                                        <Link
                                            href={`/news/${news.id}`}
                                            className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold hover:gap-2 transition-all mt-auto"
                                        >
                                            <span>Read more</span>
                                            <ArrowRightIcon className="h-3 w-3" />
                                        </Link>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/news"
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        <NewspaperIcon className="h-6 w-6" />
                        <span>View All News & Updates</span>
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
