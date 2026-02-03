import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock submission - in a real app, you'd send this to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen py-24 px-6 pt-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="stix-two-text-one mb-4" style={{ fontSize: '3.5rem', fontWeight: 400 }}>Get In Touch</h2>
          <p className="mozilla-text-one text-gray-600">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="stix-two-text-one mb-6" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Mail className="text-black-600" size={24} />
              </div>
              <div className="text-left">
                <p className="mozilla-text-one text-gray-600 mb-1">Email</p>
                <a href="mailto:catherine.c.jeschke@gmail.com" className="mozilla-text-one text-gray-900 hover:text-blue-600 transition-colors">
                  catherine.c.jeschke@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-black-600" size={24} />
              </div>
              <div className="text-left">
                <p className="mozilla-text-one text-gray-600 mb-1">Location</p>
                <p className="mozilla-text-one text-gray-900">Evanston, IL</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="stix-two-text-one mb-6" style={{ fontSize: '1.5rem', fontWeight: 400 }}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mozilla-text-one block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mozilla-text-one block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mozilla-text-one block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="mozilla-text-one block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-half px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-300 transition-colors mozilla-text-one font-medium"
              >
                {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {isSubmitted && (
                <p className="mozilla-text-one text-green-600 text-center text-sm">
                  Thank you! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}