import { BusinessEntry, NewsItem } from '@/types';

export const sampleBusinesses: BusinessEntry[] = [
    {
        id: 1,
        name: "ABC Manufacturing Pvt Ltd",
        category: "Manufacturing",
        phone: "98261-35000",
        email: "info@abcmfg.com",
        address: "Siltara Industrial Area, Raipur",
        description: "Leading manufacturer of industrial equipment and machinery",
        established: "1995",
        website: "www.abcmfg.com"
    },
    {
        id: 2,
        name: "XYZ Traders & Exporters",
        category: "Trading",
        phone: "98263-95544",
        email: "contact@xyztraders.com",
        address: "Civil Lines, Raipur",
        description: "Premier trading company specializing in export-import",
        established: "2001",
        website: "www.xyztraders.com"
    },
    {
        id: 3,
        name: "Chhattisgarh Logistics Solutions",
        category: "Transportation",
        phone: "98264-12345",
        email: "info@cglogistics.com",
        address: "Tatibandh, Raipur",
        description: "Complete logistics and transportation solutions",
        established: "2010",
        website: "www.cglogistics.com"
    },
    {
        id: 4,
        name: "Steel Tech Industries",
        category: "Manufacturing",
        phone: "98265-67890",
        email: "info@steeltech.com",
        address: "Urla Industrial Area, Raipur",
        description: "Advanced steel processing and fabrication",
        established: "1988",
        website: "www.steeltech.com"
    }
];

export const sampleNews: NewsItem[] = [
    {
        id: 1,
        title: "Chhattisgarh Industrial Growth Reaches New Heights",
        content: "The state's industrial sector has shown remarkable growth with new investments worth ₹2,500 crores announced this quarter. Major companies are expanding their operations, creating over 5,000 new jobs.",
        date: "2024-08-25",
        category: "Industry News",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop"
    },
    {
        id: 2,
        title: "New Members Join Udyog Mahasangh This Month",
        content: "15 new businesses have joined our association, expanding our network across manufacturing, technology, and services sectors. Welcome to our growing family of entrepreneurs!",
        date: "2024-08-24",
        category: "Association News",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
    },
    {
        id: 3,
        title: "Digital Transformation Workshop Scheduled",
        content: "Join us for an exclusive workshop on digital transformation for businesses. Learn about AI, automation, and digital marketing strategies from industry experts on September 15th.",
        date: "2024-08-23",
        category: "Events",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop"
    },
    {
        id: 4,
        title: "State Government Announces New Industrial Policy",
        content: "Chhattisgarh government unveils progressive industrial policy with tax incentives, land allocation benefits, and enhanced infrastructure support for manufacturing units.",
        date: "2024-08-22",
        category: "Policy Update",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
    },
    {
        id: 5,
        title: "Export Excellence Awards 2024 Announced",
        content: "Recognizing outstanding exporters from Chhattisgarh. Nominations open for companies that have shown exceptional performance in international trade and export growth.",
        date: "2024-08-20",
        category: "Awards",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop"
    },
    {
        id: 6,
        title: "Green Energy Initiative Gains Momentum",
        content: "Local industries commit to sustainable practices with solar power installations and waste reduction programs. Over 50 companies pledge to go carbon neutral by 2030.",
        date: "2024-08-18",
        category: "Sustainability",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop"
    }
];
