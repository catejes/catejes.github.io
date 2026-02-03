import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function QGISMapping() {
  return (
    <div className="min-h-screen py-24 px-6 pt-32 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="stix-two-text-one inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="noto-sans-one mb-4" style={{ fontSize: '3.5rem', fontWeight: 600 }}>
            qGIS Mapping Analysis/R data analysis?
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['qGIS', 'Data Visualization', 'R'].map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Design Concept Section */}
        <div className="mb-16 flex flex-col md:flex-row gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Design Concept</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Created a modern, minimalist portfolio website that showcases creative work with smooth animations and transitions. The design focuses on presenting work beautifully while maintaining fast load times and excellent performance. Every element is carefully crafted to guide visitors through the portfolio in a logical, engaging way. The color scheme and typography were chosen to create a professional yet approachable aesthetic. White space is used strategically to let the work breathe and stand out. The layout adapts to showcase different types of content, from detailed case studies to quick project highlights.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=800&h=600&fit=crop" 
                alt="Design Concept"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Smooth Animations Section */}
        <div className="mb-16 flex flex-col md:flex-row-reverse gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Smooth Animations</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Leveraged Framer Motion to create fluid animations that enhance the user experience without being distracting. Page transitions, scroll-triggered animations, and hover effects all work together to create an engaging interface. Parallax scrolling adds depth and visual interest to the homepage. Micro-interactions provide feedback for user actions, making the site feel responsive and alive. Loading animations keep users engaged during content fetch operations. All animations are performance-optimized using GPU acceleration and are respectful of users who prefer reduced motion.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1750056393288-fd4a4a77cae4?w=800&h=600&fit=crop" 
                alt="Smooth Animations"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Responsive Design Section */}
        <div className="mb-16 flex flex-col md:flex-row gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Responsive Design</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Built with a mobile-first approach ensuring the site looks perfect on all devices. The layout adapts seamlessly from mobile phones to large desktop screens, with touch-friendly interfaces and optimized images for each breakpoint. Navigation transforms into a mobile-friendly menu on smaller screens. Images are served at appropriate resolutions using responsive image techniques. Touch gestures like swipe are supported on mobile devices for gallery navigation. The site maintains its visual appeal and functionality whether viewed on a phone, tablet, or desktop.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop" 
                alt="Responsive Design"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Performance Optimization Section */}
        <div className="mb-16 flex flex-col md:flex-row-reverse gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Performance Optimization</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Implemented lazy loading, image optimization, and code splitting to achieve excellent performance scores. The site loads quickly even on slower connections and provides an instant, app-like experience for users. Critical CSS is inlined and fonts are preloaded to eliminate render-blocking resources. Images are compressed and served in modern formats like WebP with fallbacks for older browsers. Service workers enable offline functionality and faster repeat visits. The Lighthouse score consistently rates 95+ across all categories including performance, accessibility, and SEO.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                alt="Performance Optimization"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <Link 
            to="/projects" 
            className="stix-two-text-one inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
