'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BuildingOfficeIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  CalendarDaysIcon,
  StarIcon,
  XMarkIcon,
  CheckCircleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface JobListing {
  id: number;
  title: string;
  company: string;
  category: string;
  jobType: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
  location: string;
  experience: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
  contact: {
    name: string;
    phone: string;
    email: string;
    website?: string;
  };
  postedDate: string;
  deadline: string;
  status: 'active' | 'closed' | 'filled';
  isUrgent: boolean;
  isRemote: boolean;
  companySize: string;
  industry: string;
}

// Sample job listings
const sampleJobs: JobListing[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechnoSoft Raipur",
    category: "Technology",
    jobType: "full-time",
    location: "Raipur, Chhattisgarh",
    experience: "3-5 years",
    salary: "₹8,00,000 - ₹12,00,000 per annum",
    description: "We are looking for a skilled Software Engineer to join our dynamic team. You will be responsible for developing high-quality software solutions and working on cutting-edge technologies.",
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Write clean, maintainable code",
      "Participate in code reviews and testing",
      "Troubleshoot and debug applications"
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Proficiency in React, Node.js, and databases",
      "Strong problem-solving skills",
      "Excellent communication skills"
    ],
    skills: ["React", "Node.js", "JavaScript", "MongoDB", "Git", "REST APIs"],
    benefits: ["Health Insurance", "Flexible Working Hours", "Performance Bonus", "Training & Development"],
    contact: {
      name: "Priya Patel",
      phone: "0771-567-8901",
      email: "careers@technosoftraipur.com",
      website: "www.technosoftraipur.com"
    },
    postedDate: "2024-11-15",
    deadline: "2024-12-15",
    status: "active",
    isUrgent: false,
    isRemote: true,
    companySize: "50-100 employees",
    industry: "Information Technology"
  },
  {
    id: 2,
    title: "Production Manager",
    company: "Bhilai Steel Plant",
    category: "Manufacturing",
    jobType: "full-time",
    location: "Bhilai, Chhattisgarh",
    experience: "5-8 years",
    salary: "₹15,00,000 - ₹20,00,000 per annum",
    description: "Seeking an experienced Production Manager to oversee manufacturing operations, ensure quality standards, and optimize production efficiency.",
    responsibilities: [
      "Oversee daily production operations",
      "Ensure quality and safety standards",
      "Manage production team and schedules",
      "Implement process improvements",
      "Monitor production metrics and KPIs"
    ],
    requirements: [
      "Bachelor's degree in Mechanical/Industrial Engineering",
      "5+ years of experience in steel/manufacturing industry",
      "Knowledge of lean manufacturing principles",
      "Strong leadership and team management skills",
      "Experience with production planning software"
    ],
    skills: ["Production Planning", "Quality Control", "Team Leadership", "SAP", "Lean Manufacturing"],
    benefits: ["Health Insurance", "Provident Fund", "Housing Allowance", "Annual Bonus", "Medical Benefits"],
    contact: {
      name: "Rajesh Kumar",
      phone: "07788-245-123",
      email: "hr@bhilaisteel.com",
      website: "www.bhilaisteel.com"
    },
    postedDate: "2024-11-12",
    deadline: "2024-11-30",
    status: "active",
    isUrgent: true,
    isRemote: false,
    companySize: "1000+ employees",
    industry: "Steel Manufacturing"
  },
  {
    id: 3,
    title: "Agricultural Specialist",
    company: "Chhattisgarh Agro Exports",
    category: "Agriculture",
    jobType: "full-time",
    location: "Raipur, Chhattisgarh",
    experience: "2-4 years",
    salary: "₹5,00,000 - ₹8,00,000 per annum",
    description: "Join our team as an Agricultural Specialist to work with farmers, improve crop yields, and ensure quality standards for export products.",
    responsibilities: [
      "Provide technical support to farmers",
      "Monitor crop quality and yields",
      "Implement sustainable farming practices",
      "Coordinate with export team",
      "Conduct field visits and inspections"
    ],
    requirements: [
      "Bachelor's degree in Agriculture or related field",
      "2+ years of experience in agricultural sector",
      "Knowledge of crop cultivation and pest management",
      "Strong communication skills in Hindi and English",
      "Willingness to travel for field work"
    ],
    skills: ["Crop Management", "Pest Control", "Quality Assessment", "Field Operations", "Farmer Relations"],
    benefits: ["Health Insurance", "Travel Allowance", "Performance Incentives", "Training Programs"],
    contact: {
      name: "Sunita Verma",
      phone: "0771-245-8901",
      email: "careers@cgagro.com",
      website: "www.cgagroexports.com"
    },
    postedDate: "2024-11-10",
    deadline: "2024-12-10",
    status: "active",
    isUrgent: false,
    isRemote: false,
    companySize: "100-500 employees",
    industry: "Agriculture & Food Processing"
  },
  {
    id: 4,
    title: "Financial Analyst",
    company: "Chhattisgarh Financial Services",
    category: "Finance",
    jobType: "full-time",
    location: "Raipur, Chhattisgarh",
    experience: "1-3 years",
    salary: "₹4,00,000 - ₹7,00,000 per annum",
    description: "We are seeking a detail-oriented Financial Analyst to join our team and help clients with financial planning, investment analysis, and risk assessment.",
    responsibilities: [
      "Conduct financial analysis and modeling",
      "Prepare investment reports and recommendations",
      "Assist clients with financial planning",
      "Monitor market trends and economic indicators",
      "Support business development activities"
    ],
    requirements: [
      "Bachelor's degree in Finance, Economics, or related field",
      "1-3 years of experience in financial analysis",
      "Proficiency in Excel and financial software",
      "Strong analytical and communication skills",
      "Knowledge of financial markets and instruments"
    ],
    skills: ["Financial Modeling", "Excel", "Risk Analysis", "Investment Planning", "Market Research"],
    benefits: ["Health Insurance", "Professional Development", "Performance Bonus", "Flexible Hours"],
    contact: {
      name: "Deepak Agarwal",
      phone: "0771-289-3456",
      email: "hr@cgfinancial.com",
      website: "www.cgfinancial.com"
    },
    postedDate: "2024-11-14",
    deadline: "2024-12-14",
    status: "active",
    isUrgent: false,
    isRemote: true,
    companySize: "50-100 employees",
    industry: "Financial Services"
  },
  {
    id: 5,
    title: "Marketing Manager",
    company: "Raipur Infrastructure Ltd",
    category: "Marketing",
    jobType: "full-time",
    location: "Raipur, Chhattisgarh",
    experience: "4-6 years",
    salary: "₹10,00,000 - ₹15,00,000 per annum",
    description: "Lead our marketing efforts to promote infrastructure projects and build brand awareness. Develop and execute comprehensive marketing strategies.",
    responsibilities: [
      "Develop and implement marketing strategies",
      "Manage digital marketing campaigns",
      "Build relationships with media and stakeholders",
      "Oversee content creation and branding",
      "Analyze marketing performance metrics"
    ],
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "4+ years of experience in marketing",
      "Experience in B2B marketing and infrastructure sector",
      "Strong digital marketing skills",
      "Creative thinking and leadership abilities"
    ],
    skills: ["Digital Marketing", "Content Strategy", "Brand Management", "SEO/SEM", "Social Media"],
    benefits: ["Health Insurance", "Car Allowance", "Performance Bonus", "Team Outings"],
    contact: {
      name: "Amit Sharma",
      phone: "0771-234-5678",
      email: "careers@raipurinfra.com",
      website: "www.raipurinfra.com"
    },
    postedDate: "2024-11-13",
    deadline: "2024-12-13",
    status: "active",
    isUrgent: false,
    isRemote: false,
    companySize: "200-500 employees",
    industry: "Infrastructure & Construction"
  },
  {
    id: 6,
    title: "Logistics Coordinator",
    company: "Korba Power Equipment",
    category: "Transportation",
    jobType: "full-time",
    location: "Korba, Chhattisgarh",
    experience: "2-4 years",
    salary: "₹6,00,000 - ₹9,00,000 per annum",
    description: "Coordinate logistics operations for power equipment transportation and ensure timely delivery to project sites across India.",
    responsibilities: [
      "Plan and coordinate transportation routes",
      "Manage vendor relationships",
      "Track shipments and deliveries",
      "Ensure compliance with safety regulations",
      "Optimize logistics costs and efficiency"
    ],
    requirements: [
      "Bachelor's degree in Logistics or related field",
      "2+ years of experience in logistics/transportation",
      "Knowledge of transportation regulations",
      "Strong organizational and problem-solving skills",
      "Proficiency in logistics software"
    ],
    skills: ["Logistics Planning", "Vendor Management", "Transportation", "Supply Chain", "Cost Optimization"],
    benefits: ["Health Insurance", "Transport Allowance", "Overtime Pay", "Annual Bonus"],
    contact: {
      name: "Vikram Singh",
      phone: "07759-245-123",
      email: "jobs@korbapower.com",
      website: "www.korbapower.com"
    },
    postedDate: "2024-11-11",
    deadline: "2024-12-11",
    status: "active",
    isUrgent: true,
    isRemote: false,
    companySize: "500-1000 employees",
    industry: "Power & Energy"
  }
];

