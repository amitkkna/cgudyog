'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import {
    UserGroupIcon,
    BuildingOfficeIcon,
    ChartBarIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
}

function AnimatedCounter({ end, duration = 2, suffix = '' }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            let animationFrame: number;

            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            animationFrame = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, end, duration]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function StatsSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    const stats = [
        {
            icon: UserGroupIcon,
            number: 472909,
            label: "Total Visitors",
            color: "from-blue-500 via-blue-600 to-indigo-600",
            bgColor: "from-blue-500/10 to-indigo-500/10",
            iconBg: "from-blue-500 to-blue-600"
        },
        {
            icon: BuildingOfficeIcon,
            number: 500,
            suffix: "+",
            label: "Member Companies",
            color: "from-emerald-500 via-green-600 to-teal-600",
            bgColor: "from-emerald-500/10 to-teal-500/10",
            iconBg: "from-emerald-500 to-green-600"
        },
        {
            icon: ChartBarIcon,
            number: 15,
            suffix: "+",
            label: "Industry Sectors",
            color: "from-purple-500 via-violet-600 to-purple-600",
            bgColor: "from-purple-500/10 to-violet-500/10",
            iconBg: "from-purple-500 to-violet-600"
        },
        {
            icon: GlobeAltIcon,
            number: 24,
            suffix: "/7",
            label: "Online Access",
            color: "from-orange-500 via-amber-600 to-yellow-600",
            bgColor: "from-orange-500/10 to-yellow-500/10",
            iconBg: "from-orange-500 to-amber-600"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full filter blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full text-blue-600 font-semibold text-sm border border-blue-200/50 backdrop-blur-sm">
                            Our Impact
                        </span>
                    </motion.div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Powering Chhattisgarh&apos;s <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Economic Growth
                        </span>
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join thousands of businesses that trust us as their premier networking platform
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Glow effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

                            {/* Card */}
                            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />

                                <div className="relative z-10 flex flex-col items-center">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="inline-block mb-4"
                                    >
                                        <div className={`p-4 bg-gradient-to-br ${stat.iconBg} rounded-2xl shadow-lg mx-auto w-fit`}>
                                            <stat.icon className="h-8 w-8 text-white" />
                                        </div>
                                    </motion.div>

                                    {/* Number */}
                                    <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        <AnimatedCounter end={stat.number} suffix={stat.suffix || ''} />
                                    </div>

                                    {/* Label */}
                                    <p className="text-gray-700 font-semibold text-lg text-center">
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Decorative corner */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-5 rounded-bl-full`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
