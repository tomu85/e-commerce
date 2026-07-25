import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FiSearch, 
  FiUser, 
  FiShoppingBag, 
  FiMenu, 
  FiX, 
  FiChevronRight,
  FiMail,
  FiLock,
  FiArrowRight
} from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Login form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [cartCount, setCartCount] = useState(3);
  const location = useLocation();
  const navigate = useNavigate();

  // Route Paths
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/category' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact Us', path: '/contactus' },
  ];

  const isActive = (path) => location.pathname === path;

  // Header Scroll Blur & Shadow Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body Scroll Lock for Modals / Mobile Drawer
  useEffect(() => {
    if (menuOpen || searchOpen || loginOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen, searchOpen, loginOpen]);

  // Close Drawers/Modals on Route Change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setLoginOpen(false);
  }, [location]);

  // Handle Search Submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  // Handle Email Login Submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending credentials...', { email, password });
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      alert(`Login Successful!`);
      setLoginOpen(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Login Failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ALWAYS BLUE BORDER & GLOW HEADER */}
      <header 
        className={`w-full sticky top-0 z-40 transition-all duration-300 border-b border-indigo-500/60 shadow-[0_4px_20px_rgba(99,102,241,0.2)] ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-md py-3' 
            : 'bg-slate-950 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* 1. BRAND LOGO */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:rotate-6 transition-transform duration-300">
                <FiShoppingBag className="text-lg sm:text-xl" />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
                NexCart<span className="text-indigo-500 font-bold text-2xl sm:text-3xl leading-none">.</span>
              </span>
            </Link>

            {/* 2. DESKTOP NAVIGATION LINKS */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-slate-900 p-1.5 rounded-full border border-slate-800">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-2 text-xs lg:text-sm tracking-wide rounded-full font-semibold transition-colors duration-200 ${
                      active
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* 3. DESKTOP RIGHT ACTION BUTTONS */}
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="w-10 h-10 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
              >
                <FiSearch className="text-lg" />
              </button>

              <Link
                to="/cart"
                aria-label="Cart"
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${
                  isActive('/cart')
                    ? 'bg-indigo-600 text-white shadow-indigo-600/30'
                    : 'bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <FiShoppingBag className="text-lg" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-slate-950">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setLoginOpen(true)}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all ml-1"
              >
                <FiUser className="text-base" />
                <span>Login</span>
              </button>
            </div>

            {/* 4. MOBILE CONTROLS */}
            <div className="flex items-center gap-2 md:hidden">
              <button 
                onClick={() => setSearchOpen(true)}
                aria-label="Search Mobile"
                className="w-9 h-9 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-300"
              >
                <FiSearch className="text-base" />
              </button>

              <Link
                to="/cart"
                aria-label="Cart Mobile"
                className={`relative w-9 h-9 rounded-full flex items-center justify-center ${
                  isActive('/cart')
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-900 border border-slate-800 text-slate-300'
                }`}
              >
                <FiShoppingBag className="text-base" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-md"
                aria-label="Toggle Menu"
              >
                {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </button>
            </div>

          </div>
        </div>

        {/* 5. MOBILE DRAWER MENU */}
        <div 
          className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div 
            className={`fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ${
              menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setMenuOpen(false)}
          />

          <div 
            className={`fixed top-0 right-0 w-4/5 max-w-sm bg-slate-950 border-l border-slate-800 h-full shadow-2xl flex flex-col justify-between z-10 p-6 transition-transform duration-300 ease-out ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <Link to="/" className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                    <FiShoppingBag className="text-lg" />
                  </div>
                  <span className="font-black text-lg text-white">
                    NexCart<span className="text-indigo-500">.</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-900 text-slate-400 flex items-center justify-center hover:text-white"
                >
                  <FiX className="text-lg" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        active
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                          : 'text-slate-300 hover:bg-slate-900'
                      }`}
                    >
                      <span>{link.name}</span>
                      <FiChevronRight className={`text-base ${active ? 'text-white' : 'text-slate-500'}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setLoginOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all"
              >
                <FiUser className="text-lg" />
                <span>Login / Register</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 6. SEARCH MODAL */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md transition-all">
          <div 
            className="fixed inset-0" 
            onClick={() => setSearchOpen(false)} 
          />
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 sm:p-6 z-10">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-semibold text-slate-200">Search Products</h3>
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <FiX className="text-xl" />
              </button>
            </div>
            
            <form onSubmit={handleSearchSubmit} className="mt-4 flex items-center gap-2">
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input
                  type="text"
                  placeholder="Type product name, category, or brand..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
              >
                <span>Search</span>
                <FiArrowRight />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 7. LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/80 backdrop-blur-md transition-all">
          <div 
            className="fixed inset-0" 
            onClick={() => setLoginOpen(false)} 
          />
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10">
            <button 
              onClick={() => setLoginOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <FiX className="text-xl" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mx-auto mb-3">
                <FiUser className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Welcome Back</h3>
              <p className="text-xs text-slate-400 mt-1">Login to access your orders & account</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all disabled:opacity-50 mt-2"
              >
                {isSubmitting ? 'Logging in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;