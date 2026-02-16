// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom'; // Added useLocation for active state
// import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
// import logoImage from '../assets/logo_in_black_in_home_page_part_2.png';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const location = useLocation(); // Hook to get current URL

//   // Helper to check if a menu item is active
//   const isActive = (path) => location.pathname === path;

//   // Helper to check if a parent dropdown should be highlighted (if any child is active)
//   const isParentActive = (children) => {
//     return children.some(child => child.path === location.pathname);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [isOpen]);

//   const navData = [
//     { name: 'Home', href: '/' },
//     {
//       name: 'Technology Solution',
//       children: [
//         { name: 'Edge AI', path: '/edge-ai' },
//         { name: 'Low Power AI', path: '/low-power-ai' },
//         { name: 'IoT', path: '/iot' },
//         { name: 'Connectivity', path: '/connectivity' },
//         { name: 'Smart HMI', path: '/smart-hmi' },
//         { name: 'Cybersecurity', path: '/cybersecurity' },
//         { name: 'FuSa', path: '/fusa' },
//         { name: 'Digital Twins', path: '/digital-twins' },
//         { name: 'Next-Gen Mobility', path: '/next-gen-mobility' }
//       ]
//     },
//     {
//       name: 'Engineering Services',
//       children: [
//         { name: 'Product Design', path: '/product-design' },
//         { name: 'POC', path: '/poc' },
//         { name: 'Embedded Platform', path: '/embedded-platform' },
//         { name: 'HMI/UI', path: '/hmi-ui-engineering' },
//         { name: 'Linux/Android/RTOS Porting', path: '/linux-android-rtos' },
//         { name: 'ECU Software Platform', path: '/ecu-software-platform' },
//         { name: 'Autosar', path: '/autosar' },
//         { name: 'IoT Cloud', path: '/iot-cloud' },
//         { name: 'FOTA', path: '/fota' },
//         { name: 'Mobile App (Android/iOS)', path: '/mobile-app' },
//         { name: 'Process Compliance', path: '/process-compliance' },
//         { name: 'Verification and Validation', path: '/verification-validation' },
//         { name: 'R&D/Co-Innovation Lab', path: '/rnd-co-innovation' },
//         { name: 'End-of-Line', path: '/eol' }
//       ]
//     },
//     { name: 'Manufacturing', href: '/manufacturing' },
//     { name: 'Company', href: '/company' }
//     // { name: 'Career', href: '#' }
//   ];

//   return (
//     <nav className="navbar sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
      
//       {/* Top Colorful Line */}
//       <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #E60000 0%, #007BFF 50%, #E60000 100%)' }}></div>

//       <div className="max-w-[1440px] mx-auto px-6 py-4">
//         <div className="flex justify-between items-center h-20">
          
//           {/* 1. Logo Section */}
//           <Link to="/" className="flex items-center gap-4 cursor-pointer group flex-shrink-0 mr-8">
//             <img src={logoImage} alt="Valliam Logo" className="w-16 h-16 object-contain" />
//             <div className="flex flex-col justify-center">
//               <span className="text-3xl font-bold tracking-tight leading-none" style={{ color: '#E60000', fontFamily: 'Rajdhani, sans-serif' }}>VALLIAM</span>
//               <p className="text-sm font-medium tracking-wide text-gray-600 leading-tight" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>Technical Centre</p>
//             </div>
//           </Link>

//           {/* 2. Desktop Menu */}
//           <div className="hidden xl:flex flex-1 items-center justify-between ml-4 mr-4">
//             {navData.map((item) => {
//               // Determine if this item is active
//               const active = item.children ? isParentActive(item.children) : isActive(item.href);

