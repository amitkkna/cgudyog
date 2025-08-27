# Chhattisgarh Udyog Mahasangh

A modern, dynamic business directory website for Chhattisgarh Udyog Mahasangh built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### 🏢 **Business Directory**
- Comprehensive business listings with advanced search and filtering
- Category-wise organization (Manufacturing, Trading, Technology, etc.)
- Detailed business profiles with contact information
- Grid and list view modes
- Responsive design for all devices

### 📰 **News Management System**
- Dynamic news section with bilingual support (English/Hindi)
- Featured news highlighting
- Category-based news filtering
- Real-time search functionality
- Admin panel for content management

### 🔄 **NewsStrip Component**
- Reusable news ticker/strip component
- Multiple variants: scrolling, sliding, static
- Configurable positioning (top, bottom, inline)
- Bilingual support with language toggle
- Customizable speed and controls

### 🌐 **Bilingual Support**
- Complete English and Hindi language support
- Professional Hindi translations
- Dynamic language switching
- Localized date formatting
- Context-aware UI elements

### 🎨 **Modern Design**
- Beautiful gradient backgrounds
- Smooth animations with Framer Motion
- Glass-morphism effects
- Professional color schemes
- Mobile-first responsive design

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **UI Components**: Radix UI
- **Build Tool**: Turbopack
- **Development**: Hot reload with fast refresh

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with hero section
│   ├── about/             # About page
│   ├── directory/         # Business directory
│   ├── news/              # News section with bilingual support
│   ├── contact/           # Contact page
│   ├── admin/             # Admin panel
│   └── news-strip-demo/   # NewsStrip component demo
├── components/            # Reusable components
│   └── NewsStrip.tsx      # Dynamic news strip component
└── styles/               # Global styles
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/amitkkna/cgudyog.git
   cd cgudyog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm start
   ```

## 📋 Available Pages

- **Homepage** (`/`) - Main landing page with overview
- **About** (`/about`) - Organization information
- **Directory** (`/directory`) - Complete business directory
- **News** (`/news`) - Bilingual news section
- **Contact** (`/contact`) - Contact information and forms
- **Admin** (`/admin`) - Content management panel
- **NewsStrip Demo** (`/news-strip-demo`) - Component showcase

## 🔧 NewsStrip Component Usage

```tsx
import NewsStrip from '@/components/NewsStrip';

// Basic scrolling strip
<NewsStrip 
  position="top"
  variant="scrolling"
  autoPlay={true}
  language="en"
/>

// Sliding with controls
<NewsStrip 
  position="inline"
  variant="sliding"
  showControls={true}
  language="hi"
  className="rounded-xl"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | 'top' \| 'bottom' \| 'inline' | 'top' | Strip positioning |
| `variant` | 'scrolling' \| 'sliding' \| 'static' | 'scrolling' | Animation style |
| `autoPlay` | boolean | true | Auto-advance items |
| `speed` | number | 60 | Animation speed |
| `language` | 'en' \| 'hi' | 'en' | Content language |
| `showControls` | boolean | false | Show navigation |
| `showClose` | boolean | false | Show close button |

## 🌐 Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting provider

## � Key Features Implemented

✅ **Modern Business Directory** - Complete with search, filtering, and detailed profiles  
✅ **Bilingual News System** - English and Hindi content management  
✅ **Reusable NewsStrip** - Flexible component for any page  
✅ **Admin Panel** - Content management interface  
✅ **Responsive Design** - Works on all devices  
✅ **Professional UI/UX** - Modern design with animations  
✅ **SEO Optimized** - Static generation with Next.js  
✅ **Performance Optimized** - Fast loading with Turbopack  

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is developed for Chhattisgarh Udyog Mahasangh.

## 📞 Support

For support and queries, please contact the development team.

---

**Built with ❤️ for Chhattisgarh's business community**

## 🛠️ Development

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server
Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Project Structure
```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/               # Reusable components (future)
└── lib/                      # Utility functions (future)
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px and above

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:
```env
NEXT_PUBLIC_SITE_URL=https://cgudyogmahasangh.com
NEXT_PUBLIC_CONTACT_EMAIL=info@cgudyogmahasangh.com
```

### Customization
- **Colors**: Edit `tailwind.config.ts` for custom color schemes
- **Fonts**: Modify font configurations in `layout.tsx`
- **Content**: Update business data in respective page components

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Full Next.js support
- **AWS Amplify**: Serverless deployment
- **Traditional Hosting**: Static export available

## 📊 Performance

### Core Web Vitals
- **LCP**: Optimized images and fonts
- **FID**: Minimal JavaScript bundle
- **CLS**: Stable layout design

### SEO Features
- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media optimization
- **Structured Data**: Business schema markup
- **Sitemap**: Auto-generated sitemap

## 🔄 Future Enhancements

### Planned Features
1. **User Authentication**: Member login system
2. **Business Registration**: Online business listing submission
3. **Event Management**: News and events section
4. **Digital Directory**: Advanced search and filtering
5. **API Integration**: Real-time data synchronization
6. **Multi-language**: Hindi language support
7. **Admin Panel**: Content management system
8. **Payment Gateway**: Membership payment processing

### Technical Improvements
- **Database Integration**: MongoDB or PostgreSQL
- **API Routes**: RESTful API endpoints
- **Authentication**: NextAuth.js integration
- **File Upload**: Business logo and document uploads
- **Email Service**: Newsletter and notifications
- **Analytics**: Google Analytics integration

## 📞 Contact Information

**Chhattisgarh Udyog Mahasangh**
- **Address**: Plot No: 80 D & E, Phase-II, Siltara Industrial Area-493111, Raipur, Chhattisgarh
- **Phone**: 98261-35000, 98263-95544
- **Email**: cumraipur@gmail.com, info@cgudyogmahasangh.com
- **President**: Mahesh Kakkar

## 📄 License

This project is proprietary software developed for Chhattisgarh Udyog Mahasangh.

---

**Built with ❤️ for the business community of Chhattisgarh**
