import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export function ConcertConnectionApp() {
  const processSlides = [
    'https://i.imgur.com/7f5pJjw.png',
    'https://i.imgur.com/vSCZIEO.png',
  ];

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
            Concert Connection App Design
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['Design Sprint', 'User Testing', 'Figma'].map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-black-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-16 flex flex-col md:flex-row gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Overview</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              This project was a product of a final assignment for an Human Computer Interaction class, in which I worked in a small team to identify and address a design need using HCI principles and practices. We produced an app design that is aimed at boosting the discoverability of live events and bridging the disconnect between artist and venue awareness and fans.
            </p>
          </div>
          
          
        </div>

        {/* Background & Discovery Section */}
        <div className="mb-16">
          <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Background & Discovery</h2>
          
          
          <img 
            src="https://i.imgur.com/vGaU0vw.png" 
            alt="Background & Discovery"
            className="w-1/2 float-right ml-6 mb-4 rounded-xl shadow-lg object-cover align-top"
          />
          <p className="text-gray-700">
            For many people who love music, live music is a true joy. Yet, often I've found myself frustrated by trying to keep track of events, or even missing artists completely because of a lack of awareness about events. To see if this was a shared experience, our team interviewed several users with different backgrounds and relationships to music, and found many common themes. Interviewees agreed that the experience of searching for and finding concerts often felt difficult, and tedious. Many also agreed that they had missed concerts they would have seen, or had to buy tickets at high resell prices after learning about events late. With these in mind, we aimed to bridge the gap of discoverability and support a more effortless experience in finding live music.
          </p>
          
          
        </div>

        {/* Process & Design Section with Slide Flow */}
        <div className="mb-16">
          <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Process & Design</h2>
          <p className="text-gray-700 leading-relaxed text-base mb-8">
            To address this design problem, we went through three rounds of iterative design with the goal of creating a high fidelity prototype of our solution. We used methods of ideating, task analysis and need finding to define our scope and create our initial prototypes, then completed user studies and critique to evaluate and reflect on the solutions. Through the next two design sprints, we used techniques of lofi prototyping and wizard of oz user testing to refine the elements and functions of our design. By the end of the third design sprint, we had produced a high fidelity prototype of a concert finding app in Figma with interaction and flow.
          </p>
          
          {/* Process Flow Slides */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {processSlides.map((slide, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={slide}
                  alt={`Process slide ${index + 1}`}
                  className="w-full h-full object-cover aspect-rectangle"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Outcome & Value Section */}
        <div className="mb-16 flex flex-col md:flex-row gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Outcome & Value</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              The final product was a high fidelity prototype of a concert finding app aimed at creating effortless interactions in discovery of new venues and artists. Displays data visually through geographic and temporal methods, creating a flexible experience of discovery and concert planning. Added customizable functionality through detailed filters to further curate search and event preferences. Added features to display shared interests among friends to create opportunities for finding concert buddies. Included suggested artists to promote discovery and exploration of new and similar artists. In bridging the gap between artists, venues and fans, this solution offers a strong benefit to all. For the user, it creates a loveable experience of managing live events while being able to build community through shared interests. For artists and venues, this design provides a solution to a lack of discoverability, and through user participation builds knowledge and precedent of the accessibility and celebration of these third spaces.
            </p>
          </div>
        </div>

        {/* Live Demo Section */}
        <div className="mb-16 p-8 bg-gray-50 rounded-xl">
          <h2 className="stix-two-text-one mb-4 text-2xl text-center" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Live Demo</h2>
          <p className="mozilla-text-one text-center text-gray-600 mb-6">
            Explore the interactive prototype
          </p>
          
          {/* Placeholder for embedded demo - you can replace with iframe or actual demo */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <iframe className="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/LV5H5bMjDVLMskxP2IDVvr/CatCatKat?node-id=169-820&starting-point-node-id=169%3A460&embed-host=share"></iframe>
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