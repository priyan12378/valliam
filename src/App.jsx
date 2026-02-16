import { Routes, Route, Link } from 'react-router-dom'; // Added Link import
import { Mail, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Imports
import Home from './pages/Home';
import Company from './pages/Company';
import EdgeAI from './pages/EdgeAI'; 
import LowPowerAI from './pages/LowPowerAI';
import IoT from './pages/IoT';
import Connectivity from './pages/Connectivity';
import SmartHMI from './pages/SmartHMI';
import Cybersecurity from './pages/Cybersecurity';
import FuSa from './pages/FuSa';
import DigitalTwins from './pages/DigitalTwins';
import NextGenMobility from './pages/NextGenMobility';
import POC from './pages/POC';
import Manufacturing from './pages/Manufacturing';  
import ECUSoftwarePlatform from './pages/ECUSoftwarePlatform';
import HmiUiEngineering from './pages/HmiUiEngineering';
import Autosar from './pages/Autosar';
import IoTCloud from './pages/IoTCloud';
import LinuxAndroidRTOS from './pages/LinuxAndroidRTOS';
import EmbeddedPlatform from './pages/EmbeddedPlatform';
import FOTA from './pages/FOTA';
import MobileApp from './pages/MobileApp';
import ProcessCompliance from './pages/ProcessCompliance';
import VerificationValidation from './pages/VerificationValidation';
import RnDCoInnovation from './pages/RnDCoInnovation';
import EOL from './pages/EOL';
import ProductDesign from './pages/ProductDesign';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">

      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/edge-ai" element={<EdgeAI />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/low-power-ai" element={<LowPowerAI />} />
        <Route path="/iot" element={<IoT />} />
        <Route path="/connectivity" element={<Connectivity />} />
        <Route path="/smart-hmi" element={<SmartHMI />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/fusa" element={<FuSa />} />
        <Route path="/digital-twins" element={<DigitalTwins />} />
        <Route path="/next-gen-mobility" element={<NextGenMobility />} />
        <Route path="/poc" element={<POC />} />
        <Route path="/ecu-software-platform" element={<ECUSoftwarePlatform />} />
        <Route path="/hmi-ui-engineering" element={<HmiUiEngineering />} />
        <Route path="/autosar" element={<Autosar />} />
        <Route path="/iot-cloud" element={<IoTCloud />} />
        <Route path="/linux-android-rtos" element={<LinuxAndroidRTOS />} />
        <Route path="/embedded-platform" element={<EmbeddedPlatform />} />
        <Route path="/fota" element={<FOTA />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/process-compliance" element={<ProcessCompliance />} />
        <Route path="/verification-validation" element={<VerificationValidation />} />
        <Route path="/rnd-co-innovation" element={<RnDCoInnovation />} />
        <Route path="/eol" element={<EOL />} />
        <Route path="/product-design" element={<ProductDesign />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        
        {/* Email Button - Updated Address */}
        <a 
          href="mailto:valliam.tech@gmail.com" 
          className="group flex items-center justify-end"
          title="Send us an email"
        >
          <span className="mr-3 px-3 py-1 bg-gray-900 text-white text-sm font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Email Us
          </span>
          <div className="w-14 h-14 bg-[#007BFF] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,123,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,123,255,0.6)] hover:scale-110 transition-all duration-300">
            <Mail size={24} />
          </div>
        </a>

        {/* Chat Button - Updated to use Link for SPA navigation */}
        <Link 
          to="/contact" 
          className="group flex items-center justify-end"
          title="Contact Page"
        >
          <span className="mr-3 px-3 py-1 bg-gray-900 text-white text-sm font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Contact Us
          </span>
          <div className="w-14 h-14 bg-[#E60000] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(230,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(230,0,0,0.6)] hover:scale-110 transition-all duration-300">
            <MessageSquare size={24} />
          </div>
        </Link>

      </div>
    </div>
  );
}

export default App;