export interface BusinessEntry {
    id: number;
    name: string;
    category: string;
    phone: string;
    email: string;
    address: string;
    description?: string;
    image?: string;
    established?: string;
    website?: string;
    employees?: string;
    featured?: boolean;
    rating?: number;
    services?: string[];
    certifications?: string[];
    logo?: string;
}

export interface NewsItem {
    id: number;
    title: string;
    content: string;
    date: string;
    category: string;
    image?: string;
}
