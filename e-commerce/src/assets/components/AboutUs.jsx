// import React from 'react'
// import ShopImg from "./shop.png";
// import { useNavigate } from "react-router-dom";

// const AboutUs = () => {
//   const navigate = useNavigate();

//   return (
//     <div className='max-w-7xl mx-auto px-5 py-20'>
//       <div className='grid md:grid-cols-2 gap-12 items-center'>

//         <div>
//           <img src={ShopImg} alt="shop" className='w-full rounded-3xl pr-30 ' />
//         </div>

//         <div>
//           <p className='text-blue-600 font-semibold uppercase flex justify-center items-center'>
//             About Us
//           </p>

//           <h2 className='text-4xl font-bold mt-3'>
//             Your Trusted Online Shopping Destination
//           </h2>

//           <p className='mt-6 leading-8 text-gray-600'>
//             We offer a wide collection of fashion, electronic, footwear, accessories and lifestyleproduct at the best prices.
//             Our mission is to provide quality products, fast delivery and seamless shopping experience for every customer.
//           </p>

//           <div className='grid grid-cols-2 gap-5 mt-8 '>
//             <div className='bg-gray-100 p-5 rounded-xl '>
//               <h3 className='text-2xl font-bold text-blue-600'>10K+</h3>

//               <p className='text-gary-600 mt-2'>Happy Customer</p>
//             </div>

//             <div className='bg-gray-100 p-5 rounded-xl'>
//               <h3 className='text-2xl font-bold text-blue-600'>500+</h3>

//               <p className='text-gray-600 mt-2'>Premium Products</p>
//             </div>

//             <div className='bg-gray-100 p-5 rounded-xl'>
//               <h3 className='text-2xl font-bold text-blue-600'>100+</h3>

//               <p className='text-gray-600 mt-2'>Trusted Brands</p>
//             </div>

//             <div className='bg-gray-100 p-5 rounded-xl'>
//               <h3 className='text-2xl font-bold text-blue-600'>24/7</h3>

//               <p className='text-gray-600 mt-2'>Customer Support</p>
//             </div>

//             <div>
//               <button
//                 onClick={() => navigate("/about")}
//                 className="mt-10 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 cursor-pointer mb-10 active:scale-95">
//                 Explore More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AboutUs


import React, { useEffect, useRef } from 'react';
import ShopImg from "./shop.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Advanced Scroll Observer for Independent Left & Right Sliding Entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (leftRef.current) {
            leftRef.current.classList.add('opacity-100', 'translate-x-0');
            leftRef.current.classList.remove('opacity-0', '-translate-x-16');
          }
          if (rightRef.current) {
            rightRef.current.classList.add('opacity-100', 'translate-x-0');
            rightRef.current.classList.remove('opacity-0', 'translate-x-16');
          }
        }
      },
      { threshold: 0.15 }
    );

    const currentLeft = leftRef.current;
    if (currentLeft) observer.observe(currentLeft);

    return () => {
      if (currentLeft) observer.unobserve(currentLeft);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 px-4 sm:px-6 lg:px-12 text-gray-100 selection:bg-blue-500 selection:text-white">
      
      {/* E-Commerce Category Search Vibe Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>

          {/* Right Side / Content (Appears First on Mobile via order-1, and Right side on Desktop via lg:order-2 lg:col-span-7) */}
          <div 
            ref={rightRef}
            className='order-1 lg:order-2 lg:col-span-7 flex flex-col items-start opacity-0 translate-x-16 transition-all duration-1000 ease-out delay-300'
          >
            
            {/* Top Tag with Icon */}
            <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-inner'>
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              About Us
            </div>

            {/* Professional Heading */}
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-5 leading-[1.12] tracking-tight'>
              Your Trusted Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Shopping Destination</span>
            </h2>

            {/* Content Description */}
            <p className='mt-5 text-base sm:text-lg leading-relaxed text-gray-300 font-normal'>
              Explore a wide collection of fashion, electronics, footwear, accessories, and lifestyle products curated across various categories at the best prices. Our mission is to provide quality products, fast delivery, and a seamless shopping experience.
            </p>

            {/* Enhanced Stats Grid with Micro-Interactions */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-8'>
              
              <div className='bg-slate-900/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-800/80 text-center group/card hover:border-blue-500/60 hover:-translate-y-1.5 transition-all duration-300'>
                <h3 className='text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 group-hover/card:scale-105 transition-transform'>10K+</h3>
                <p className='text-xs sm:text-sm text-gray-400 mt-1.5 font-medium'>Happy Customers</p>
              </div>

              <div className='bg-slate-900/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-800/80 text-center group/card hover:border-blue-500/60 hover:-translate-y-1.5 transition-all duration-300'>
                <h3 className='text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 group-hover/card:scale-105 transition-transform'>500+</h3>
                <p className='text-xs sm:text-sm text-gray-400 mt-1.5 font-medium'>Products</p>
              </div>

              <div className='bg-slate-900/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-800/80 text-center group/card hover:border-blue-500/60 hover:-translate-y-1.5 transition-all duration-300'>
                <h3 className='text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 group-hover/card:scale-105 transition-transform'>100+</h3>
                <p className='text-xs sm:text-sm text-gray-400 mt-1.5 font-medium'>Brands</p>
              </div>

              <div className='bg-slate-900/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-800/80 text-center group/card hover:border-blue-500/60 hover:-translate-y-1.5 transition-all duration-300'>
                <h3 className='text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 group-hover/card:scale-105 transition-transform'>24/7</h3>
                <p className='text-xs sm:text-sm text-gray-400 mt-1.5 font-medium'>Support</p>
              </div>

            </div>

            {/* Action CTA Button */}
            <div className='mt-9 w-full sm:w-auto'>
              <button
                onClick={() => navigate("/about")}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-semibold text-base px-9 py-4 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:from-blue-500 hover:to-indigo-500 cursor-pointer active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Explore More</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>

          {/* Left Side / Image (Appears Second on Mobile via order-2, and Left side on Desktop via lg:order-1 lg:col-span-5) */}
          <div 
            ref={leftRef}
            className="order-2 lg:order-1 lg:col-span-5 relative group flex justify-center opacity-0 -translate-x-16 transition-all duration-1000 ease-out"
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute -inset-2.5 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-[2.5rem] blur-2xl opacity-25 group-hover:opacity-45 transition duration-700"></div>
            
            <div className="relative bg-slate-900/90 backdrop-blur-2xl p-4 sm:p-5 rounded-[2.5rem] shadow-2xl border border-slate-800/80 w-full overflow-hidden">
              <img 
                src={ShopImg} 
                alt="shop categories" 
                className='w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-[1.03]' 
              />
              
              {/* Floating Modern Trust Badge */}
              <div className="absolute bottom-8 left-8 bg-slate-900/90 backdrop-blur-xl px-4 py-3 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3.5">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full relative"></div>
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">100% Secure</p>
                  <p className="text-[10px] text-gray-400 font-medium">Verified E-Commerce Store</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;