//               return (
//                 <div 
//                   key={item.name} 
//                   className="relative group h-20 flex items-center"
//                   onMouseEnter={() => setActiveDropdown(item.name)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   {item.children ? (
//                     <button 
//                       className={`flex items-center gap-1 px-4 py-2 text-[17px] font-bold rounded-md transition-all duration-200 whitespace-nowrap 
//                         ${active 
//                           ? 'bg-blue-50 text-[#007BFF]' // Active State
//                           : 'text-gray-700 hover:text-[#007BFF] hover:bg-gray-50' // Default & Hover
//                         }`}
//                       style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
//                     >
//                       {item.name}
//                       <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
//                     </button>
//                   ) : (
//                     <Link 
//                       to={item.href} 
//                       className={`px-4 py-2 text-[17px] font-bold rounded-md transition-all duration-200 whitespace-nowrap
//                         ${active 
//                           ? 'bg-blue-50 text-[#007BFF]' 
//                           : 'text-gray-700 hover:text-[#007BFF] hover:bg-gray-50'
//                         }`}
//                       style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
//                     >
//                       {item.name}
//                     </Link>
//                   )}

//                   {/* Dropdown Menu */}
//                   {item.children && (
//                     <div className={`absolute top-[80%] left-0 w-72 bg-white shadow-xl border border-gray-100 transition-all duration-200 ease-out transform origin-top-left rounded-md overflow-hidden ${
//                       activeDropdown === item.name ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'
//                     }`}>
//                       <div className="py-2">
//                         {item.children.map((subItem) => {
//                            const isChildActive = isActive(subItem.path);
//                            return (
//                             <Link
//                               key={subItem.name}
//                               to={subItem.path}
//                               className={`block px-6 py-3 text-sm font-medium transition-colors border-l-4 
//                                 ${isChildActive 
//                                   ? 'bg-blue-50 border-[#007BFF] text-[#007BFF]' 
//                                   : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#007BFF] hover:border-[#007BFF]/30'
//                                 }`}
//                               style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
//                             >
//                               {subItem.name}
//                             </Link>
//                            );
//                         })}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* 3. Contact Button */}
//           <div className="hidden xl:flex flex-shrink-0">
//             <Link to="/contact" className="flex items-center gap-2 px-5 py-3 ml-4 text-[16px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg rounded relative overflow-hidden group whitespace-nowrap" style={{ backgroundColor: '#E60000', fontFamily: 'Rajdhani, sans-serif' }}>
//               <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               <span className="relative flex items-center gap-2"><MessageSquare size={20} /><span>CONTACT US</span></span>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="xl:hidden flex items-center">
//             <button onClick={() => setIsOpen(true)} className="p-2 transition-colors hover:text-[#007BFF]" style={{ color: '#000000' }}>
//               <Menu size={36} strokeWidth={2} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 4. Mobile Full Screen Menu */}
//       <div className={`fixed inset-0 z-[60] bg-white transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
//         <div className="flex flex-col h-full">
//           <div className="flex justify-between items-center p-6 border-b border-gray-100">
//              <div className="flex items-center gap-3">
//                 <img src={logoImage} alt="Logo" className="w-12 h-12 object-contain" />
//                 <span className="text-2xl font-bold tracking-tight text-[#E60000]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>MENU</span>
//              </div>
//             <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:text-black transition-colors"><X size={36} strokeWidth={2} /></button>
//           </div>

//           <div className="flex-1 overflow-y-auto py-8 px-6">
//             <div className="flex flex-col space-y-4">
//               {navData.map((item) => (
//                 <div key={item.name} className="border-b border-gray-100 last:border-none pb-4">
//                   {item.children ? (
//                     <div>
//                       <button 
//                         onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
//                         className="w-full flex justify-between items-center py-2 text-2xl font-bold text-black"
//                         style={{ fontFamily: 'Rajdhani, sans-serif' }}
//                       >
//                         {item.name}
//                         <ChevronDown size={24} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-[#007BFF]' : ''}`} />
//                       </button>
//                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === item.name ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
//                         <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#007BFF] ml-2 my-2">
//                           {item.children.map((subItem) => (
//                             <Link 
//                               key={subItem.name} 
//                               to={subItem.path} 
//                               onClick={() => setIsOpen(false)}
//                               className="text-lg font-medium text-gray-600 hover:text-[#007BFF]"
//                               style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
//                             >
//                               {subItem.name}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <Link to={item.href} onClick={() => setIsOpen(false)} className="block py-2 text-2xl font-bold text-black hover:text-[#007BFF]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}
              
