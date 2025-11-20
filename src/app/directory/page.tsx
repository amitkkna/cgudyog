'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NewsStrip from '@/components/NewsStrip';
import {
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  ListBulletIcon,
  TableCellsIcon,
  StarIcon,
  CalendarDaysIcon,
  UsersIcon,
  TruckIcon,
  InformationCircleIcon,
  CogIcon,
  BeakerIcon,
  HomeIcon,
  BanknotesIcon,
  XMarkIcon,
  TagIcon
} from '@heroicons/react/24/outline';

interface BusinessEntry {
  id: number;
  name: string;
  category: string;
  phone: string;
  email: string;
  address: string;
  description: string;
  website?: string;
  established: string;
  employees: string;
  logo?: string;
  featured: boolean;
  rating: number;
  services: string[];
  certifications: string[];
}

// Comprehensive sample data
const sampleBusinesses: BusinessEntry[] = [
  {
    id: 1,
    name: "Bhilai Steel Plant",
    category: "Manufacturing",
    phone: "0788-228-4000",
    email: "info@bsp.co.in",
    address: "Bhilai, Durg, Chhattisgarh - 490001",
    description: "One of India's largest integrated steel plants, producing high-quality steel products for various industries including automotive, construction, and infrastructure.",
    website: "www.sail.co.in",
    established: "1955",
    employees: "50,000+",
    featured: true,
    rating: 4.8,
    services: ["Steel Production", "Rail Manufacturing", "Wire Products", "Heavy Engineering"],
    certifications: ["ISO 9001", "ISO 14001", "OHSAS 18001"]
  },
  {
    id: 2,
    name: "Raipur Textiles Industries",
    category: "Manufacturing",
    phone: "0771-255-6789",
    email: "contact@raipurtextiles.com",
    address: "Industrial Area, Raipur, Chhattisgarh - 492001",
    description: "Leading textile manufacturer specializing in cotton fabrics, garments, and home textiles with modern machinery and sustainable practices.",
    website: "www.raipurtextiles.com",
    established: "1985",
    employees: "2,500",
    featured: true,
    rating: 4.5,
    services: ["Cotton Fabrics", "Garment Manufacturing", "Home Textiles", "Export Services"],
    certifications: ["GOTS", "OEKO-TEX", "ISO 9001"]
  },
  {
    id: 3,
    name: "Chhattisgarh Agro Exports",
    category: "Trading",
    phone: "0771-245-8901",
    email: "export@cgagro.com",
    address: "Pandri, Raipur, Chhattisgarh - 492004",
    description: "Premier agricultural export company specializing in rice, pulses, and organic products with international quality standards and certifications.",
    website: "www.cgagroexports.com",
    established: "1995",
    employees: "500",
    featured: false,
    rating: 4.3,
    services: ["Rice Export", "Pulse Trading", "Organic Products", "Quality Assurance"],
    certifications: ["FSSAI", "Organic Certification", "Export License"]
  },
  {
    id: 4,
    name: "Durg Transport Corporation",
    category: "Transportation",
    phone: "0788-234-5678",
    email: "logistics@durgtransport.com",
    address: "Transport Nagar, Durg, Chhattisgarh - 491001",
    description: "Comprehensive logistics and transportation solutions covering all major cities with a modern fleet and tracking systems.",
    website: "www.durgtransport.com",
    established: "1980",
    employees: "1,200",
    featured: false,
    rating: 4.2,
    services: ["Freight Transport", "Logistics Solutions", "Warehousing", "Fleet Management"],
    certifications: ["ISO 9001", "Transport License", "Safety Certification"]
  },
  {
    id: 5,
    name: "TechnoSoft Solutions Raipur",
    category: "Technology",
    phone: "0771-298-7654",
    email: "info@technosoftraipur.com",
    address: "IT Park, Atal Nagar, Raipur, Chhattisgarh - 492101",
    description: "Leading IT services company providing software development, digital transformation, and technology consulting to businesses across India.",
    website: "www.technosoftraipur.com",
    established: "2005",
    employees: "800",
    featured: true,
    rating: 4.6,
    services: ["Software Development", "Web Design", "Mobile Apps", "Cloud Solutions"],
    certifications: ["CMMI Level 3", "ISO 27001", "Microsoft Partner"]
  },
  {
    id: 6,
    name: "Korba Power Equipment",
    category: "Manufacturing",
    phone: "07759-245-123",
    email: "sales@korbapower.com",
    address: "NTPC Township, Korba, Chhattisgarh - 495677",
    description: "Specialized manufacturer of power plant equipment, boilers, and electrical components serving the energy sector across India.",
    website: "www.korbapower.com",
    established: "1978",
    employees: "3,000",
    featured: false,
    rating: 4.4,
    services: ["Power Equipment", "Boiler Manufacturing", "Maintenance Services", "Engineering Consulting"],
    certifications: ["IBR Certification", "ISO 9001", "CE Marking"]
  },
  {
    id: 7,
    name: "Chhattisgarh Minerals Trading",
    category: "Trading",
    phone: "0771-267-8901",
    email: "trade@cgminerals.com",
    address: "Shankar Nagar, Raipur, Chhattisgarh - 492007",
    description: "Leading minerals trading company dealing in iron ore, coal, limestone, and other mineral resources with nationwide distribution network.",
    website: "www.cgminerals.com",
    established: "1990",
    employees: "600",
    featured: false,
    rating: 4.1,
    services: ["Iron Ore Trading", "Coal Supply", "Limestone Distribution", "Mining Consultation"],
    certifications: ["Mining License", "Environmental Clearance", "Quality Certification"]
  },
  {
    id: 8,
    name: "Bilaspur Engineering Works",
    category: "Manufacturing",
    phone: "07752-234-567",
    email: "info@bilaspureng.com",
    address: "Industrial Estate, Bilaspur, Chhattisgarh - 495001",
    description: "Precision engineering company manufacturing machine components, tools, and equipment for various industrial applications.",
    website: "www.bilaspurengineering.com",
    established: "1982",
    employees: "450",
    featured: false,
    rating: 4.3,
    services: ["Precision Machining", "Tool Manufacturing", "Component Design", "Quality Testing"],
    certifications: ["ISO 9001", "TS 16949", "Precision Certification"]
  },
  {
    id: 9,
    name: "Green Valley Agro Processing",
    category: "Agriculture",
    phone: "0771-278-9012",
    email: "processing@greenvalley.com",
    address: "Abhanpur, Raipur, Chhattisgarh - 493661",
    description: "Modern food processing facility specializing in rice milling, pulse processing, and packaged food products with organic certification.",
    website: "www.greenvalleyagro.com",
    established: "2000",
    employees: "300",
    featured: false,
    rating: 4.2,
    services: ["Rice Milling", "Pulse Processing", "Packaged Foods", "Quality Control"],
    certifications: ["FSSAI", "Organic Certification", "HACCP"]
  },
  {
    id: 10,
    name: "Chhattisgarh Financial Services",
    category: "Services",
    phone: "0771-289-3456",
    email: "services@cgfinancial.com",
    address: "Civil Lines, Raipur, Chhattisgarh - 492001",
    description: "Comprehensive financial services including banking, insurance, investments, and business loans for individuals and corporations.",
    website: "www.cgfinancial.com",
    established: "1998",
    employees: "200",
    featured: false,
    rating: 4.4,
    services: ["Business Loans", "Insurance Services", "Investment Advisory", "Financial Planning"],
    certifications: ["RBI License", "IRDA Certification", "ISO 9001"]
  },
  {
    id: 11,
    name: "Jagdalpur Timber Industries",
    category: "Manufacturing",
    phone: "07782-234-890",
    email: "timber@jagdalpurindustries.com",
    address: "Industrial Area, Jagdalpur, Chhattisgarh - 494001",
    description: "Sustainable timber processing and furniture manufacturing with eco-friendly practices and certified wood sourcing.",
    website: "www.jagdalpurtimber.com",
    established: "1975",
    employees: "800",
    featured: false,
    rating: 4.0,
    services: ["Timber Processing", "Furniture Manufacturing", "Wood Products", "Custom Designs"],
    certifications: ["FSC Certification", "ISO 14001", "Wood Quality Standards"]
  },
  {
    id: 12,
    name: "Raigarh Aluminium Works",
    category: "Manufacturing",
    phone: "07762-245-678",
    email: "aluminium@raigarhworks.com",
    address: "JSPL Township, Raigarh, Chhattisgarh - 496001",
    description: "Modern aluminium smelting and fabrication facility producing high-grade aluminium products for automotive and construction industries.",
    website: "www.raigarhalu.com",
    established: "2008",
    employees: "1,500",
    featured: true,
    rating: 4.5,
    services: ["Aluminium Smelting", "Fabrication", "Custom Products", "Quality Testing"],
    certifications: ["ISO 9001", "Aluminium Quality Standards", "Environmental Compliance"]
  },
  {
    id: 13,
    name: "Chhattisgarh Healthcare Solutions",
    category: "Services",
    phone: "0771-256-7890",
    email: "care@cghealthcare.com",
    address: "Shankar Nagar, Raipur, Chhattisgarh - 492007",
    description: "Comprehensive healthcare services including hospitals, diagnostic centers, and medical equipment supply across the state.",
    website: "www.cghealthcare.com",
    established: "2010",
    employees: "2,000",
    featured: false,
    rating: 4.7,
    services: ["Hospital Management", "Diagnostic Services", "Medical Equipment", "Healthcare Consulting"],
    certifications: ["NABH Accreditation", "ISO 15189", "Medical License"]
  },
  {
    id: 14,
    name: "Ambikapur Wood Products",
    category: "Manufacturing",
    phone: "07774-234-567",
    email: "wood@ambikwoodproducts.com",
    address: "Forest Colony, Ambikapur, Chhattisgarh - 497001",
    description: "Specialized wood products manufacturer creating custom furniture, plywood, and decorative items using sustainable forestry practices.",
    website: "www.ambikawoodproducts.com",
    established: "1988",
    employees: "400",
    featured: false,
    rating: 4.1,
    services: ["Custom Furniture", "Plywood Manufacturing", "Decorative Items", "Interior Design"],
    certifications: ["Forest Certification", "Quality Standards", "Environmental Compliance"]
  },
  {
    id: 15,
    name: "Mahasamund Rice Mills",
    category: "Agriculture",
    phone: "07722-234-890",
    email: "rice@mahasamundmills.com",
    address: "Grain Market, Mahasamund, Chhattisgarh - 493445",
    description: "Traditional rice milling facility with modern technology producing premium quality rice varieties for domestic and export markets.",
    website: "www.mahasamundrice.com",
    established: "1965",
    employees: "250",
    featured: false,
    rating: 4.2,
    services: ["Rice Milling", "Quality Processing", "Packaging", "Distribution"],
    certifications: ["FSSAI", "Quality Certification", "Export License"]
  }
];

