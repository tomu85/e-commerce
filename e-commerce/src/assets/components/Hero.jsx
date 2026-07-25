// import React from "react";
// import ShoesImg from "./shoes.png";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="bg-slate-900 rounded-3xl mt-10 flex flex-col-reverse lg:flex-row items-center justify-between h-auto lg:h-[380px] p sm:px-8 lg:px-12 py-6 lg:py-0 shadow-lg overflow-hidden">

        
//         <div className="w-full lg:w-1/2 text-center lg:text-left pl-10">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
//             Curated Goods.
//             <br />
//             Timeless Design.
//           </h1>

//           <p className="text-gray-300 mt-3 max-w-md mx-auto lg:mx-0">
//             Discover premium quality products with modern design and
//             affordable prices.
//           </p>

//          <Link to="/Products">
//           <button className="mt-5 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition cursor-pointer">
//             Shop Now
//           </button>
//          </Link>
//         </div>

       
//         <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
//           <img
//             src={ShoesImg}
//             alt="Shoes"
//             className="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 object-contain"
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect, useRef, useState } from "react";
import ShoesImg from "./shoes.png";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiArrowRight, FiShield, FiTruck } from "react-icons/fi";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);

  // Smooth Re-trigger Function with 300ms gentle pause
  const triggerAnimation = () => {
    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  };

  useEffect(() => {
    // 1. SCROLL OBSERVER: Jab bhi Hero section screen par visible hoga/aayega
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation();
        } else {
          // Screen se bahar jate hi state reset kar do taaki wapas aane par re-play ho sake
          setLoaded(false);
        }
      },
      { threshold: 0.25 } // Jab Hero section 25% screen par aayega tab trigger hoga
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // 2. TAB SWITCH LISTENER: Jab dusre tab se wapas is tab par aao
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        triggerAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    /* OUTER WRAPPER WITH REF */
    <section ref={heroRef} className="w-full bg-slate-950 py-4 sm:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN CONTAINER WITH FIXED BLUE BORDER AND GLOW */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-indigo-500/60 rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_4px_25px_rgba(99,102,241,0.2)]">
          
          {/* BACKGROUND GLOW ACCENTS */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* FLEX CONTAINER */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* LEFT CONTENT AREA: Slow & Smooth (2.5s) Slide from Left */}
            <div
              className={`w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start transition-all duration-[2500ms] ease-out ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-32 sm:-translate-x-48 opacity-0"
              }`}
            >
              
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full mb-4 sm:mb-6 shadow-inner">
                <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                  New Summer Collection '26
                </span>
              </div>

              {/* MAIN HEADING */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Curated Goods. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-amber-300">
                  Timeless Design.
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-slate-400 mt-4 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed">
                Discover premium quality products crafted with perfection, modern style, and unmatched comfort for everyday life.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link to="/products" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-indigo-600/25 active:scale-95 transition-all duration-300 group cursor-pointer">
                    <FiShoppingBag className="text-lg group-hover:-translate-y-0.5 transition-transform" />
                    <span>Shop Now</span>
                    <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <Link to="/aboutus" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 px-6 py-3.5 rounded-2xl font-semibold text-sm active:scale-95 transition-all duration-300 cursor-pointer">
                    Explore Story
                  </button>
                </Link>
              </div>

              {/* QUICK FEATURES FOOTER */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <FiTruck className="text-indigo-400 text-base" />
                  <span>Express Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiShield className="text-indigo-400 text-base" />
                  <span>100% Original</span>
                </div>
              </div>

            </div>

            {/* RIGHT IMAGE AREA: Slow & Smooth (2.5s) Slide from Right */}
            <div
              className={`w-full lg:w-1/2 flex justify-center items-center relative py-4 lg:py-0 transition-all duration-[2500ms] ease-out delay-150 ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-32 sm:translate-x-48 opacity-0"
              }`}
            >
              
              {/* FLOATING PRODUCT BACKDROP GLOW */}
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-tr from-indigo-600/20 to-violet-500/20 rounded-full blur-2xl" />

              {/* SHOE IMAGE WITH FLOAT EFFECT */}
              <div className="relative group">
                <img
                  src={ShoesImg}
                  alt="Shoes"
                  className="w-56 sm:w-72 md:w-80 lg:w-96 xl:w-[420px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500 ease-out animate-[bounce_4s_infinite]"
                />
                
                {/* PRICE TAG BADGE ON IMAGE */}
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Starting at</span>
                  <span className="text-sm sm:text-base font-black text-indigo-400">$129</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;