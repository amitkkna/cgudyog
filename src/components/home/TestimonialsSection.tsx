'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        company: "Bhilai Steel Plant",
        role: "General Manager",
        content: "CG Udyog Mahasangh has been instrumental in connecting us with reliable suppliers and partners. The platform has significantly streamlined our procurement process and expanded our business network.",
        rating: 5,
        image: "👤"
    },
    {
        id: 2,
        name: "Priya Sharma",
        company: "Raipur Textiles Industries",
        role: "CEO",
        content: "Being part of this platform has opened up incredible opportunities for collaboration. We've found quality business partners and expanded our reach across Chhattisgarh and beyond.",
        rating: 5,
        image: "👩‍💼"
    },
    {
        id: 3,
        name: "Amit Verma",
        company: "TechnoSoft Solutions",
        role: "Founder",
        content: "The directory has been a game-changer for our startup. We've connected with potential clients, found talented employees, and established ourselves in the local business ecosystem.",
        rating: 5,
        image: "👨‍💻"
    },
    {
        id: 4,
        name: "Sunita Patel",
        company: "Green Valley Agro Processing",
        role: "Managing Director",
        content: "Excellent platform for agricultural businesses! The connections we've made through CG Udyog have helped us expand our distribution network and reach new markets efficiently.",
        rating: 5,
        image: "👩‍🌾"
    }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Floating elements */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"
                animate={{
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
                animate={{
                    y: [0, -30, 0],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />

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
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-300 font-semibold text-sm border border-white/20">
                            Testimonials
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Members Say</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Hear from businesses that have grown with our platform
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[400px] md:h-[350px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                                    {/* Quote Icon */}
                                    <div className="text-6xl text-blue-400/30 mb-4">"</div>

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed italic">
                                        {testimonials[currentIndex].content}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl">
                                            {testimonials[currentIndex].image}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-blue-300">{testimonials[currentIndex].role}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <BuildingOfficeIcon className="h-4 w-4 text-gray-400" />
                                                <p className="text-sm text-gray-400">{testimonials[currentIndex].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => paginate(-1)}
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
                        >
                            <ChevronLeftIcon className="h-6 w-6" />
                        </motion.button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-blue-400'
                                            : 'w-2 bg-white/30 hover:bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => paginate(1)}
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
                        >
                            <ChevronRightIcon className="h-6 w-6" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
