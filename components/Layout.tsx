import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Layout: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden flex flex-col font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-neutral-800 py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-2xl font-extrabold tracking-tighter cursor-pointer z-50 mix-blend-difference"
            onClick={() => navigate('/')}
          >
            Yoet Studios
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-xs font-bold tracking-[0.2em] transition-colors duration-300 uppercase relative group ${
                    isActive ? 'text-white' : 'text-neutral-500 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span className={`absolute -bottom-2 left-0 h-[1px] bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </>
                )}
              </RouterNavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 flex items-center justify-center ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-8 text-center">
             {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className="text-2xl font-bold tracking-widest text-neutral-400 hover:text-white uppercase transition-colors"
              >
                {link.label}
              </RouterNavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-black py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-xl font-bold tracking-tighter mb-6 text-neutral-700">Yoet Studios</h2>
           <div className="flex justify-center space-x-8 text-neutral-500 text-sm mb-8">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">YouTube</a>
           </div>
           <p className="text-neutral-600 text-xs tracking-widest uppercase">
             © 2024 Yoet Studios. Todos los derechos reservados.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;