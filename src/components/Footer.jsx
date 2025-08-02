import React from 'react';
import { ButtonPrimary } from './ButtonPrimary';

const Footer = () => {
  const sitemap = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Contact Us', href: '#footer' } // ← Scrolls to footer
  ];

  const socials = [
    { label: 'Email: leadorbit2@gmail.com', href: 'mailto:leadorbit2@gmail.com' }
  ];

  return (
    <footer
      id="footer" // ← ID added here
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      className="bg-black text-white py-10 px-5 sm:px-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-6">
            Let’s collaborate and create something amazing today!
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <p className="text-lg font-semibold mb-4 bg-orange-500 text-black rounded-md w-fit px-2 py-2 sm:text-xl sm:px-4 sm:py-2">
              Sitemap
            </p>
            <ul className="space-y-2">
              {sitemap.map(({ label, href }, key) => (
                <li key={key}>
                  <a href={href} className="hover:text-orange-400 transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4 bg-orange-500 text-black rounded-md w-fit px-2 py-2 sm:text-xl sm:px-4 sm:py-2">
              Socials
            </p>
            <ul className="space-y-2">
              {socials.map(({ label, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 border-t border-zinc-700 mt-10 pt-8 text-center">
          <a href="#" className="inline-block mb-4">
            <img src="/images/Lead.png" width={50} height={50} alt="Logo" className="mx-auto" />
          </a>
          <p className="text-xs text-zinc-400">
            &copy; 2025 <span className="font-semibold text-white text-xs">CodeWith@Hassan</span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
