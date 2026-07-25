// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Link } from "react-router-dom";

// const ContactUs = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [message, setMessage] = useState("")
//   const emailSubmit = (e) => {
//     e.preventDefault();


//    if (!name || !email || !message) {
//     return alert("All fields are required");
// }

//     const templateParams = {
//       name: name,
//       email: email,
//       message: message
//     }

//     emailjs.send(
//       "service_qalx7fp",
//       "template_sprkr7t",
//       templateParams,
//       "JL3apQybFnPrJ1K3O"
//     )
//       .then(() => {
//         alert("Email sent sucessfully.........")
//         setName("")
//         setEmail("")
//         setMessage("")
//       })
//       .catch((error) => {
//         alert("Something went wrong ", error);
//       })
//   }
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-5">


//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold">Contact Us</h2>
//           <p className="text-gray-500 mt-2">
//             We'd love to hear from you. Send us a message anytime.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">


//           <div className="bg-gray-100 rounded-xl p-8 shadow-lg">
//             <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

//             <div className="mb-6">
//               <h4 className="font-semibold">📍 Address</h4>
//              <Link to="https://www.google.com/maps/place/Raipur,+Chhattisgarh/@21.2618855,81.5366714,12z/data=!3m1!4b1!4m6!3m5!1s0x3a28dda23be
//           28229:0x163ee1204ff9e240!8m2!3d21.2513844!4d81.6296413!16zL20vMDJ0NXM0?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D">
//               <p className="text-gray-600">Raipur, Chhattisgarh, India</p>
//              </Link>
//             </div>

//             <div className="mb-6">
//               <h4 className="font-semibold">📞 Phone</h4>
//               <Link to="https://wa.me/918305600571">
//               <p className="text-gray-600">+91 8305600571</p>
//               </Link>
//             </div>

//             <div>
//               <h4 className="font-semibold">✉️ Email</h4>
//              <Link to="https://mail.google.com/mail/u/0/#starred?compose=new">
//               <p className="text-gray-600">tomeshwarkumar85@gmail.com</p>
//              </Link>
//             </div>
//           </div>


//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <form onSubmit={emailSubmit}>
//               <div className="mb-5">
//                 <div className="block font-semibold mb-2">Full Name</div>
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   value={name}
//                   onChange={(e) => {
//                     setName(e.target.value)
//                   }}
//                   className="w-full border p-3 rounded"
//                 />
//               </div>



//               <div className="mb-5">
//                 <div className="block font-semibold mb-2">Email</div>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value)
//                   }}
//                   className="w-full border p-3 rounded"
//                 />
//               </div>

//               <div className="mb-5">
//                 <div className="block font-semibold mb-2">Message</div>
//                 <textarea
//                   rows="5"
//                   placeholder="Write your message..."
//                   value={message}
//                   onChange={(e) => {
//                     setMessage(e.target.value)
//                   }}
//                   className="w-full border p-3 rounded"
//                 ></textarea>
//               </div>


//               <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 cursor-pointer active:scale-95">
//                 Send Message
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Scroll Observer for Independent Left & Right Sliding Entry
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

  const emailSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return alert("All fields are required");
    }

    setLoading(true);

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_qalx7fp",
        "template_sprkr7t",
        templateParams,
        "JL3apQybFnPrJ1K3O"
      )
      .then(() => {
        alert("Email sent successfully.........");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Something went wrong ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 px-4 sm:px-6 lg:px-12 text-gray-100 selection:bg-blue-500 selection:text-white">
      
      {/* E-Commerce Category Search Vibe Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-inner inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">NexCart</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            We'd love to hear from you. Send us a message anytime and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Grid Container - Added items-stretch for identical column heights */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Side: Contact Information Cards */}
          <div 
            ref={leftRef}
            className="lg:col-span-5 bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-slate-800/80 flex flex-col justify-between opacity-0 -translate-x-16 transition-all duration-1000 ease-out"
          >
            <div>
              <h3 className="text-2xl font-black text-white border-b border-slate-800 pb-4 mb-6">
               Contact Information
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Have questions about our products, orders, or partnership opportunities? Reach out through any of the channels below, and our dedicated support team will get back to you promptly.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Our Address</h4>
                    <a
                      href="https://maps.google.com/?q=Raipur,Chhattisgarh,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors mt-1 block leading-relaxed"
                    >
                      Raipur, Chhattisgarh, India
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Phone / WhatsApp</h4>
                    <a
                      href="https://wa.me/918305600571"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors mt-1 block leading-relaxed"
                    >
                      +91 8305600571
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Email Address</h4>
                    <a
                      href="mailto:tomeshwarkumar85@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors mt-1 block leading-relaxed break-all"
                    >
                      tomeshwarkumar85@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Support Badge */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Support Available: Mon - Sat (9:00 AM - 7:00 PM)
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div 
            ref={rightRef}
            className="lg:col-span-7 bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800/80 flex flex-col justify-between opacity-0 translate-x-16 transition-all duration-1000 ease-out delay-300"
          >
            <form onSubmit={emailSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 text-white placeholder-gray-500 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 text-white placeholder-gray-500 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 text-white placeholder-gray-500 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-semibold text-base py-4 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:from-blue-500 hover:to-indigo-500 cursor-pointer active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 mt-6"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                {!loading && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;