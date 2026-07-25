// import React from "react";
// import { FaFacebook } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 mt-20">
//       <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

       
//         <div>
//           <h2 className="text-4xl font-bold mb-4">NexCart</h2>

//           <p className="text-gray-600 leading-8">
//             NexCart is your trusted online shopping destination for
//             electronics, fashion, shoes, watches and much more.
//           </p>

//           <div className="flex gap-4 mt-6">
//             <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer hover:bg-gray-500">

//               <FaFacebook />
//             </div>

//            <Link to="https://github.com/tomu85">
//             <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer hover:bg-gray-500">
//              <FaGithub />
//             </div>
//            </Link>

//             <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer hover:bg-gray-500">
//               <FaTwitter />
//             </div>

//            <Link to="https://www.linkedin.com/feed/">
//             <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer hover:bg-gray-500">
//               <FaLinkedin />
//             </div>
//            </Link>
//           </div>
//         </div>

       
//         <div>
//           <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>

//           <ul className="space-y-3 text-gray-600">
//             <li>
//               <Link to="/">Home</Link>
//             </li>

//             <li>
//               <Link to="/Category">Category</Link>
//             </li>

//             <li>
//               <Link to="/Products">Products</Link>
//             </li>

//             <li>
//               <Link to="/About us">About Us</Link>
//             </li>

//             <li>
//               <Link to="/Contact us">Contact Us</Link>
//             </li>
//           </ul>
//         </div>

        
//         <div>
//           <h3 className="text-2xl font-semibold mb-4">Categories</h3>

//           <ul className="space-y-3 text-gray-600">
//             <li>Electronics</li>
//             <li>Fashion</li>
//             <li>Shoes</li>
//             <li>Watches</li>
//             <li>Furniture</li>
//           </ul>
//         </div>

        
//         <div>
//           <h3 className="text-2xl font-semibold mb-4">Contact</h3>

//           <div className="space-y-4 text-gray-600">
//               <Link to="https://wa.me/918305600571">
//             <p>📞 +91 8305600571</p>
//               </Link>

//             <p className="mt-4">✉️ tomeshwarkumar85@gmail.com</p>
         

//           <Link to="https://www.google.com/maps/place/Raipur,+Chhattisgarh/@21.2618855,81.5366714,12z/data=!3m1!4b1!4m6!3m5!1s0x3a28dda23be
//           28229:0x163ee1204ff9e240!8m2!3d21.2513844!4d81.6296413!16zL20vMDJ0NXM0?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D">
//             <p>📍 Raipur, Chhattisgarh, India</p>
//           </Link>
//           </div>
//         </div>

//       </div>

//       <hr className="border-gray-300" />

//       <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">

//         <p>© 2026 NexCart. All Rights Reserved.</p>

//         <div className="flex gap-8 mt-3 md:mt-0">
//           <p className="cursor-pointer">Privacy Policy</p>
//           <p className="cursor-pointer">Terms & Conditions</p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-gray-300 pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden border-t border-slate-800/80">
      
      {/* E-Commerce Category Search Vibe Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-15 pointer-events-none"></div>
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 sm:pb-16">

          {/* Col 1: Brand Info & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Nex<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Cart</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              NexCart is your trusted online shopping destination for premium electronics, fashion, footwear, watches, and much more with secure checkout and fast delivery.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm"
              >
                <FaFacebook size={18} />
              </a>

              <a 
                href="https://github.com/tomu85" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm"
              >
                <FaGithub size={18} />
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm"
              >
                <FaTwitter size={18} />
              </a>

              <a 
                href="https://www.linkedin.com/feed/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide border-b border-slate-800/80 pb-3">
              Quick Links
            </h3>

            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-blue-500">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/Category" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-blue-500">›</span> Category
                </Link>
              </li>
              <li>
                <Link to="/Products" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-blue-500">›</span> Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-blue-500">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-blue-500">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories (Updated with new items & dynamic routing paths) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide border-b border-slate-800/80 pb-3">
              Categories
            </h3>

            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link to="/Category/beauty" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-indigo-500">•</span> Beauty
                </Link>
              </li>
              <li>
                <Link to="/Category/fragrances" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-indigo-500">•</span> Fragrances
                </Link>
              </li>
              <li>
                <Link to="/Category/furniture" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-indigo-500">•</span> Furniture
                </Link>
              </li>
              <li>
                <Link to="/Category/groceries" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-indigo-500">•</span> Groceries
                </Link>
              </li>
              <li>
                <Link to="/Category/home-decoration" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-indigo-500">•</span> Home Decoration
                </Link>
              </li>
              <li>
                <Link to="/Category/kitchen-accessories" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-indigo-500">•</span> Kitchen Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide border-b border-slate-800/80 pb-3">
              Get in Touch
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <a 
                href="https://wa.me/918305600571" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-blue-400 transition-colors group"
              >
                <span className="text-base group-hover:scale-110 transition-transform">📞</span>
                <span>+91 8305600571</span>
              </a>

              <a 
                href="mailto:tomeshwarkumar85@gmail.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-blue-400 transition-colors group break-all"
              >
                <span className="text-base group-hover:scale-110 transition-transform">✉️</span>
                <span>tomeshwarkumar85@gmail.com</span>
              </a>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=Raipur,+Chhattisgarh,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-blue-400 transition-colors group"
              >
                <span className="text-base group-hover:scale-110 transition-transform">📍</span>
                <span>Raipur, Chhattisgarh, India</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm text-center sm:text-left gap-4">
          <p>© 2026 NexCart. All Rights Reserved.</p>

          <div className="flex gap-6 items-center justify-center">
            <span className="hover:text-blue-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-blue-400 transition-colors cursor-pointer">Terms & Conditions</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;