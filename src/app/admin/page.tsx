'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  PlusIcon,
  NewspaperIcon,
  UserGroupIcon,
  ChartBarIcon,
  TagIcon,
  UserIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

interface NewsFormData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  featured: boolean;
}

interface BusinessFormData {
  name: string;
  category: string;
  phone: string;
  email: string;
  address: string;
  description: string;
  website: string;
  established: string;
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [newsForm, setNewsForm] = useState<NewsFormData>({
    title: '',
    excerpt: '',
    content: '',
    category: 'Industry News',
    author: '',
    featured: false
  });

  const [businessForm, setBusinessForm] = useState<BusinessFormData>({
    name: '',
    category: 'Manufacturing',
    phone: '',
    email: '',
    address: '',
    description: '',
    website: '',
    established: ''
  });

  const newsCategories = ['Industry News', 'Association News', 'Events', 'Government Policy', 'Sustainability', 'Trade & Export'];
  const businessCategories = ['Manufacturing', 'Trading', 'Transportation', 'Services', 'Technology', 'Agriculture'];

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save to a database
    console.log('News submitted:', {
      ...newsForm,
      date: new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil(newsForm.content.split(' ').length / 200)} min read`
    });
    alert('News article published successfully!');
    setNewsForm({
      title: '',
      excerpt: '',
      content: '',
      category: 'Industry News',
      author: '',
      featured: false
    });
  };

  const handleBusinessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save to a database
    console.log('Business submitted:', businessForm);
    alert('Business added to directory successfully!');
    setBusinessForm({
      name: '',
      category: 'Manufacturing',
      phone: '',
      email: '',
      address: '',
      description: '',
      website: '',
      established: ''
    });
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: ChartBarIcon },
    { id: 'news', name: 'Manage News', icon: NewspaperIcon },
    { id: 'directory', name: 'Manage Directory', icon: BuildingOfficeIcon },
    { id: 'members', name: 'Members', icon: UserGroupIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      {/* Header */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                >
                  <tab.icon className="h-5 w-5 mr-3" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                      { label: 'Total Businesses', value: '500+', icon: BuildingOfficeIcon, color: 'from-blue-500 to-blue-600' },
                      { label: 'News Articles', value: '25', icon: NewspaperIcon, color: 'from-green-500 to-green-600' },
                      { label: 'Active Members', value: '450', icon: UserGroupIcon, color: 'from-purple-500 to-purple-600' },
                      { label: 'Monthly Visitors', value: '50K+', icon: ChartBarIcon, color: 'from-orange-500 to-orange-600' }
                    ].map((stat, index) => (
                      <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 text-center">
                        <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl w-fit mx-auto mb-4`}>
                          <stat.icon className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mb-1 text-center">{stat.value}</p>
                        <p className="text-gray-600 text-center">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                      <div className="space-y-3">
                        <button
                          onClick={() => setActiveTab('news')}
                          className="w-full flex items-center justify-between bg-white p-4 rounded-lg hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-center">
                            <PlusIcon className="h-5 w-5 text-blue-600 mr-3" />
                            <span className="font-medium">Add News Article</span>
                          </div>
                          <NewspaperIcon className="h-5 w-5 text-gray-400" />
                        </button>
                        <button
                          onClick={() => setActiveTab('directory')}
                          className="w-full flex items-center justify-between bg-white p-4 rounded-lg hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-center">
                            <PlusIcon className="h-5 w-5 text-green-600 mr-3" />
                            <span className="font-medium">Add Business</span>
                          </div>
                          <BuildingOfficeIcon className="h-5 w-5 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                          <span>New business added</span>
                          <span className="text-gray-500">2 hours ago</span>
                        </div>
                        <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                          <span>News article published</span>
                          <span className="text-gray-500">1 day ago</span>
                        </div>
                        <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                          <span>Member registered</span>
                          <span className="text-gray-500">2 days ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'news' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Manage News</h2>
                  <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                      <EyeIcon className="h-5 w-5 mr-2" />
                      Preview
                    </button>
                  </div>
                </div>

                <form onSubmit={handleNewsSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Article Title *
                      </label>
                      <input
                        type="text"
                        id="title"
                        required
                        value={newsForm.title}
                        onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter article title"
                      />
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <div className="relative">
                        <TagIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <select
                          id="category"
                          value={newsForm.category}
                          onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {newsCategories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                      Author *
                    </label>
                    <div className="relative">
                      <UserIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="author"
                        required
                        value={newsForm.author}
                        onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Author name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                      Excerpt/Summary *
                    </label>
                    <textarea
                      id="excerpt"
                      required
                      rows={3}
                      value={newsForm.excerpt}
                      onChange={(e) => setNewsForm({ ...newsForm, excerpt: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief summary of the article (2-3 sentences)"
                    />
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                      Article Content *
                    </label>
                    <textarea
                      id="content"
                      required
                      rows={8}
                      value={newsForm.content}
                      onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Full article content"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={newsForm.featured}
                      onChange={(e) => setNewsForm({ ...newsForm, featured: e.target.checked })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                      Mark as featured article
                    </label>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Save as Draft
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Publish Article
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'directory' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Manage Business Directory</h2>
                </div>

                <form onSubmit={handleBusinessSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        required
                        value={businessForm.name}
                        onChange={(e) => setBusinessForm({ ...businessForm, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter business name"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessCategory" className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        id="businessCategory"
                        value={businessForm.category}
                        onChange={(e) => setBusinessForm({ ...businessForm, category: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {businessCategories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={businessForm.phone}
                        onChange={(e) => setBusinessForm({ ...businessForm, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={businessForm.email}
                        onChange={(e) => setBusinessForm({ ...businessForm, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      required
                      rows={2}
                      value={businessForm.address}
                      onChange={(e) => setBusinessForm({ ...businessForm, address: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Complete business address"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Description
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      value={businessForm.description}
                      onChange={(e) => setBusinessForm({ ...businessForm, description: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief description of the business"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        value={businessForm.website}
                        onChange={(e) => setBusinessForm({ ...businessForm, website: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="www.example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="established" className="block text-sm font-medium text-gray-700 mb-2">
                        Established Year
                      </label>
                      <input
                        type="number"
                        id="established"
                        min="1900"
                        max="2024"
                        value={businessForm.established}
                        onChange={(e) => setBusinessForm({ ...businessForm, established: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="YYYY"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Add to Directory
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'members' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Member Management</h2>
                <div className="text-center py-16">
                  <UserGroupIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Member Management Panel</h3>
                  <p className="text-gray-600">This section will contain member registration, approval, and management features.</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