//               <Link 
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className="flex items-center justify-center gap-3 w-full py-4 mt-6 text-xl font-bold text-white rounded shadow-lg bg-[#E60000]"
//                 style={{ fontFamily: 'Rajdhani, sans-serif' }}
//               >
//                 <MessageSquare size={24} />
//                 <span>CONTACT US</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }



import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import logoImage from '../assets/logo_in_black_in_home_page_part_2.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Helper to check if a menu item is active
  const isActive = (path) => location.pathname === path;

  // Helper to check if a parent dropdown should be highlighted
  const isParentActive = (children) => {
    return children.some(child => child.path === location.pathname);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navData = [
    { name: 'Home', href: '/' },
    {
      name: 'Technology Solution',
      children: [
        { name: 'Edge AI', path: '/edge-ai' },
        { name: 'Low Power AI', path: '/low-power-ai' },
        { name: 'IoT', path: '/iot' },
        { name: 'Connectivity', path: '/connectivity' },
        { name: 'Smart HMI', path: '/smart-hmi' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'FuSa', path: '/fusa' },
        { name: 'Digital Twins', path: '/digital-twins' },
        { name: 'Next-Gen Mobility', path: '/next-gen-mobility' }
      ]
    },
    {
      name: 'Engineering Services',
      children: [
        { name: 'Product Design', path: '/product-design' },
        { name: 'POC', path: '/poc' },
        { name: 'Embedded Platform', path: '/embedded-platform' },
        { name: 'HMI/UI', path: '/hmi-ui-engineering' },
        { name: 'Linux/Android/RTOS Porting', path: '/linux-android-rtos' },
        { name: 'ECU Software Platform', path: '/ecu-software-platform' },
        { name: 'Autosar', path: '/autosar' },
        { name: 'IoT Cloud', path: '/iot-cloud' },
        { name: 'FOTA', path: '/fota' },
        { name: 'Mobile App (Android/iOS)', path: '/mobile-app' },
        { name: 'Process Compliance', path: '/process-compliance' },
        { name: 'Verification and Validation', path: '/verification-validation' },
        { name: 'R&D/Co-Innovation Lab', path: '/rnd-co-innovation' },
        { name: 'End-of-Line', path: '/eol' }
      ]
    },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Company', href: '/company' }
  ];

  return (
    <nav className="navbar sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
      
      {/* Top Colorful Line */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #E60000 0%, #007BFF 50%, #E60000 100%)' }}></div>

      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center h-20">
          
          {/* =================================================================
              1. LOGO SECTION (UPDATED UI)
             ================================================================= */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group flex-shrink-0 mr-10">
            {/* Logo Icon: Height matched to text */}
            <img src={logoImage} alt="Valliam Logo" className="h-12 w-auto object-contain" />
            
            <div className="flex items-center">
              {/* COMPANY NAME: Large, Bold, Red to match Icon Size */}
              <span className="text-5xl font-bold tracking-tighter leading-none transform translate-y-[2px]" 
                    style={{ color: '#E60000', fontFamily: 'Rajdhani, sans-serif' }}>
                VALLIAM
              </span>
              
              {/* VERTICAL DIVIDER */}
              <div className="h-10 w-px bg-gray-400 mx-4"></div>
              
              {/* TAGLINE: Stacked format like reference image */}
              <div className="flex flex-col justify-center leading-none">
                <span className="text-sm font-medium tracking-wide text-gray-600 uppercase" 
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Technical
                </span>
                <span className="text-sm font-medium tracking-wide text-gray-600 uppercase" 
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Centre
                </span>
              </div>
            </div>
          </Link>

          {/* 2. Desktop Menu */}
          <div className="hidden xl:flex flex-1 items-center justify-between ml-4 mr-4">
            {navData.map((item) => {
              const active = item.children ? isParentActive(item.children) : isActive(item.href);

              return (
                <div 
                  key={item.name} 
                  className="relative group h-20 flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button 
                      className={`flex items-center gap-1 px-4 py-2 text-[17px] font-bold rounded-md transition-all duration-200 whitespace-nowrap 
                        ${active 
                          ? 'bg-blue-50 text-[#007BFF]' 
                          : 'text-gray-700 hover:text-[#007BFF] hover:bg-gray-50'
                        }`}
                      style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link 
                      to={item.href} 
                      className={`px-4 py-2 text-[17px] font-bold rounded-md transition-all duration-200 whitespace-nowrap
                        ${active 
                          ? 'bg-blue-50 text-[#007BFF]' 
                          : 'text-gray-700 hover:text-[#007BFF] hover:bg-gray-50'
                        }`}
                      style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className={`absolute top-[80%] left-0 w-72 bg-white shadow-xl border border-gray-100 transition-all duration-200 ease-out transform origin-top-left rounded-md overflow-hidden ${
                      activeDropdown === item.name ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'
                    }`}>
                      <div className="py-2">
                        {item.children.map((subItem) => {
                           const isChildActive = isActive(subItem.path);
                           return (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className={`block px-6 py-3 text-sm font-medium transition-colors border-l-4 
                                ${isChildActive 
                                  ? 'bg-blue-50 border-[#007BFF] text-[#007BFF]' 
                                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#007BFF] hover:border-[#007BFF]/30'
                                }`}
                              style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                            >
                              {subItem.name}
                            </Link>
                           );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 3. Contact Button */}
          <div className="hidden xl:flex flex-shrink-0">
            <Link to="/contact" className="flex items-center gap-2 px-5 py-3 ml-4 text-[16px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg rounded relative overflow-hidden group whitespace-nowrap" style={{ backgroundColor: '#E60000', fontFamily: 'Rajdhani, sans-serif' }}>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2"><MessageSquare size={20} /><span>CONTACT US</span></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="p-2 transition-colors hover:text-[#007BFF]" style={{ color: '#000000' }}>
              <Menu size={36} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Full Screen Menu */}
      <div className={`fixed inset-0 z-[60] bg-white transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
             <div className="flex items-center gap-3">
                <img src={logoImage} alt="Logo" className="w-12 h-12 object-contain" />
                <span className="text-2xl font-bold tracking-tight text-[#E60000]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>MENU</span>
             </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:text-black transition-colors"><X size={36} strokeWidth={2} /></button>
          </div>

          <div className="flex-1 overflow-y-auto py-8 px-6">
            <div className="flex flex-col space-y-4">
              {navData.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-none pb-4">
                  {item.children ? (
                    <div>
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full flex justify-between items-center py-2 text-2xl font-bold text-black"
                        style={{ fontFamily: 'Rajdhani, sans-serif' }}
                      >
                        {item.name}
                        <ChevronDown size={24} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-[#007BFF]' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === item.name ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#007BFF] ml-2 my-2">
                          {item.children.map((subItem) => (
                            <Link 
                              key={subItem.name} 
                              to={subItem.path} 
                              onClick={() => setIsOpen(false)}
                              className="text-lg font-medium text-gray-600 hover:text-[#007BFF]"
                              style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link to={item.href} onClick={() => setIsOpen(false)} className="block py-2 text-2xl font-bold text-black hover:text-[#007BFF]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-4 mt-6 text-xl font-bold text-white rounded shadow-lg bg-[#E60000]"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                <MessageSquare size={24} />
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}