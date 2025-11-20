'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  TagIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  ClockIcon,
  StarIcon,
  XMarkIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface MarketplaceListing {
  id: number;
  title: string;
  company: string;
  category: string;
  type: 'requirement' | 'offering';
  description: string;
  budget?: string;
  deadline: string;
  location: string;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
  requirements?: string[];
  specifications?: string[];
  postedDate: string;
  status: 'active' | 'closed' | 'pending';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  verified: boolean;
}

// Sample marketplace data
const sampleListings: MarketplaceListing[] = [
  {
    id: 1,
    title: "Industrial Automation Equipment Required",
    company: "Bhilai Steel Plant",
    category: "Manufacturing",
    type: "requirement",
    description: "We are looking for advanced industrial automation equipment for our steel manufacturing process. Need PLC systems, SCADA software, and robotic arms.",
    budget: "₹50,00,000 - ₹1,00,00,000",
    deadline: "2024-12-31",
    location: "Bhilai, Chhattisgarh",
    contact: {
      name: "Rajesh Kumar",
      phone: "07788-245-123",
      email: "procurement@bhilaisteel.com"
    },
    requirements: ["PLC Systems", "SCADA Software", "Robotic Arms", "Installation Support"],
    postedDate: "2024-11-15",
    status: "active",
    priority: "high",
    verified: true
  },
  {
    id: 2,
    title: "Premium Rice Export Services",
    company: "Chhattisgarh Agro Exports",
    category: "Agriculture",
    type: "offering",
    description: "We offer premium quality rice export services with international certifications. Bulk quantities available for export to Middle East and European markets.",
    budget: "₹25 - ₹35 per kg",
    deadline: "2024-12-15",
    location: "Raipur, Chhattisgarh",
    contact: {
      name: "Sunita Verma",
      phone: "0771-245-8901",
      email: "export@cgagro.com"
    },
    specifications: ["Basmati Rice", "Export Quality", "International Certification", "Bulk Orders"],
    postedDate: "2024-11-10",
    status: "active",
    priority: "medium",
    verified: true
  },
  {
    id: 3,
    title: "Construction Materials Needed",
    company: "Raipur Infrastructure Ltd",
    category: "Construction",
    type: "requirement",
    description: "Large scale requirement for construction materials including cement, steel rods, bricks, and concrete mixers for upcoming housing project.",
    budget: "₹2,00,00,000 - ₹5,00,00,000",
    deadline: "2024-11-30",
    location: "Raipur, Chhattisgarh",
    contact: {
      name: "Amit Sharma",
      phone: "0771-234-5678",
      email: "materials@raipurinfra.com"
    },
    requirements: ["Cement (5000 bags)", "Steel Rods (200 tons)", "Bricks (100,000 units)", "Concrete Mixers"],
    postedDate: "2024-11-12",
    status: "active",
    priority: "urgent",
    verified: true
  },
  {
    id: 4,
    title: "IT Solutions & Software Development",
    company: "TechnoSoft Raipur",
    category: "Technology",
    type: "offering",
    description: "Complete IT solutions including custom software development, web applications, mobile apps, and digital transformation services for businesses.",
    budget: "₹50,000 - ₹10,00,000 per project",
    deadline: "2025-03-31",
    location: "Raipur, Chhattisgarh",
    contact: {
      name: "Priya Patel",
      phone: "0771-567-8901",
      email: "info@technosoftraipur.com"
    },
    specifications: ["Custom Software", "Web Development", "Mobile Apps", "Digital Transformation"],
    postedDate: "2024-11-08",
    status: "active",
    priority: "low",
    verified: true
  },
  {
    id: 5,
    title: "Coal Transportation Services Required",
    company: "Korba Power Equipment",
    category: "Transportation",
    type: "requirement",
    description: "Need reliable coal transportation services from mining sites to power plant. Regular contract for 1000 tons per month.",
    budget: "₹800 - ₹1200 per ton",
    deadline: "2024-12-10",
    location: "Korba, Chhattisgarh",
    contact: {
      name: "Vikram Singh",
      phone: "07759-245-123",
      email: "logistics@korbapower.com"
    },
    requirements: ["Heavy Duty Trucks", "Mining Permits", "Insurance Coverage", "Regular Schedule"],
    postedDate: "2024-11-14",
    status: "active",
    priority: "high",
    verified: false
  },
  {
    id: 6,
    title: "Financial Consulting Services",
    company: "Chhattisgarh Financial Services",
    category: "Services",
    type: "offering",
    description: "Professional financial consulting, business loans, investment advisory, and accounting services for small and medium enterprises.",
    budget: "₹5,000 - ₹50,000 per consultation",
    deadline: "2025-02-28",
    location: "Raipur, Chhattisgarh",
    contact: {
      name: "Deepak Agarwal",
      phone: "0771-289-3456",
      email: "services@cgfinancial.com"
    },
    specifications: ["Business Loans", "Investment Advisory", "Tax Planning", "Accounting Services"],
    postedDate: "2024-11-09",
    status: "active",
    priority: "medium",
    verified: true
  }
];

