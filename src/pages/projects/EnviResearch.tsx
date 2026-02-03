import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function EnviResearch() {
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
            Environmental Justice Research & Data Analysis
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['R', 'Data Processing', 'Excel'].map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Research Overview Section */}
        <div className="mb-16 flex flex-col md:flex-row gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Research Overview</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Developed comprehensive data analysis scripts for environmental justice research, focusing on identifying patterns of environmental inequality across urban communities. The project involved processing large datasets of pollution metrics, demographic information, and health outcomes to reveal correlations between environmental hazards and vulnerable populations. The analysis helped inform policy recommendations and community advocacy efforts, providing concrete evidence of environmental disparities that affect marginalized communities.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop" 
                alt="Research Overview"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Data Collection & Processing Section */}
        <div className="mb-16 flex flex-col md:flex-row-reverse gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Data Collection & Processing</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Collected and cleaned environmental data from multiple government databases, including EPA air quality measurements, industrial facility locations, and demographic census data. Developed Python scripts to automate data extraction and standardization across different data formats and time periods. Implemented robust error handling and validation checks to ensure data integrity throughout the processing pipeline. The cleaned datasets enabled consistent analysis across multiple years and geographic regions.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=800&h=600&fit=crop" 
                alt="Data Collection & Processing"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Statistical Analysis in R Section */}
        <div className="mb-16 flex flex-col md:flex-row gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Statistical Analysis in R</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Utilized R statistical packages to perform advanced regression analysis, identifying significant correlations between environmental exposure and health outcomes. Created custom functions for spatial analysis to examine geographic clustering of environmental hazards near low-income neighborhoods. Applied machine learning techniques to predict areas at risk of future environmental degradation. The analysis revealed statistically significant disparities in pollution exposure across racial and economic lines.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                alt="Statistical Analysis in R"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Visualization & Reporting Section */}
        <div className="mb-16 flex flex-col md:flex-row-reverse gap-8 items-top">
          <div className="flex-1">
            <h2 className="stix-two-text-one mb-4 text-2xl" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Visualization & Reporting</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Designed interactive visualizations and comprehensive reports to communicate findings to both academic and community audiences. Created heat maps, scatter plots, and time-series graphs that clearly illustrated environmental disparities. Developed presentations tailored to different stakeholder groups, from technical researchers to community activists and policymakers. The visualizations made complex environmental data accessible and actionable, supporting evidence-based advocacy for environmental justice reforms.
            </p>
          </div>
          
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1758521961744-939de61d5cb4?w=800&h=600&fit=crop" 
                alt="Visualization & Reporting"
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
