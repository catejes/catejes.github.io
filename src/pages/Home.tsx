import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-88 h-88 rounded-full">
              <img 
                src="https://i.imgur.com/BxggGLl.png" 
                alt="Workspace"
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
          </div>
          
          {/* Text and Buttons */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="stix-two-text-one mb-6" style={{ fontSize: '3.5rem', fontWeight: 400 }}>
              Hi, I'm Cate
            </h1>
            
            <p className="mozilla-text-one text-xl text-gray-600 mb-8">
              I'm a creative developer passionate about building beautiful and functional web experiences. 
              I specialize in modern web technologies and love turning ideas into reality.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <a 
                href="https://github.com/catejes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
              >
                <Github size={24} />
              </a>
              <a 
                href="www.linkedin.com/in/cate-jeschke-454b5b285" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:catherine.c.jeschke@gmail.com"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
              >
                <Mail size={24} />
              </a>
            </div>

            <Link 
              to="/contact"
              className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-blue-700 transition-colors inline-block"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}