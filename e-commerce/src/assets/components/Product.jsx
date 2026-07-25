// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const Product = () => {
//     const [product, setProduct] = useState([])
//     useEffect(() => {


//         axios
//             .get("https://dummyjson.com/products")
//             .then((response) => {
//                 setProduct(response.data.products)
//                 console.log("Api response for product", response.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, [])

//     return (
//         <div className='max-w-7xl mx-auto px-5 py-10'>
//             <div className='mb-10'>
//                 <h2 className='text-3xl font-bold'>
//                     Featured Products
//                 </h2>

//                 <p className='text-gray-500 mt-2'>
//                     Explore our latest collection.
//                 </p>

//             </div>


//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
//                 {product.map((data) => (
//                     <div
//                         key={data.id}
//                         className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition overflow-hidden  hover:-translate-y-3 active:-translate-y-1 active:scale-95"
//                     >
//                         <div className="h-60 bg-gray-100 flex items-center justify-center">
//                             <img
//                                 src={data.thumbnail}
//                                 alt={data.title}
//                                 className="h-44 object-contain"
//                             />
//                         </div>

//                         <div className="p-4">
//                             <p className="text-blue-600 text-sm font-semibold">
//                                 {data.category}
//                             </p>

//                             <h2 className="text-lg font-bold mt-2">
//                                 {data.title}
//                             </h2>

//                             <div className="flex items-center gap-3 mt-3">
//                                 <span className="bg-green-600 text-white text-xs px-2 py-1 rounded cursor-pointer">
//                                     ⭐ {data.rating}
//                                 </span>

//                                 <span className="text-gray-500 text-sm">
//                                     In Stock : {data.stock}
//                                 </span>
//                             </div>

//                             <div className="flex justify-between items-center mt-4">
//                                 <div>
//                                     <h3 className="text-3xl font-bold">
//                                         ₹ {data.price}
//                                     </h3>

//                                     <p className="text-gray-400 line-through text-sm">
//                                         ₹ {Math.round(data.price / (1 - data.discountPercentage / 100))}
//                                     </p>
//                                 </div>

//                                 <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full">
//                                     {data.discountPercentage}% OFF
//                                 </span>
//                             </div>

//                             <div className="flex gap-3 mt-5">
//                                 <button className="flex-1 bg-black text-white py-2 rounded-lg cursor-pointer">
//                                     Add To Cart
//                                 </button>

//                                 <button className="flex-1 bg-green-700 text-white py-2 rounded-lg cursor-pointer">
//                                     Buy Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>

//     )
// }

// export default Product


