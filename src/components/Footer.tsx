import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'; 
import logo from '../assets/logo.png'; 
 
const Footer: React.FC = () => { 
  return ( 
    <footer className="relative bg-gradient-to-r from-gray-100 via-gray-500  to-blue-900 text-white">
      {/* Premium overlay pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
      
      {/* Subtle blue accent line at top */}
      <div className="relative h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 z-10"></div>

      <div className="relative container mx-auto px-4 py-16 z-10"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
          {/* Company Info */} 
          <div> 
            <div className="flex items-center mb-6"> 
              <img  
                src={logo}  
                alt="OceanOil Logo"  
                className="w-36 h-auto"  
              /> 
            </div> 
            <p className="mb-6 text-gray-300 font-light leading-relaxed"> 
              Leading provider of offshore drilling services with a commitment to safety, 
              efficiency, and environmental responsibility. 
            </p> 
            <div className="flex space-x-5"> 
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300"> 
                <Facebook size={20} /> 
              </a> 
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300"> 
                <Twitter size={20} /> 
              </a> 
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300"> 
                <Linkedin size={20} /> 
              </a> 
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300"> 
                <Instagram size={20} /> 
              </a> 
            </div> 
          </div> 
 
          {/* Quick Links */} 
          <div> 
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">Quick Links</h3> 
            <ul className="space-y-3"> 
              {['Home', 'About Us', 'Services', 'Our Fleet', 'Careers', 'Contact'].map((item, idx) => ( 
                <li key={idx}> 
                  <Link  
                    to={`/${item.replace(/\s+/g, '').toLowerCase()}`}  
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center" 
                  > 
                    <span className="text-xs text-blue-500 mr-2">›</span>
                    {item} 
                  </Link> 
                </li> 
              ))} 
            </ul> 
          </div> 
 
          {/* Services */} 
          <div> 
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">Our Services</h3> 
            <ul className="space-y-3"> 
              {[ 
                'Drilling and Well Intervention', 
                'Production Drilling', 
                'MODU Rental', 
                'Hydraulic Workover', 
                'Snubbing Services', 
                'Plug & Abandonment' 
              ].map((service, idx) => ( 
                <li key={idx} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"> 
                  <span className="text-xs text-blue-500 mr-2">›</span>
                  {service} 
                </li> 
              ))} 
            </ul> 
          </div> 
 
          {/* Contact Info */} 
          <div> 
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">Contact Us</h3> 
            <ul className="space-y-5"> 
              
              <li className="flex items-center group"> 
                <div className="bg-gray-800 p-2 rounded mr-3 group-hover:bg-blue-900 transition-colors duration-300">
                  <Phone size={18} className="text-blue-400" /> 
                </div>
                <span className="text-gray-300">+971 54 306 0098 </span> 
              </li> 
              <li className="flex items-center group"> 
                <div className="bg-gray-800 p-2 rounded mr-3 group-hover:bg-blue-900 transition-colors duration-300">
                  <Mail size={18} className="text-blue-400" /> 
                </div>
                <span className="text-gray-300">hello@aieera.com</span> 
              </li> 
            </ul> 
          </div> 
        </div>
      </div> 
      <div className="relative text-gray-400 text-center text-sm py-4 z-10">
      
   <a href="https://aieera.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Copyright © 2025 Aieera Digital Marketing.All rights reserved</a>.
</div>

    </footer> 
  ); 
}; 
 
export default Footer;