const categories = ["All", "Manufacturing", "Agriculture", "Construction", "Technology", "Transportation", "Services"];
const types = ["All", "Requirements", "Offerings"];
const priorities = ["All", "Low", "Medium", "High", "Urgent"];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [filteredListings, setFilteredListings] = useState(sampleListings);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const filtered = sampleListings.filter(listing => {
      const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || listing.category === selectedCategory;
      const matchesType = selectedType === 'All' ||
        (selectedType === 'Requirements' && listing.type === 'requirement') ||
        (selectedType === 'Offerings' && listing.type === 'offering');
      const matchesPriority = selectedPriority === 'All' || listing.priority === selectedPriority.toLowerCase();
      return matchesSearch && matchesCategory && matchesType && matchesPriority;
    });

    setFilteredListings(filtered);
  }, [searchTerm, selectedCategory, selectedType, selectedPriority]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-600 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-600 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-600 border-green-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'requirement'
      ? 'bg-blue-100 text-blue-600 border-blue-200'
      : 'bg-purple-100 text-purple-600 border-purple-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">


      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Business <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Marketplace</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with suppliers, buyers, and service providers across Chhattisgarh. Post your requirements or showcase your offerings.
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Post New Listing
            </button>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search listings..."
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filter */}
              <select
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              {/* Priority Filter */}
              <select
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
              >
                {priorities.map(priority => (
                  <option key={priority} value={priority}>{priority}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredListings.length}</span> listings
              {selectedCategory !== 'All' && (
                <span> in <span className="font-semibold text-blue-600">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Marketplace Listings */}
          <div className="space-y-6">
            {filteredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{listing.title}</h3>
                          {listing.verified && (
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <p className="text-gray-600 font-medium mb-2">{listing.company}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getTypeColor(listing.type)}`}>
                            {listing.type === 'requirement' ? 'Requirement' : 'Offering'}
                          </span>
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {listing.category}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getPriorityColor(listing.priority)}`}>
                            {listing.priority.charAt(0).toUpperCase() + listing.priority.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {listing.description}
                    </p>

                    {(listing.requirements || listing.specifications) && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {listing.type === 'requirement' ? 'Requirements:' : 'Specifications:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(listing.requirements || listing.specifications)?.map((item, idx) => (
                            <span key={idx} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      {listing.budget && (
                        <div className="flex items-center">
                          <CurrencyDollarIcon className="h-4 w-4 mr-2 text-green-500" />
                          <span>Budget: {listing.budget}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <CalendarDaysIcon className="h-4 w-4 mr-2 text-blue-500" />
                        <span>Deadline: {new Date(listing.deadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-2 text-red-500" />
                        <span>{listing.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-64">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Contact Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <BuildingOfficeIcon className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{listing.contact.name}</span>
                        </div>
                        <div className="flex items-center">
                          <PhoneIcon className="h-4 w-4 mr-2 text-green-500" />
                          <a href={`tel:${listing.contact.phone}`} className="text-blue-600 hover:underline">
                            {listing.contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <EnvelopeIcon className="h-4 w-4 mr-2 text-orange-500" />
                          <a href={`mailto:${listing.contact.email}`} className="text-blue-600 hover:underline truncate">
                            {listing.contact.email}
                          </a>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <ClockIcon className="h-3 w-3 mr-1" />
                          Posted: {new Date(listing.postedDate).toLocaleDateString()}
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredListings.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <TagIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No listings found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Add Listing Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Post New Listing</h3>
              <p className="text-gray-600">Share your business requirements or offerings with the community.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Listing Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="requirement">Requirement</option>
                    <option value="offering">Offering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    {categories.slice(1).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter listing title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Provide detailed description"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., ₹1,00,000 - ₹5,00,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter location"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Contact person name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Post Listing
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}


    </div>
  );
}
