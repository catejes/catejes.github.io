export function About() {
  return (
    <section className="min-h-screen py-24 px-6 bg-white/90 pt-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="stix-two-text-one text-center mb-12"style={{ fontSize: '3.5rem', fontWeight: 400 }}>About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://i.imgur.com/XzDSdvp.png" 
                alt="Workspace"
                className="w-full h-full rounded-full object-cover" 
              />
            </div>
          </div>
          
          <div className="space-y-4 md:col-span-2">
            <p className="mozilla-text-one text-gray-700"style={{fontSize: '1.2rem'}}>
              I am a fourth year undergrad at Northwestern University with a love of combining
              technical skills with my creative design interests to produce engaging designs
              and experiences. With a background in Computer Science and Environmental Sciences, I have been spending
              my undergraduate time applying the technical aspects of computer science in the context of environmental 
              topics and research experiences. 
            </p>
            
          </div>
          
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="space-y-4 md:col-span-2">
            <p className="mozilla-text-one text-gray-700"style={{fontSize: '1.2rem'}}>
              Currently, I am immersing myself in learning as much as I can about the design process
              through a Human Computer Interaction certificate, and hope to continue developing my research, 
              design thinking, and communication skills. When I'm not in class, you can find me attending live music events, exploring the city, and creating 
              posters for my university radio station.
            </p>
          </div> 
          
          <div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://i.imgur.com/S3vJ9q6.png" 
                alt="Workspace"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>          
        </div>
          
            
          <p className="mozilla-text-one text-gray-700">
              
          </p>
      </div>
    </section>
  );
}
