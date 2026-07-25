// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Product from './Product'

// const ProductDetails = () => {
//   const [Products, setProducts] = useState([])
//   const { id } = useParams()

//   useEffect(() => {
//     axios
//       .get(`https://dummyjson.com/products/category/${id}`)
//       .then((response) => {
//         console.log(response)
//         setProducts(response.data.products)
//       })
//       .catch((error) => {
//         console.log(error)
//       })

//   }, [id])
//   return (
//     <div className='max-w-7xl mx-auto px-5 py-10'>
//       <h2 className='text-3xl font-bold capitalize mb-8'>
//         {id}
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {Products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-lg rounded-lg p-4"
//           >
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               className="w-full h-48 object-cover rounded-md"
//             />

//             <h2 className="mt-3 font-bold text-lg">
//               {product.title}
//             </h2>

//             <p className="text-gray-600">
//               ₹{product.price}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ProductDetails

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiStar, FiShoppingCart, FiEye, FiX, FiCheckCircle, FiTruck, FiShield } from "react-icons/fi";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null); // For individual product view
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // Quick View Modal State
  const [activeImg, setActiveImg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    
    // Check if the route is for a category list or a single product detail
    const isProductRoute = window.location.pathname.includes("/product/");

    if (isProductRoute) {
      // Fetch Single Product Details
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setSingleProduct(response.data);
          setActiveImg(response.data.thumbnail);
        })
        .catch((error) => {
          console.error("Single Product API Error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Fetch Products by Category
      axios
        .get(`https://dummyjson.com/products/category/${id}`)
        .then((response) => {
          setProducts(response.data.products || []);
        })
        .catch((error) => {
          console.error("Category API Error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  // Open Quick View Modal
  const handleQuickView = (product, e) => {
    e.stopPropagation();
    setSelectedProduct(product);
    setActiveImg(product.thumbnail);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // ==========================================
  // IF IT'S A SINGLE PRODUCT DETAILS PAGE VIEW
  // ==========================================
  if (window.location.pathname.includes("/product/")) {
    return (
      <div className="w-full bg-slate-950 min-h-screen py-6 sm:py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-indigo-500/50 transition-all cursor-pointer shadow-md text-xs font-bold w-max"
          >
            <FiArrowLeft className="text-base" />
            <span>Back to Products</span>
          </button>

          {loading ? (
            <div className="animate-pulse flex flex-col md:flex-row gap-8 bg-slate-900/60 p-6 sm:p-10 rounded-3xl border border-slate-800">
              <div className="w-full md:w-1/2 h-80 bg-slate-800 rounded-2xl" />
              <div className="w-full md:w-1/2 space-y-4">
                <div className="h-6 bg-slate-800 rounded w-1/4" />
                <div className="h-10 bg-slate-800 rounded w-3/4" />
                <div className="h-4 bg-slate-800 rounded w-1/2" />
                <div className="h-24 bg-slate-800 rounded w-full" />
              </div>
            </div>
          ) : singleProduct ? (
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 shadow-2xl">
              
              {/* LEFT COLUMN: IMAGES */}
              <div className="flex flex-col gap-4">
                <div className="w-full h-80 sm:h-96 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center">
                  <img
                    src={activeImg || singleProduct.thumbnail}
                    alt={singleProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {singleProduct.images && singleProduct.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {singleProduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImg(img)}
                        className={`w-16 h-16 rounded-xl border overflow-hidden shrink-0 transition-all cursor-pointer ${
                          activeImg === img ? "border-amber-400 scale-105" : "border-slate-800 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: DETAILED INFO */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-lg">
                      {singleProduct.brand || singleProduct.category}
                    </span>
                    <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-lg text-amber-400 font-bold text-xs">
                      <FiStar className="fill-amber-400" />
                      <span>{singleProduct.rating}</span>
                    </div>
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 capitalize">
                    {singleProduct.title}
                  </h1>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    {singleProduct.description}
                  </p>

                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-3xl font-black text-amber-400">
                      ₹{Math.round(singleProduct.price * 80)}
                    </span>
                    {singleProduct.discountPercentage && (
                      <span className="text-sm text-slate-500 line-through">
                        ₹{Math.round((singleProduct.price * 80 * 100) / (100 - singleProduct.discountPercentage))}
                      </span>
                    )}
                  </div>

                  {/* HIGHLIGHTS / BADGES */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-800 pt-6 mb-8 text-xs text-slate-300">
                    <div className="flex items-center gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <FiCheckCircle className="text-emerald-400 text-base" />
                      <span>In Stock ({singleProduct.stock} items left)</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <FiTruck className="text-indigo-400 text-base" />
                      <span>Free Delivery Available</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <FiShield className="text-amber-400 text-base" />
                      <span>{singleProduct.warrantyInformation || "1 Year Warranty"}</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <FiCheckCircle className="text-indigo-400 text-base" />
                      <span>{singleProduct.returnPolicy || "Easy 30-day returns"}</span>
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => alert("Product added to cart successfully!")}
                    className="w-full bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 py-3.5 rounded-xl text-sm font-bold transition-all active:scale-95 cursor-pointer text-center flex items-center justify-center gap-2 shadow-md"
                  >
                    <FiShoppingCart />
                    <span>Add to Cart</span>
                  </button>
                  <button 
                    onClick={() => alert("Proceeding to checkout...")}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-all active:scale-95 cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    <span>Buy Now</span>
                  </button>
                </div>

              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-900/40 border border-slate-800 rounded-3xl">
              <p className="text-slate-400 mb-4">Product not found.</p>
              <button onClick={() => navigate(-1)} className="px-6 py-2.5 bg-amber-400 text-slate-950 font-bold rounded-xl">Go Back</button>
            </div>
          )}

        </div>
      </div>
    );
  }

  // ==========================================
  // CATEGORY PRODUCTS LIST VIEW
  // ==========================================
  return (
    <div className="w-full bg-slate-950 py-6 sm:py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* HEADER SECTION (Hidden completely if products length is 0 and not loading) */}
        {!loading && products.length === 0 ? null : (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-indigo-500/50 transition-all duration-150 active:scale-95 cursor-pointer shadow-md"
              >
                <FiArrowLeft className="text-lg" />
              </button>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-indigo-400">
                  Collection Category
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white capitalize tracking-tight">
                  {id ? id.replace("-", " ") : "Products"}
                </h2>
              </div>
            </div>
            <div className="text-slate-400 text-xs sm:text-sm">
              Showing <span className="text-amber-400 font-bold">{products.length}</span> items
            </div>
          </div>
        )}

        {/* LOADING SKELETON */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 animate-pulse flex flex-col">
                <div className="w-full h-48 bg-slate-800 rounded-xl mb-4" />
                <div className="h-4 bg-slate-800 rounded w-1/3 mb-2" />
                <div className="h-5 bg-slate-800 rounded w-3/4 mb-3" />
                <div className="h-4 bg-slate-800/60 rounded w-1/2 mb-6" />
                <div className="h-10 bg-slate-800 rounded-xl w-full mt-auto" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          // If no products, render nothing or a compact message instead of a huge gap
          null
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 hover:border-indigo-500/50 rounded-2xl p-4 flex flex-col justify-between cursor-pointer overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)] active:scale-95 transition-all duration-150 ease-out"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />

                <div>
                  <div className="relative w-full h-48 bg-slate-950/50 rounded-xl overflow-hidden mb-4 border border-slate-800/60 flex items-center justify-center">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discountPercentage && (
                      <span className="absolute top-2.5 left-2.5 bg-amber-500/90 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow">
                        {Math.round(product.discountPercentage)}% OFF
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold line-clamp-1">
                      {product.brand || "Generic"}
                    </span>
                    <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md text-amber-400 font-bold">
                      <FiStar className="text-[10px] fill-amber-400" />
                      <span>{product.rating || "4.5"}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white capitalize group-hover:text-amber-400 transition-colors duration-150 line-clamp-1 mb-2">
                    {product.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-base font-black text-amber-400">
                      ₹{Math.round(product.price * 80)}
                    </span>
                    {product.discountPercentage && (
                      <span className="text-xs text-slate-500 line-through">
                        ₹{Math.round((product.price * 80 * 100) / (100 - product.discountPercentage))}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <button
                    onClick={(e) => handleQuickView(product, e)}
                    className="flex items-center justify-center gap-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
                  >
                    <FiEye className="text-xs text-indigo-400" />
                    <span>View</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`);
                    }}
                    className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 py-2 rounded-xl text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <FiShoppingCart className="text-xs" />
                    <span>Buy</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* QUICK VIEW POPUP MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div 
            className="relative bg-slate-900 border border-indigo-500/40 rounded-3xl max-w-3xl w-full p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] flex flex-col md:flex-row gap-6 overflow-y-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all cursor-pointer z-10"
            >
              <FiX className="text-lg" />
            </button>

            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <div className="w-full h-64 sm:h-72 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={activeImg || selectedProduct.thumbnail}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {selectedProduct.images && selectedProduct.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImg(img)}
                      className={`w-14 h-14 rounded-xl border overflow-hidden shrink-0 transition-all ${
                        activeImg === img ? "border-amber-400 scale-105" : "border-slate-800 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">
                    {selectedProduct.brand || selectedProduct.category}
                  </span>
                  <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md text-amber-400 font-bold text-xs">
                    <FiStar className="fill-amber-400" />
                    <span>{selectedProduct.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black mb-2">
                  {selectedProduct.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {selectedProduct.description}
                </p>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-2xl font-black text-amber-400">
                    ₹{Math.round(selectedProduct.price * 80)}
                  </span>
                  {selectedProduct.discountPercentage && (
                    <span className="text-sm text-slate-500 line-through">
                      ₹{Math.round((selectedProduct.price * 80 * 100) / (100 - selectedProduct.discountPercentage))}
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-6 border-t border-slate-800 pt-4 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-400" />
                    <span>In Stock ({selectedProduct.stock || 50} units available)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiTruck className="text-indigo-400" />
                    <span>Fast Delivery & Easy Returns</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    closeModal();
                    navigate(`/product/${selectedProduct.id}`);
                  }}
                  className="w-full bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 py-3 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer text-center"
                >
                  Full Details
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    navigate(`/product/${selectedProduct.id}`);
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 py-3 rounded-xl text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer text-center flex items-center justify-center gap-1.5"
                >
                  <FiShoppingCart />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;