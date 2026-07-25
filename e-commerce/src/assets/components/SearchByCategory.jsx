// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import catagoryImage from "../data/categoryImage";
// import {  Navigate, useNavigate } from "react-router-dom";


// const SearchByCategory = () => {

//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate()
//   useEffect(() => {
//     console.log("useEffect called")



//     axios
//       .get(`https://dummyjson.com/products/categories`)
//       .then((Response) => {
//         console.log("API Response:", Response.data);
//         setCategories(Response.data);
//       })
//       .catch((error) => {
//         console.log("API error:", error);
//       });
//   }, []);

//   const colors = [
//     "bg-amber-100",
//     "bg-red-100",
//     "bg-yellow-100",
//     "bg-green-100",
//     "bg-pink-100",
//     "bg-blue-100",
//     "bg-purple-100",
//     "bg-orange-100",
//     "bg-cyan-100",
//   ];



//   const randomColour = colors[Math.floor(Math.random() * colors.length)]
//   console.log("Random colour index no is", randomColour)


//   if (!categories) {
//     return <h1 className="text-center text-6xl">Loading.........</h1>
//   }


//   return (
//     <div className="max-w-7xl mx-auto px-5 py-10">


//       <h1 className="text-3xl font-bold">Search By Category</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
//         {categories.map((data, index) => {
//           const category = catagoryImage.find(
//             (item) => item.slug === data.slug
//           );

//           return (
//             <div
//               key={data.slug}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-3 active:-translate-y-1 active:scale-95 transition-all duration-300 ease-in-out p-6 cursor-pointer">

//               <div
//                 className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${colors[index % colors.length]
//                   }`}
//               >
//                 <img
//                   src={category?.img}
//                   alt={data.name}
//                   className="w-16 h-16 rounded-full object-cover"
//                 />
//               </div>


//               <h2 className="text-2xl font-semibold mt-6 text-gray-800">
//                 {data.name}
//               </h2>


//               <p className="text-gray-500 text-sm mt-2">
//                 Explore premium quality products in this category.
//               </p>

           
            
//               <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
//               onClick={()=> navigate(`/category/${category.slug}`)}>
//                 Explore Category →
//               </button>
       
//             </div>
//           );
//         })}
//       </div>

//     </div>



//   );
// };

// export default SearchByCategory;


import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import catagoryImage from "../data/categoryImage";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiPackage } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

const SearchByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  // Smooth Animation Trigger Handler
  const triggerAnimation = () => {
    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  };

  // API Fetching for Categories
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          setCategories([]);
        }
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // 1. SCROLL OBSERVER
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation();
        } else {
          setLoaded(false);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 2. TAB SWITCH LISTENER
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        triggerAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const circleGradients = [
    "from-indigo-500/20 to-violet-500/10 text-indigo-400 border-indigo-500/30",
    "from-violet-500/20 to-fuchsia-500/10 text-violet-400 border-violet-500/30",
    "from-blue-500/20 to-cyan-500/10 text-cyan-400 border-cyan-500/30",
    "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30",
    "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
    "from-pink-500/20 to-rose-500/10 text-rose-400 border-rose-500/30",
  ];

  // Helper function to safely get Image URL
  const getCategoryImage = (slug) => {
    if (!slug) return null;
    const cleanSlug = String(slug).toLowerCase().trim();

    if (Array.isArray(catagoryImage)) {
      const match = catagoryImage.find(
        (item) => String(item?.slug).toLowerCase().trim() === cleanSlug
      );
      return match?.img || match?.image || null;
    }

    if (typeof catagoryImage === "object" && catagoryImage !== null) {
      return catagoryImage[cleanSlug] || null;
    }

    return null;
  };

  return (
    <section ref={sectionRef} className="w-full bg-slate-950 py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* HERO SECTION CONTAINER PATTERN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* OUTER MAIN CONTAINER WITH BOTTOM SLIDE ANIMATION */}
        <div
          className={`relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-indigo-500/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 overflow-hidden shadow-[0_4px_30px_rgba(99,102,241,0.15)] transition-all duration-[1000ms] ease-out ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-16 sm:translate-y-24 opacity-0"
          }`}
        >
          
          {/* BACKGROUND GLOW ACCENTS */}
          <div className="absolute -top-28 -left-28 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -right-28 w-60 sm:w-80 h-60 sm:h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* HEADING SECTION WITH HERO STYLE BIDIRECTIONAL ANIMATION */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between mb-8 sm:mb-12 gap-4 pb-6 border-b border-slate-800/80 overflow-hidden">
            
            {/* LEFT CONTENT - SLIDES IN FROM LEFT */}
            <div
              className={`max-w-xl transition-all duration-[1000ms] ease-out delay-100 ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 sm:-translate-x-20 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full mb-3">
                <HiSparkles className="text-indigo-400 text-sm" />
                <span className="text-[11px] sm:text-xs font-semibold text-indigo-300 tracking-wider uppercase">
                  Curated Collections
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Search By <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-indigo-400">Category</span>
              </h2>
            </div>

            {/* RIGHT CONTENT - SLIDES IN FROM RIGHT (CONTENT PARAGRAPH RESTORED) */}
            <p
              className={`text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed md:text-right transition-all duration-[1000ms] ease-out delay-200 ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 sm:translate-x-20 opacity-0"
              }`}
            >
              Explore our wide variety of premium categories tailored just for your lifestyle.
            </p>
          </div>

          {/* SKELETON LOADING STATE */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 animate-pulse flex flex-col items-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-2xl mb-4" />
                  <div className="h-5 bg-slate-800 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-slate-800/60 rounded w-5/6 mb-6" />
                  <div className="h-10 bg-slate-800 rounded-xl w-full mt-auto" />
                </div>
              ))}
            </div>
          ) : categories.length === 0 ? (
            <div className="text-center py-10 relative z-10">
              <p className="text-slate-400 text-sm sm:text-base">No categories found.</p>
            </div>
          ) : (
            /* CATEGORIES GRID WITH CARDS SLIDING IN FROM BOTTOM */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {categories.map((data, index) => {
                const targetSlug =
                  typeof data === "object" && data !== null
                    ? data.slug || data.name
                    : data;

                const displayName =
                  typeof data === "object" && data !== null
                    ? data.name || data.slug
                    : data;

                const imgUrl = getCategoryImage(targetSlug);
                const gradStyle = circleGradients[index % circleGradients.length];

                return (
                  <div
                    key={targetSlug || index}
                    onClick={() => navigate(`/category/${targetSlug}`)}
                    className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 hover:border-indigo-500/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)] active:scale-95 transition-all duration-150 ease-out"
                  >
                    {/* CARD HOVER LIGHT EFFECT */}
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />

                    <div>
                      {/* ICON CONTAINER */}
                      <div className="relative mx-auto mb-4 sm:mb-5 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br border flex items-center justify-center shadow-lg transition-transform duration-150 group-hover:scale-110 group-hover:rotate-3 ${gradStyle}`}
                        >
                          {imgUrl ? (
                            <img
                              src={imgUrl}
                              alt={displayName}
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover drop-shadow-md"
                            />
                          ) : (
                            <FiPackage className="text-xl sm:text-2xl text-indigo-400" />
                          )}
                        </div>
                      </div>

                      {/* TEXT CONTENT */}
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white capitalize group-hover:text-amber-400 transition-colors duration-150 line-clamp-1">
                          {displayName}
                        </h3>
                        <p className="text-slate-400 text-xs mt-1.5 sm:mt-2 leading-relaxed line-clamp-2">
                          Discover top deals and high-quality products in {displayName}.
                        </p>
                      </div>
                    </div>

                    {/* EXPLORE BUTTON */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/category/${targetSlug}`);
                      }}
                      className="mt-5 sm:mt-6 w-full flex items-center justify-center gap-2 bg-slate-950 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-400 text-slate-300 group-hover:text-slate-950 border border-slate-800 group-hover:border-amber-400 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs font-bold shadow-md transition-all duration-150 active:scale-95 cursor-pointer"
                    >
                      <span>Explore Category</span>
                      <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-150" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default SearchByCategory;