import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function WNURBranding() {
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
            WNUR Media & Branding
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['Design Systems', 'Social Media', 'Event Curation'].map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-black-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Overview Section */}
        <div className="mb-16 flex flex-col md:flex-row gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Experience Overview</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Over the past year and a half, I have worked to create a consistent and stylistic brand identity for Northwestern's student run radio station, WNUR 89.3FM. As Social Media director, I've applied learning from past internship experiences to create a strong design system and club identity using Figma. Through social media, working with outreach and events coordinators, I've also contributed to increasing club participation through curating information and experiences to increase awareness, interest and lasting engagement with the club on campus.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://i.imgur.com/eJD3n1I.jpeg" 
                alt="Experience Overview"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Design Systems Section */}
        <div className="mb-16 flex flex-col md:flex-row-reverse gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Design Systems</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Created a distinct social media identity through a defined set of fonts and stylistic elements, using various color palettes to create visually appealing social media posts in Figma. Leveraged components to create reusable post templates for easy and consistent posting. Designed a new logo using primary font to establish a distinct and cohesive brand identity. Created lovable multi-media merchandise for the annual fundraiser.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://i.imgur.com/UXJhxp2.png" 
                alt="Design Systems"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Outreach & Engagement Section */}
        <div className="mb-16 flex flex-col md:flex-row gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Outreach & Engagement</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              To promote awareness and lasting engagement with the station, generated station resources for experiences to draw interest, as well as ways to create collaborative events with other clubs to expand reach. With events coordinator, planned and executed several types of bonding and social events, such as art printing events, mixtape exchanges, and student band performances. For multiple mediums including social media, newsletter and print, created informational resources to highlight station programming and opportunities.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://i.imgur.com/RsYsBtJ.png" 
                alt="Outreach & Engagement"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Current Outcomes Section */}
        <div className="mb-16 flex flex-col md:flex-row-reverse gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Current Outcomes</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Through the past two years, the station has seen a substantial increase in club participation, which has prompted the revitalization of several programming blocks with the intent on a reestablishment. Internally, participated in the creation of thorough station and personal role documentation to ensure a sustainable and consistent transition of leadership in looking to the future of the station. Through a design system, documentation, and event templates, I have created a defined identity for the station that will be easily accessible for future staff.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://i.imgur.com/36W21f1.png" 
                alt="Current Outcomes"
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
