// import React from "react";
// import ShopImg from "./shop.png";


// const AboutPage = () => {
//   return (
//     <div>


//       <section className="bg-gray-100">
//         <div className="max-w-7xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <h1 className="text-5xl font-bold leading-tight">
//               About <span className="text-blue-600">NexCart</span>
//             </h1>

//             <p className="mt-6 text-gray-600 leading-8">
//               NexCart is your trusted online shopping destination offering
//               premium fashion, electronics, accessories and lifestyle products
//               with fast delivery and secure shopping.
//             </p>

           
//           </div>

//           <div>
//             <img
//               src={ShopImg}
//               alt="About"
//               className="rounded-3xl "
//             />
//           </div>

//         </div>
//       </section>

     

//       <section className="max-w-7xl mx-auto px-5 py-20">

//         <h2 className="text-4xl font-bold text-center mb-8">
//           Our Story
//         </h2>

//         <p className="text-gray-600 text-center max-w-4xl mx-auto leading-8">
//           Founded with a passion for making online shopping easier,
//           ShopVerse has grown into a trusted e-commerce platform.
//           We believe every customer deserves quality products,
//           affordable prices and exceptional service.
//         </p>

//       </section>

  

//       <section className="bg-gray-50 py-20">

//         <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-8">

//           <div className="bg-white shadow-lg rounded-2xl p-8">
//             <h2 className="text-3xl font-bold text-blue-600 mb-4">
//               Our Mission
//             </h2>

//             <p className="text-gray-600 leading-8">
//               To provide customers with high-quality products,
//               affordable prices and a seamless shopping experience
//               through innovation and excellent customer service.
//             </p>
//           </div>

//           <div className="bg-white shadow-lg rounded-2xl p-8">
//             <h2 className="text-3xl font-bold text-blue-600 mb-4">
//               Our Vision
//             </h2>

//             <p className="text-gray-600 leading-8">
//               To become one of the most trusted and customer-focused
//               online shopping destinations worldwide.
//             </p>
//           </div>

//         </div>

//       </section>

     

      

//       <section className="bg-blue-600 text-white py-20">

//         <div className="max-w-7xl mx-auto px-5">

//           <h2 className="text-4xl font-bold text-center mb-12">
//             Why Choose Us
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">

//             <div className="bg-white text-black rounded-2xl p-8 text-center">
//               <h3 className="text-4xl mb-4">🚚</h3>

//               <h4 className="text-xl font-bold">
//                 Fast Delivery
//               </h4>

//               <p className="mt-3 text-gray-600">
//                 Get your products delivered quickly and safely.
//               </p>
//             </div>

//             <div className="bg-white text-black rounded-2xl p-8 text-center">
//               <h3 className="text-4xl mb-4">🛍️</h3>

//               <h4 className="text-xl font-bold">
//                 Premium Products
//               </h4>

//               <p className="mt-3 text-gray-600">
//                 Carefully selected high-quality products from trusted brands.
//               </p>
//             </div>

//             <div className="bg-white text-black rounded-2xl p-8 text-center">
//               <h3 className="text-4xl mb-4">💬</h3>

//               <h4 className="text-xl font-bold">
//                 24/7 Support
//               </h4>

//               <p className="mt-3 text-gray-600">
//                 Our support team is always ready to help you.
//               </p>
//             </div>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// };

// export default AboutPage;

import React from "react";
import ShopImg from "./shop.png";

const AboutPage = () => {
  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen overflow-x-hidden selection:bg-blue-500 selection:text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 px-4 sm:px-6 lg:px-12">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className='px-4 py-1.5 bg-blue-500/10 border border-blue-500/25 text-blue-400 font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-sm mb-4'>
              About NexCart
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Your Trusted Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Shopping Destination</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              NexCart is your ultimate online shopping destination offering premium fashion, electronics, accessories, and lifestyle products with lightning-fast delivery and secure shopping experiences.
            </p>
          </div>

          <div className="lg:col-span-5 relative group flex justify-center">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-2xl p-4 rounded-[2.5rem] shadow-2xl border border-slate-800 w-full overflow-hidden">
              <img
                src={ShopImg}
                alt="About NexCart"
                className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Story</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            Founded with a passion for making online shopping seamless and reliable, ShopVerse (NexCart) has grown into a trusted e-commerce platform. We believe every customer deserves high-quality products, affordable pricing, and an exceptional standard of customer care.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">

          <div className="bg-slate-900/70 backdrop-blur-xl p-8 lg:p-10 rounded-3xl shadow-2xl border border-slate-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 font-bold text-xl mb-6 shadow-inner">
              🎯
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              To provide customers with high-quality products, affordable prices, and a completely frictionless shopping journey driven through constant innovation and unmatched support.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl p-8 lg:p-10 rounded-3xl shadow-2xl border border-slate-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-indigo-400 font-bold text-xl mb-6 shadow-inner">
              🚀
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              To become one of the most trusted, secure, and customer-obsessed online retail destinations worldwide, setting new benchmarks in the e-commerce industry.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-slate-900/60 to-slate-950 relative border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Us</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">Here is what sets us apart and makes us your preferred everyday store.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 text-center hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🚚
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Fast Delivery
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get your ordered products delivered quickly, securely, and right at your doorstep.
              </p>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 text-center hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🛍️
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Premium Products
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Carefully curated high-quality inventory sourced directly from trusted and verified brands.
              </p>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 text-center hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                💬
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                24/7 Support
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our dedicated support and customer care team is always active and ready to assist you.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;