const categories = ["All", "Manufacturing", "Trading", "Transportation", "Technology", "Agriculture", "Services"];

// Advertisement configurations
const advertisementData = [
  {
    id: 1,
    title: "Chhattisgarh Business Hub",
    description: "Join the premier business network of Chhattisgarh. Connect with 5000+ verified businesses.",
    cta: "Join Now",
    image: "🏢",
    gradient: "from-blue-500 to-cyan-500",
    link: "/premium"
  },
  {
    id: 2,
    title: "Digital Marketing Solutions",
    description: "Boost your online presence with our expert digital marketing services.",
    cta: "Get Started",
    image: "📱",
    gradient: "from-purple-500 to-pink-500",
    link: "/services/digital-marketing"
  },
  {
    id: 3,
    title: "Business Loans & Finance",
    description: "Quick business loans with competitive rates. Approved in 24 hours.",
    cta: "Apply Now",
    image: "💰",
    gradient: "from-green-500 to-emerald-500",
    link: "/finance"
  },
  {
    id: 4,
    title: "Trade Show Opportunities",
    description: "Showcase your products at Chhattisgarh's biggest trade exhibitions.",
    cta: "Register",
    image: "🎪",
    gradient: "from-orange-500 to-red-500",
    link: "/events"
  }
];

const categoryIcons = {
  "Manufacturing": CogIcon,
  "Trading": BanknotesIcon,
  "Transportation": TruckIcon,
  "Technology": BeakerIcon,
  "Agriculture": HomeIcon,
  "Services": UsersIcon
};

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('table'); // 'table', 'grid', or 'list'
  const [filteredBusinesses, setFilteredBusinesses] = useState(sampleBusinesses);
  const [showAd, setShowAd] = useState(false);
  const [showPopupAd, setShowPopupAd] = useState(false);
  const [showFloatingAd, setShowFloatingAd] = useState(false);

  useEffect(() => {
    const filtered = sampleBusinesses.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort businesses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'established':
          return parseInt(b.established) - parseInt(a.established);
        case 'employees':
          const aEmp = parseInt(a.employees.replace(/[^0-9]/g, '')) || 0;
          const bEmp = parseInt(b.employees.replace(/[^0-9]/g, '')) || 0;
          return bEmp - aEmp;
        default:
          return 0;
      }
    });

    // Featured businesses first
    filtered.sort((a, b) => b.featured ? 1 : -1);

    setFilteredBusinesses(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  // Show ads periodically
  useEffect(() => {
    const adInterval = setInterval(() => {
      setShowAd(true);
      setTimeout(() => setShowAd(false), 8000); // Show ad for 8 seconds
    }, 30000); // Show ad every 30 seconds

    return () => clearInterval(adInterval);
  }, []);

  // Show popup ads periodically
  useEffect(() => {
    const popupInterval = setInterval(() => {
      setShowPopupAd(true);
    }, 60000); // Show popup every 60 seconds

    return () => clearInterval(popupInterval);
  }, []);

  // Show floating ads
  useEffect(() => {
    const floatingAdTimer = setTimeout(() => {
      setShowFloatingAd(true);
    }, 15000); // Show floating ad after 15 seconds

    return () => clearTimeout(floatingAdTimer);
  }, []);

  // Generate inline ad components for grid/list views
  const generateInlineAd = (index: number) => {
    const ad = advertisementData[index % advertisementData.length];

    return (
      <motion.div
        key={`ad-${ad.id}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`bg-gradient-to-r ${ad.gradient} rounded-2xl p-6 text-white shadow-lg relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300`}
        onClick={() => window.open(ad.link, '_blank')}
      >
        <div className="absolute -top-8 -right-8 text-6xl opacity-20">
          {ad.image}
        </div>
        <div className="relative z-10">
          <div className="text-4xl mb-3">{ad.image}</div>
          <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
          <p className="text-sm mb-4 opacity-90">{ad.description}</p>
          <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30">
            {ad.cta}
          </button>
        </div>
      </motion.div>
    );
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
              Business <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Directory</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover and connect with {sampleBusinesses.length}+ leading businesses across Chhattisgarh
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search businesses, categories, locations..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <select
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[200px]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[150px]"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="established">Sort by Year</option>
                <option value="employees">Sort by Size</option>
              </select>

              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'table'
                    ? 'bg-white shadow-sm text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                  title="Table View"
                >
                  <TableCellsIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid'
                    ? 'bg-white shadow-sm text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                  title="Grid View"
                >
                  <Squares2X2Icon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list'
                    ? 'bg-white shadow-sm text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                  title="List View"
                >
                  <ListBulletIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Industry News Strip */}
          <div className="mb-8">
            <NewsStrip
              position="inline"
              variant="sliding"
              autoPlay={true}
              speed={50}
              pauseOnHover={true}
              showControls={true}
              showClose={false}
              maxItems={3}
              language="en"
              className="rounded-2xl"
            />
          </div>

          {/* Banner Advertisement */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute -top-6 -right-6 text-8xl opacity-20">🏢</div>
              <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Featured Business Opportunities</h3>
                  <p className="text-green-100">Reach thousands of potential customers across Chhattisgarh. Join our premium directory today!</p>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
                    Get Featured
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredBusinesses.length}</span> businesses
              {selectedCategory !== 'All' && (
                <span> in <span className="font-semibold text-blue-600">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Business Listings */}
          <AnimatePresence mode="wait">
            {viewMode === 'table' ? (
              <motion.div
                key="table"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-slate-50 to-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200">
                          <div className="flex items-center space-x-2">
                            <BuildingOfficeIcon className="h-4 w-4 text-blue-600" />
                            <span>Business</span>
                          </div>
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200">
                          <div className="flex items-center space-x-1">
                            <TagIcon className="h-3 w-3 text-blue-600" />
                            <span>Category</span>
                          </div>
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200">
                          <div className="flex items-center space-x-1">
                            <PhoneIcon className="h-3 w-3 text-blue-600" />
                            <span>Contact</span>
                          </div>
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200">
                          <div className="flex items-center space-x-1">
                            <MapPinIcon className="h-3 w-3 text-blue-600" />
                            <span>Location</span>
                          </div>
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200">
                          <div className="flex items-center space-x-1">
                            <InformationCircleIcon className="h-3 w-3 text-blue-600" />
                            <span>Details</span>
                          </div>
                        </th>
                        <th className="px-4 py-4 text-center text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredBusinesses.map((business, index) => {
                        const CategoryIcon = categoryIcons[business.category as keyof typeof categoryIcons] || BuildingOfficeIcon;
                        return (
                          <motion.tr
                            key={business.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 ${business.featured ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400' : ''
                              } hover:shadow-lg`}
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                <div className="relative">
                                  <div className={`p-2 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 ${business.featured
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                                    }`}>
                                    <CategoryIcon className="h-5 w-5 text-white" />
                                  </div>
                                  {business.featured && (
                                    <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full p-0.5">
                                      <StarIcon className="h-2 w-2 text-white fill-current" />
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                                      {business.name}
                                    </h3>
                                    {business.featured && (
                                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-sm">
                                        <StarIcon className="h-2 w-2 mr-1 fill-current" />
                                        Premium
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed max-w-sm">
                                    {business.description}
                                  </p>
                                  <div className="flex items-center mt-2 space-x-2">
                                    {business.services.slice(0, 2).map((service, i) => (
                                      <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-700">
                                        {service}
                                      </span>
                                    ))}
                                    {business.services.length > 2 && (
                                      <span className="text-xs text-gray-500">+{business.services.length - 2}</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="inline-flex items-center">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                  {business.category}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="space-y-2">
                                <div className="flex items-center group/contact">
                                  <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-lg mr-2 group-hover/contact:bg-blue-200 transition-colors">
                                    <PhoneIcon className="h-3 w-3 text-blue-600" />
                                  </div>
                                  <a href={`tel:${business.phone}`} className="text-xs font-medium text-gray-900 hover:text-blue-600 transition-colors">
                                    {business.phone}
                                  </a>
                                </div>
                                <div className="flex items-center group/contact">
                                  <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg mr-2 group-hover/contact:bg-green-200 transition-colors">
                                    <EnvelopeIcon className="h-3 w-3 text-green-600" />
                                  </div>
                                  <a href={`mailto:${business.email}`} className="text-xs font-medium text-gray-900 hover:text-green-600 transition-colors truncate max-w-[120px]">
                                    {business.email}
                                  </a>
                                </div>
                                {business.website && (
                                  <div className="flex items-center group/contact">
                                    <div className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-lg mr-2 group-hover/contact:bg-purple-200 transition-colors">
                                      <GlobeAltIcon className="h-3 w-3 text-purple-600" />
                                    </div>
                                    <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-900 hover:text-purple-600 transition-colors truncate max-w-[120px]">
                                      {business.website}
                                    </a>
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-start space-x-2">
                                <div className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-lg mt-0.5">
                                  <MapPinIcon className="h-3 w-3 text-red-600" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-xs font-medium text-gray-900 leading-relaxed max-w-[150px]">
                                    {business.address}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <div className="flex items-center justify-center w-6 h-6 bg-amber-100 rounded-lg">
                                    <StarIcon className="h-3 w-3 text-amber-600" />
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <span className="text-xs font-bold text-gray-900">{business.rating}</span>
                                    <span className="text-xs text-gray-500">/ 5</span>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                                    <CalendarDaysIcon className="h-3 w-3 text-green-600" />
                                  </div>
                                  <span className="text-xs font-medium text-gray-900">{business.established}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-lg">
                                    <UsersIcon className="h-3 w-3 text-purple-600" />
                                  </div>
                                  <span className="text-xs font-medium text-gray-900">{business.employees} employees</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex justify-center">
                                <button className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-xs">
                                  <BuildingOfficeIcon className="h-3 w-3 mr-1" />
                                  View
                                </button>
                              </div>
                            </td>
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ) : viewMode === 'grid' ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredBusinesses.map((business, index) => {
                  const CategoryIcon = categoryIcons[business.category as keyof typeof categoryIcons] || BuildingOfficeIcon;

                  return (
                    <motion.div
                      key={business.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 ${business.featured ? 'border-l-yellow-400' : 'border-l-blue-500'
                        }`}
                    >
                      {business.featured && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 text-sm font-semibold flex items-center">
                          <StarIcon className="h-4 w-4 mr-2" />
                          Featured Business
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mr-3">
                              <CategoryIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                                {business.category}
                              </span>
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <StarIcon
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.floor(business.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                      }`}
                                  />
                                ))}
                                <span className="text-sm text-gray-600 ml-2">{business.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Est.</p>
                            <p className="font-semibold text-blue-600">{business.established}</p>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {business.name}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                          {business.description.substring(0, 120)}...
                        </p>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <PhoneIcon className="h-4 w-4 mr-2 text-blue-500" />
                            <a href={`tel:${business.phone}`} className="hover:text-blue-600 transition-colors">
                              {business.phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <EnvelopeIcon className="h-4 w-4 mr-2 text-blue-500" />
                            <a href={`mailto:${business.email}`} className="hover:text-blue-600 transition-colors">
                              {business.email}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-2 text-blue-500" />
                            <span className="truncate">{business.address}</span>
                          </div>
                          {business.website && (
                            <div className="flex items-center">
                              <GlobeAltIcon className="h-4 w-4 mr-2 text-blue-500" />
                              <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors truncate">
                                {business.website}
                              </a>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <UsersIcon className="h-4 w-4 mr-1" />
                            {business.employees} employees
                          </div>
                          <div className="flex items-center">
                            <CalendarDaysIcon className="h-4 w-4 mr-1" />
                            {new Date().getFullYear() - parseInt(business.established)} years
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                            View Full Profile
                            <BuildingOfficeIcon className="h-5 w-5 ml-2" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Interstitial Ads in Grid */}
                {filteredBusinesses.length > 6 && (
                  <div className="col-span-full">
                    {generateInlineAd(0)}
                  </div>
                )}
              </motion.div>
            ) : viewMode === 'list' ? (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {filteredBusinesses.map((business, index) => {
                  const CategoryIcon = categoryIcons[business.category as keyof typeof categoryIcons] || BuildingOfficeIcon;
                  return (
                    <motion.div
                      key={business.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${business.featured ? 'border-l-yellow-400' : 'border-l-blue-500'
                        }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                              <CategoryIcon className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {business.name}
                                </h3>
                                {business.featured && (
                                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                                    <StarIcon className="h-4 w-4 mr-1" />
                                    Featured
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                                  {business.category}
                                </span>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                      key={i}
                                      className={`h-4 w-4 ${i < Math.floor(business.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                        }`}
                                    />
                                  ))}
                                  <span className="text-sm text-gray-600 ml-2">{business.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {business.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <PhoneIcon className="h-4 w-4 mr-2 text-blue-500" />
                                <a href={`tel:${business.phone}`} className="hover:text-blue-600 transition-colors">
                                  {business.phone}
                                </a>
                              </div>
                              <div className="flex items-center">
                                <EnvelopeIcon className="h-4 w-4 mr-2 text-blue-500" />
                                <a href={`mailto:${business.email}`} className="hover:text-blue-600 transition-colors">
                                  {business.email}
                                </a>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <MapPinIcon className="h-4 w-4 mr-2 text-blue-500" />
                                <span>{business.address}</span>
                              </div>
                              {business.website && (
                                <div className="flex items-center">
                                  <GlobeAltIcon className="h-4 w-4 mr-2 text-blue-500" />
                                  <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    {business.website}
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="lg:w-48 text-right">
                          <div className="space-y-2 text-sm text-gray-600 mb-4">
                            <div>
                              <span className="text-gray-500">Established:</span>
                              <span className="font-semibold text-gray-900 ml-2">{business.established}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Employees:</span>
                              <span className="font-semibold text-gray-900 ml-2">{business.employees}</span>
                            </div>
                          </div>
                          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Inline Advertisement */}
          {showAd && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="my-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 text-8xl opacity-20">📈</div>
              <button
                onClick={() => setShowAd(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-20"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Premium Business Analytics</h3>
                  <p className="text-purple-100 mb-4">Get detailed insights about your business performance. Track views, leads, and customer engagement.</p>
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg">
                    View Analytics
                  </button>
                </div>
                <div className="hidden md:block ml-6">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="text-5xl">📊</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {filteredBusinesses.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <BuildingOfficeIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No businesses found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Popup Advertisement */}
      {showPopupAd && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-6xl opacity-10">🎯</div>
            <button
              onClick={() => setShowPopupAd(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">⭐</div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Limited Time Offer!
              </h3>

              <p className="text-gray-600 mb-6">
                Get 50% off on premium business listing for the first 3 months.
                Boost your visibility and connect with more customers across Chhattisgarh.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => setShowPopupAd(false)}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Claim 50% Off Now
                </button>
                <button
                  onClick={() => setShowPopupAd(false)}
                  className="w-full text-gray-500 py-2 rounded-lg font-medium hover:text-gray-700 transition-colors"
                >
                  Maybe Later
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                Offer valid until December 31, 2024
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Floating Advertisement */}
      {showFloatingAd && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          className="fixed bottom-6 right-6 max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 z-40"
        >
          <button
            onClick={() => setShowFloatingAd(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>

          <div className="pr-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                <div className="text-lg">💼</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Business Growth</h4>
                <p className="text-xs text-gray-500">Sponsored</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              Scale your business with our proven marketing strategies.
            </p>

            <button
              onClick={() => setShowFloatingAd(false)}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      )}


    </div>
  );
}
