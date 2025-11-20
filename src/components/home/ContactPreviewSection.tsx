'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactPreviewSection() {
    return (
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
    );
}
