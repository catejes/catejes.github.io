import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="noto-sans-one text-gray-900 hover:text-gray-600 transition-colors"
          >
            CATE JESCHKE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/about" 
              className={`transition-colors hover:underline ${isActive('/about') ? 'text-black-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              ABOUT
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors hover:underline ${isActive('/projects') ? 'text-black-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              PROJECTS
            </Link>
            <Link 
              to="/gallery" 
              className={`transition-colors hover:underline ${isActive('/gallery') ? 'text-black-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              GALLERY
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors hover:underline ${isActive('/contact') ? 'text-black-800' : 'text-gray-600 hover:text-gray-900'}`}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors text-left hover:underline ${isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              ABOUT
            </Link>
            <Link 
              to="/projects" 
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors text-left hover:underline ${isActive('/projects') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              PROJECTS
            </Link>
            <Link 
              to="/gallery" 
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors text-left hover:underline ${isActive('/gallery') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              GALLERY
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors text-left hover:underline ${isActive('/contact') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}