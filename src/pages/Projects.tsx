import { ExternalLink, Github, Code, Palette, Database, Smartphone, Globe, Zap, SquarePen, ChartScatter } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'Concert Connection App Design',
    description: 'An app idea born out of the disconnect between artists and fans',
    image: 'https://i.imgur.com/oyQqY0V.png',
    tags: ['Design Sprint', 'User Testing', 'Figma'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'task-management',
    title: 'WNUR Media & Branding',
    description: 'Creating resiliency and continuity in student radio station branding and experiences',
    image: 'https://i.imgur.com/vw1ziLS.png',
    tags: ['Design Systems', 'Social Media', 'Event Curation'],
    liveUrl: '#',
    githubUrl: '#',
  }
  /*
  {
    id: 'portfolio-website',
    title: 'qGIS Mapping Analysis/R data analysis?',
    description: 'Culminative project of qGIS mapping class combining principles of software and scientific communication',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    tags: ['qGIS', 'Data Visualization', 'R'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'envi-research',
    title: 'Environmental Justice Research & Data Analysis',
    description: 'Script development for data analysis in envrionmental research',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    tags: ['R', 'Data Processing', 'Excel'],
    liveUrl: '#',
    githubUrl: '#',
  },
  */
];

const skills = [
  {
    icon: Palette,
    title: 'UI Design',
    description: 'Figma, Responsive Design, Design systems',
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, TypeScript, Tailwind CSS',
  },
  {
    icon: SquarePen,
    title: 'Product Development Practices',
    description: 'Design Sprints, Storyboarding, Jira',
  },
  {
    icon: ChartScatter,
    title: 'Data Analysis and Visualization',
    description: 'Python, R, qGIS Mapping',
  },
  {
    icon: Globe,
    title: 'Microsoft Suite',
    description: 'MS Excel, Word',
  },
  {
    icon: Zap,
    title: 'Content Strategy and Creation',
    description: 'Social Media Management, Brand Curation, Event Coordination',
  },
];

export function Projects() {
  return (
    <section className="min-h-screen py-24 bg-white/90 pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="stix-two-text-one text-center mb-4" style={{ fontSize: '3.5rem', fontWeight: 400 }}>Projects & Experiences</h2>
        <p className="mozilla-text-one text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Take a closer look at my recent projects.
        </p>
      </div>
        
      <div className="flex flex-col gap-16 mb-24">
        {projects.map((project, index) => (
          <Link 
            key={index}
            to={`/projects/${project.id}`}
            className={`flex flex-col md:flex-row items-center hover:scale-105 transition-transform duration-300transition-opacity ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover aspect-video"
              />
            </div>
            
            <div className={`w-full md:w-1/2 p-8 md:p-12 ${
              index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'
            }`}>
              <h3 className="stix-two-text-one mb-2 "style={{ fontSize: '1.5rem', fontWeight: 400 }} >{project.title}</h3>
              <p className="mozilla-text-one text-gray-600 mb-4" >{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 text-black-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <span className="flex items-center gap-2 stix-two-text-one hover:underline" style={{fontWeight: 500}}>
                  {/* <ExternalLink size={18} /> */}
                  Read More
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="stix-two-text-one text-left mb-4" style={{ fontSize: '2.5rem', fontWeight: 400 }}>Skills</h2>
        <p className="mozilla-text-one text-left text-gray-600 mb-12">
          Some of the technologies and frameworks I have experience with.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="p-3 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <Icon className="text-black-600" size={24} />
                  </div>
                  <h3 className="mb-2">{skill.title}</h3>
                </div>
                <p className="mozilla-text-one text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}