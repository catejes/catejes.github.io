import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ConcertConnectionApp } from './pages/projects/ConcertConnectionApp';
import { WNURBranding } from './pages/projects/WNURBranding';
import { QGISMapping } from './pages/projects/QGISMapping';
import { EnviResearch } from './pages/projects/EnviResearch';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ecommerce-platform" element={<ConcertConnectionApp />} />
          <Route path="/projects/task-management" element={<WNURBranding />} />
          <Route path="/projects/portfolio-website" element={<QGISMapping />} />
          <Route path="/projects/envi-research" element={<EnviResearch />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}