import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FiShoppingCart, FiZap, FiStar, FiPackage, FiFilter } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Smooth Animation Trigger Handler
  const triggerAnimation = () => {
    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  };

  // Fetch Categories List
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCategories(res.data);
        }
      })
      .catch((err) => console.error("Categories Fetch Error:", err));
  }, []);

  // Fetch Products based on selected Category
  useEffect(() => {
    setLoading(true);
    const url =
      selectedCategory === "all"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${selectedCategory}`;

    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data?.products)) {
          setProducts(response.data.products);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
      })
      .finally(() => {
        setLoading(false);
        triggerAnimation();
      });
  }, [selectedCategory]);

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

  return (
    <section ref={sectionRef} className="w-full bg-slate-950 py-6 sm:py-12 lg:py-16 overflow-hidden">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        
        {/* MAIN OUTER CARD CONTAINER WITH GLOW */}
        <div
          className={`relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-indigo-500/40 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 overflow-hidden shadow-[0_4px_30px_rgba(99,102,241,0.15)] transition-all duration-[800ms] ease-out ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-12 sm:translate-y-24 opacity-0"
          }`}
        >
          {/* BACKGROUND GLOW ACCENTS */}
          <div className="absolute -top-28 -right-28 w-48 sm:w-80 h-48 sm:h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-28 w-48 sm:w-80 h-48 sm:h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* HEADER SECTION */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between mb-6 sm:mb-12 gap-4 pb-5 sm:pb-6 border-b border-slate-800/80">
            {/* LEFT HEADER CONTENT */}
            <div
              className={`w-full md:max-w-xl transition-all duration-[800ms] ease-out delay-100 ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 sm:-translate-x-20 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-indigo-600/10 border border-indigo-500/20 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full mb-2.5 sm:mb-3">
                <HiSparkles className="text-indigo-400 text-xs sm:text-sm" />
                <span className="text-[10px] sm:text-xs font-semibold text-indigo-300 tracking-wider uppercase">
                  Handpicked Items
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-indigo-400">Products</span>
              </h2>
            </div>

            {/* RIGHT HEADER / CATEGORY FILTER DROPDOWN */}
            <div
              className={`w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 transition-all duration-[800ms] ease-out delay-200 ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 sm:translate-x-20 opacity-0"
              }`}
            >
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-indigo-400">
                  <FiFilter className="text-sm" />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-slate-900/90 border border-indigo-500/30 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 focus:outline-none focus:border-indigo-400 transition-colors cursor-pointer capitalize appearance-none"
                >
                  <option value="all" className="bg-slate-900 text-slate-200">All Products</option>
                  {categories.map((cat) => {
                    const slug = typeof cat === "object" ? cat.slug : cat;
                    const name = typeof cat === "object" ? cat.name : cat;
                    return (
                      <option key={slug} value={slug} className="bg-slate-900 text-slate-200">
                        {name}
                      </option>
                    );
                  })}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* SKELETON LOADING STATE */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 animate-pulse flex flex-col"
                >
                  <div className="w-full h-44 sm:h-48 bg-slate-800 rounded-xl mb-4" />
                  <div className="h-4 bg-slate-800 rounded w-1/3 mb-2" />
                  <div className="h-6 bg-slate-800 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-slate-800/60 rounded w-1/2 mb-4" />
                  <div className="h-8 bg-slate-800 rounded-lg w-full mb-4" />
                  <div className="h-10 bg-slate-800 rounded-xl w-full mt-auto" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12 relative z-10">
              <p className="text-slate-400 text-sm sm:text-base">No products found for this category.</p>
            </div>
          ) : (
            /* PRODUCTS GRID */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {products.map((item) => {
                const originalPrice = Math.round(
                  item.price / (1 - item.discountPercentage / 100)
                );

                return (
                  <div
                    key={item.id}
                    className="group/card relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 hover:border-indigo-500/50 rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between cursor-pointer overflow-hidden hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)] transition-all duration-150 ease-out"
                  >
                    {/* LIGHT HOVER OVERLAY FOR CARD BODY */}
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-150 pointer-events-none" />

                    {/* CARD CONTENT */}
                    <div>
                      {/* IMAGE CONTAINER WITH DISCOUNT BADGE */}
                      <div className="relative w-full h-44 sm:h-52 bg-slate-950/60 rounded-xl overflow-hidden flex items-center justify-center p-3 sm:p-4 border border-slate-800/60 group-hover/card:border-indigo-500/30 transition-colors">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain group-hover/card:scale-105 transition-transform duration-150 drop-shadow-md"
                        />

                        {/* DISCOUNT TAG */}
                        {item.discountPercentage > 0 && (
                          <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] sm:text-xs font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-lg border border-rose-400/30">
                            {Math.round(item.discountPercentage)}% OFF
                          </span>
                        )}
                      </div>

                      {/* CARD BODY CONTENT */}
                      <div className="mt-3.5 sm:mt-4">
                        {/* CATEGORY NAME */}
                        <span className="text-[10px] sm:text-[11px] font-bold text-indigo-400 tracking-wider uppercase bg-indigo-500/10 px-2 sm:px-2.5 py-0.5 rounded-md border border-indigo-500/20 capitalize inline-block line-clamp-1 max-w-full">
                          {item.category}
                        </span>

                        {/* PRODUCT TITLE */}
                        <h3 className="text-sm sm:text-base font-bold text-white mt-1.5 sm:mt-2 group-hover/card:text-amber-400 transition-colors line-clamp-1">
                          {item.title}
                        </h3>

                        {/* RATING & STOCK STATUS */}
                        <div className="flex items-center justify-between gap-2 mt-2">
                          <div className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-lg">
                            <FiStar className="fill-amber-400 text-[10px] sm:text-xs" />
                            <span>{item.rating}</span>
                          </div>

                          <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-slate-400">
                            <FiPackage className="text-slate-500" />
                            <span>Stock: <strong className="text-slate-300">{item.stock}</strong></span>
                          </div>
                        </div>

                        {/* PRICING SECTION */}
                        <div className="mt-3 sm:mt-3.5 pt-2.5 sm:pt-3 border-t border-slate-800/80 flex items-baseline gap-2">
                          <span className="text-lg sm:text-2xl font-black text-white">
                            ₹ {item.price}
                          </span>
                          {item.discountPercentage > 0 && (
                            <span className="text-[11px] sm:text-xs text-slate-500 line-through">
                              ₹ {originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* BUTTON ACTIONS */}
                    <div className="grid grid-cols-2 gap-2 mt-4 sm:mt-5 relative z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add your cart logic here
                        }}
                        className="group/btn flex items-center justify-center gap-1 bg-slate-950 hover:bg-emerald-600 text-slate-200 hover:text-white border border-slate-800 hover:border-emerald-500 py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-150 hover:scale-[1.03] active:scale-95 cursor-pointer shadow-sm hover:shadow-emerald-500/25"
                      >
                        <FiShoppingCart className="text-emerald-400 group-hover/btn:text-white text-xs transition-colors shrink-0" />
                        <span className="truncate">Cart</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add your buy logic here
                        }}
                        className="flex items-center justify-center gap-1 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl text-[11px] sm:text-xs shadow-md shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-150 hover:scale-[1.03] active:scale-95 cursor-pointer"
                      >
                        <FiZap className="text-xs fill-slate-950 shrink-0" />
                        <span className="truncate">Buy Now</span>
                      </button>
                    </div>
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

export default Product;