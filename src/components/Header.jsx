import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';
import Login from '../pages/Login';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleMobileMenu = () => setMenuOpen(!menuOpen);
  const handleSignInClick = () => {
    setShowLoginModal(true);
    setMenuOpen(false);
  };
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'company' },
    { label: 'About Us', id: 'features' },
    { label: 'Services', id: 'resources' },
    { label: 'Blog', id: 'documentation' },
     { label: 'Team', id: 'team' },
     { label: 'Contact Us', id: 'footer' },
  ];

  return (
    <header data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine" className="flex justify-between items-center py-4 px-5 md:px-10 lg:px-20 text-white relative">
<h1
  onClick={() => scrollToSection('top')}
  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center cursor-pointer"
>
  <span className="group inline-block transition-transform duration-300 hover:scale-110 hover:text-blue-700 text-blue-600">
    Lead
  </span>{' '}
  <span className="group inline-block transition-transform duration-300 hover:scale-110 hover:text-orange-600 text-orange-500">
    Orbit
  </span>
</h1>


      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.id)}
            className="text-base tracking-wider transition-colors duration-300 hover:text-orange-300"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Desktop SignIn Button */}
      <button
        onClick={handleSignInClick}
        className="hidden md:block bg-orange-400 text-black py-2 px-5 rounded-lg font-medium shadow-lg hover:bg-orange-500 transition-all duration-300"
      >
        Sign In
      </button>

      {/* Mobile Toggle */}
      <button onClick={toggleMobileMenu} className="md:hidden text-4xl z-[999] relative">
        <i className={menuOpen ? 'bxr bx-x' : 'bx bx-menu-filter'}></i>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 h-screen bg-black bg-opacity-80 backdrop-blur-md transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40 md:hidden`}
      >
        <nav className="flex flex-col justify-center items-center gap-10 h-full text-lg font-medium">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="transition-colors duration-300 hover:text-orange-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleSignInClick}
            className="bg-orange-400 text-black py-2 px-6 rounded-lg font-semibold shadow hover:bg-orange-500 transition-all duration-300"
          >
            Sign In
          </button>
        </nav>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-sm max-h-[90vh] overflow-y-auto animate__animated animate__fadeInDown">
            {/* <button
              onClick={handleCloseLoginModal}
              className="absolute -top-2 right-20 text-white text-3xl font-bold leading-none z-10 bg-gray-800 rounded-bl-lg shadow-[0_0_15px_rgba(255,165,0,0.8)] border border-orange-700 hover:bg-gray-700 hover:text-orange-400 transition-all duration-300"
              aria-label="Close"
            >
              &times;
            </button> */}
                        <button
              onClick={handleCloseLoginModal}
              className="absolute -top-2 right-12 lg:right-20 md:10 text-white text-3xl font-bold leading-none z-10 bg-gray-800 rounded-bl-lg shadow-[0_0_15px_rgba(255,165,0,0.8)] border border-orange-700 hover:bg-gray-700 transition-all duration-300"
              aria-label="Close"
            >
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
