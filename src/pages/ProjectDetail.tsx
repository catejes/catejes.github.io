import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projectsData = {
  'ecommerce-platform': {
    title: 'Concert Connection App',
    tags: ['Design Sprint', 'User Testing', 'Figma'],
    liveUrl: '#',
    githubUrl: '#',
    sections: [
      {
        title: 'Overview',
        text: 'This project was a product of a final assignment for an Human Computer Interaction class, in which I worked in a small team to identify and address a design need using HCI principles and practices. We produced an app design that is aimed at boosting the discoverability of live events and bridging the disconnect between artist and venue awareness and fans.',
        image: 'https://images.unsplash.com/photo-1768987439382-894ea4e2a736?w=800&h=600&fit=crop',
      },
      {
        title: 'Background & Discovery',
        text: 'For many people who love music, live music is a true joy. Yet, often I’ve found myself frustrated by trying to keep track of events, or even missing artists completely because of a lack of awareness about events. To see if this was a shared experience, our team interviewed several users with different backgrounds and relationships to music, and found many common themes. Interviewees agreed that the experience of searching for and finding concerts often felt difficult, and tedious. Many also agreed that they had missed concerts they would have seen, or had to buy tickets at high resell prices after learning about events late. With these in mind, we aimed to bridge the gap of discoverability and support a more effortless experience in finding live music.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      },
      {
        title: 'Process & Design',
        text: 'To address this design problem, we went through three rounds of iterative design with the goal of creating a high fidelity prototype of our solution. We used methods of ideating, task analysis and need finding to define our scope and create our initial prototypes, then completed user studies and critique to evaluate and reflect on the solutions. Through the next two design sprints, we used techniques of lofi prototyping and wizard of oz user testing to refine the elements and functions of our design. By the end of the third design sprint, we had produced a high fidelity prototype of a concert finding app in Figma with interaction and flow.',
        image: 'https://images.unsplash.com/photo-1726137569872-28e3f796d4a2?w=800&h=600&fit=crop',
      },
      {
        title: 'Outcome & Value',
        text: 'The final product was a high fidelity prototype of a concert finding app aimed at creating effortless interactions in discovery of new venues and artists. Displays data visually through geographic and temporal methods, creating a flexible experience of discovery and concert planning. Added customizable functionality through detailed filters to further curate search and event preferences. Added features to display shared interests among friends to create opportunities for finding concert buddies. Included suggested artists to promote discovery and exploration of new and similar artists. In bridging the gap between artists, venues and fans, this solution offers a strong benefit to all. For the user, it creates a loveable experience of managing live events while being able to build community through shared interests. For artists and venues, this design provides a solution to a lack of discoverability, and through user participation builds knowledge and precedent of the accessibility and celebration of these third spaces.',
        image: 'https://images.unsplash.com/photo-1758521961744-939de61d5cb4?w=800&h=600&fit=crop',
      },
    ],
  },
  'task-management': {
    title: 'WNUR Media & Branding',
    tags: ['Design Systems', 'Social Media', 'Event Curation'],
    liveUrl: '#',
    githubUrl: '#',
    sections: [
      {
        title: 'Experience Overview',
        text: 'Over the past year and a half, I have worked to create a consistent and stylistic brand identity for Northwestern’s student run radio station, WNUR 89.3FM. As Social Media director, I’ve applied learning from past internship experiences to create a strong design system and club identity using Figma. Through social media, working with outreach and events coordinators, I’ve also contributed to increasing club participation through curating information and experiences to increase awareness, interest and lasting engagement with the club on campus.',
        image: 'https://i.imgur.com/eJD3n1I.jpeg',
      },
      {
        title: 'Design Systems',
        text: 'Created a distinct social media identity through a defined set of fonts and stylistic elements, using various color palettes to create visually appealing social media posts in Figma. Leveraged components to create reusable post templates for easy and consistent posting. Designed a new logo using primary font to establish a distinct and cohesive brand identity. Created lovable multi-media merchandise for the annual fundraiser.',
        image: 'https://i.imgur.com/UXJhxp2.png',
      },
      {
        title: 'Outreach & Engagement',
        text: 'To promote awareness and lasting engagement with the station, generated station resources for experiences to draw interest, as well as ways to create collaborative events with other clubs to expand reach. With events coordinator, planned and executed several types of bonding and social events, such as art printing events, mixtape exchanges, and student band performances. For multiple mediums including social media, newsletter and print, created informational resources to highlight station programming and opportunities. ',
        image: 'https://i.imgur.com/RsYsBtJ.png',
      },
      {
        title: 'Current Outcomes',
        text: 'Through the past two years, the station has seen a substantial increase in club participation, which has prompted the revitalization of several programming blocks with the intent on a reestablishment. Internally, participated in the creation of thorough station and personal role documentation to ensure a sustainable and consistent transition of leadership in looking to the future of the station. Through a design system, documentation, and event templates, I have created a defined identity for the station that will be easily accessible for future staff.',
        image: 'https://i.imgur.com/36W21f1.png',
      },
    ],
  },
  'portfolio-website': {
    title: 'qGIS Mapping Analysis/R data analysis?',
    tags: ['qGIS', 'Data Visualization', 'R'],
    liveUrl: '#',
    githubUrl: '#',
    sections: [
      {
        title: 'Design Concept',
        text: 'Created a modern, minimalist portfolio website that showcases creative work with smooth animations and transitions. The design focuses on presenting work beautifully while maintaining fast load times and excellent performance. Every element is carefully crafted to guide visitors through the portfolio in a logical, engaging way. The color scheme and typography were chosen to create a professional yet approachable aesthetic. White space is used strategically to let the work breathe and stand out. The layout adapts to showcase different types of content, from detailed case studies to quick project highlights.',
        image: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=800&h=600&fit=crop',
      },
      {
        title: 'Smooth Animations',
        text: 'Leveraged Framer Motion to create fluid animations that enhance the user experience without being distracting. Page transitions, scroll-triggered animations, and hover effects all work together to create an engaging interface. Parallax scrolling adds depth and visual interest to the homepage. Micro-interactions provide feedback for user actions, making the site feel responsive and alive. Loading animations keep users engaged during content fetch operations. All animations are performance-optimized using GPU acceleration and are respectful of users who prefer reduced motion.',
        image: 'https://images.unsplash.com/photo-1750056393288-fd4a4a77cae4?w=800&h=600&fit=crop',
      },
      {
        title: 'Responsive Design',
        text: 'Built with a mobile-first approach ensuring the site looks perfect on all devices. The layout adapts seamlessly from mobile phones to large desktop screens, with touch-friendly interfaces and optimized images for each breakpoint. Navigation transforms into a mobile-friendly menu on smaller screens. Images are served at appropriate resolutions using responsive image techniques. Touch gestures like swipe are supported on mobile devices for gallery navigation. The site maintains its visual appeal and functionality whether viewed on a phone, tablet, or desktop.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      },
      {
        title: 'Performance Optimization',
        text: 'Implemented lazy loading, image optimization, and code splitting to achieve excellent performance scores. The site loads quickly even on slower connections and provides an instant, app-like experience for users. Critical CSS is inlined and fonts are preloaded to eliminate render-blocking resources. Images are compressed and served in modern formats like WebP with fallbacks for older browsers. Service workers enable offline functionality and faster repeat visits. The Lighthouse score consistently rates 95+ across all categories including performance, accessibility, and SEO.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      },
    ],
  },
  'envi-research': {
    title: 'Environmental Justice Research & Data Analysis',
    tags: ['R', 'Data Processing', 'Excel'],
    liveUrl: '#',
    githubUrl: '#',
    sections: [
      {
        title: 'Research Overview',
        text: 'Developed comprehensive data analysis scripts for environmental justice research, focusing on identifying patterns of environmental inequality across urban communities. The project involved processing large datasets of pollution metrics, demographic information, and health outcomes to reveal correlations between environmental hazards and vulnerable populations. The analysis helped inform policy recommendations and community advocacy efforts, providing concrete evidence of environmental disparities that affect marginalized communities.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      },
      {
        title: 'Data Collection & Processing',
        text: 'Collected and cleaned environmental data from multiple government databases, including EPA air quality measurements, industrial facility locations, and demographic census data. Developed Python scripts to automate data extraction and standardization across different data formats and time periods. Implemented robust error handling and validation checks to ensure data integrity throughout the processing pipeline. The cleaned datasets enabled consistent analysis across multiple years and geographic regions.',
        image: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=800&h=600&fit=crop',
      },
      {
        title: 'Statistical Analysis in R',
        text: 'Utilized R statistical packages to perform advanced regression analysis, identifying significant correlations between environmental exposure and health outcomes. Created custom functions for spatial analysis to examine geographic clustering of environmental hazards near low-income neighborhoods. Applied machine learning techniques to predict areas at risk of future environmental degradation. The analysis revealed statistically significant disparities in pollution exposure across racial and economic lines.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      },
      {
        title: 'Visualization & Reporting',
        text: 'Designed interactive visualizations and comprehensive reports to communicate findings to both academic and community audiences. Created heat maps, scatter plots, and time-series graphs that clearly illustrated environmental disparities. Developed presentations tailored to different stakeholder groups, from technical researchers to community activists and policymakers. The visualizations made complex environmental data accessible and actionable, supporting evidence-based advocacy for environmental justice reforms.',
        image: 'https://images.unsplash.com/photo-1758521961744-939de61d5cb4?w=800&h=600&fit=crop',
      },
    ],
  },
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen py-24 px-6 pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Project not found</h2>
          <Link to="/projects" className="text-blue-600 hover:text-blue-700">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

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
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-black-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a 
              href={project.liveUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            {/*
            <a 
              href={project.githubUrl}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Github size={18} />
              View Code
            </a>
            */}
          </div>
        </div>

        {/* Project Sections with Alternating Layout */}
        {project.sections.map((section, index) => (
          <div 
            key={index}
            className={`mb-16 flex flex-col md:flex-row gap-8 items-top ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1">
              <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>{section.title}</h2>
              <p className="text-gray-700 leading-relaxed text-base">{section.text}</p>
            </div>
            
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Back to Projects */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <Link 
            to="/projects" 
            className="stix-two-text-one inline-flex items-center gap-2  text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}