const categories = ["All", "Technology", "Manufacturing", "Agriculture", "Finance", "Marketing", "Transportation", "Engineering", "Sales"];
const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Internship", "Freelance"];
const experienceLevels = ["All", "0-1 years", "1-3 years", "3-5 years", "5+ years"];

export default function JobListing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedJobType, setSelectedJobType] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState(sampleJobs);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const filtered = sampleJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
      const matchesJobType = selectedJobType === 'All' || job.jobType === selectedJobType.toLowerCase().replace('-', '-');
      const matchesExperience = selectedExperience === 'All' || job.experience.includes(selectedExperience.split(' ')[0]);
      return matchesSearch && matchesCategory && matchesJobType && matchesExperience;
    });

    setFilteredJobs(filtered);
  }, [searchTerm, selectedCategory, selectedJobType, selectedExperience]);

  const getJobTypeColor = (jobType: string) => {
    switch (jobType) {
      case 'full-time': return 'bg-green-100 text-green-600 border-green-200';
      case 'part-time': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'contract': return 'bg-purple-100 text-purple-600 border-purple-200';
      case 'internship': return 'bg-orange-100 text-orange-600 border-orange-200';
      case 'freelance': return 'bg-pink-100 text-pink-600 border-pink-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />
              <Link href="/" className="text-2xl font-bold text-gray-900">
                CG<span className="text-blue-600">Udyog</span>
              </Link>
            </motion.div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/directory" className="text-gray-700 hover:text-blue-600 transition-colors">Directory</Link>
              <Link href="/marketplace" className="text-gray-700 hover:text-blue-600 transition-colors">Marketplace</Link>
              <Link href="/job-listing" className="text-blue-600 font-semibold">Jobs</Link>
              <Link href="/news" className="text-gray-700 hover:text-blue-600 transition-colors">News</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

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
              Job <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover career opportunities across Chhattisgarh. Post jobs or find your next career move with top companies.
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Post Job Opening
            </button>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs, skills..."
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

              {/* Job Type Filter */}
              <select
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              {/* Experience Filter */}
              <select
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
              >
                {experienceLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredJobs.length}</span> job opportunities
              {selectedCategory !== 'All' && (
                <span> in <span className="font-semibold text-blue-600">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                  job.isUrgent ? 'border-l-red-500' : 'border-l-blue-500'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                          {job.isUrgent && (
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                              URGENT
                            </span>
                          )}
                          {job.isRemote && (
                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                              REMOTE
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 font-medium mb-2">{job.company}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getJobTypeColor(job.jobType)}`}>
                            {job.jobType.charAt(0).toUpperCase() + job.jobType.slice(1).replace('-', ' ')}
                          </span>
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {job.category}
                          </span>
                          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {job.experience}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span key={idx} className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-2 text-red-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="h-4 w-4 mr-2 text-green-500" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarDaysIcon className="h-4 w-4 mr-2 text-blue-500" />
                        <span>Apply by: {new Date(job.deadline).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-64">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Company Info</h4>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center">
                          <BuildingOfficeIcon className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center">
                          <UserGroupIcon className="h-4 w-4 mr-2 text-purple-500" />
                          <span>{job.companySize}</span>
                        </div>
                        <div className="flex items-center">
                          <BriefcaseIcon className="h-4 w-4 mr-2 text-green-500" />
                          <span>{job.industry}</span>
                        </div>
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center">
                          <PhoneIcon className="h-4 w-4 mr-2 text-green-500" />
                          <a href={`tel:${job.contact.phone}`} className="text-blue-600 hover:underline">
                            {job.contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <EnvelopeIcon className="h-4 w-4 mr-2 text-orange-500" />
                          <a href={`mailto:${job.contact.email}`} className="text-blue-600 hover:underline truncate">
                            {job.contact.email}
                          </a>
                        </div>
                        {job.contact.website && (
                          <div className="flex items-center">
                            <GlobeAltIcon className="h-4 w-4 mr-2 text-blue-500" />
                            <a href={`https://${job.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate">
                              {job.contact.website}
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                          <ClockIcon className="h-3 w-3 mr-1" />
                          Posted: {new Date(job.postedDate).toLocaleDateString()}
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mb-2">
                          Apply Now
                        </button>
                        <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                          Save Job
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <BriefcaseIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Add Job Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Post Job Opening</h3>
              <p className="text-gray-600">Share job opportunities with qualified candidates across Chhattisgarh.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Senior Software Engineer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    {categories.slice(1).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    {jobTypes.slice(1).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Required</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 3-5 years"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Raipur, Chhattisgarh"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., ₹5,00,000 - ₹8,00,000 per annum"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Provide detailed job description..."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Required Skills (comma separated)</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., React, Node.js, JavaScript, MongoDB"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Benefits (comma separated)</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Health Insurance, Flexible Hours, Performance Bonus"
                  ></textarea>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Application Deadline</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Website (optional)</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="www.company.com"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">This is an urgent hiring</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">Remote work available</span>
                </label>
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
                  Post Job
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Chhattisgarh Udyog Mahasangh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
