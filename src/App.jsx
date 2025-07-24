import { Routes, Route } from 'react-router-dom';
import {Hero} from './components/Hero';
import {PropertyListings} from './components/PropertyListings';
import {PropertyDetail} from './components/PropertyDetail';
import {BeforeAfterSlider} from './components/BeforeAfterSlider';
import {Footer} from './components/Footer';
import AboutKevin from './pages/AboutKevin';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PropertyListings />
              <BeforeAfterSlider />
              <Footer />
              <PropertyDetail /> 
            </>
          }
        />
        <Route path="/about" element={<AboutKevin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
