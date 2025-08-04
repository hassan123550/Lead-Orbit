import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-4 sm:px-8 lg:px-24 pt-10 bg-black text-white overflow-hidden">

      {/* TEXT SECTION */}
      <div
        data-aos="fade-right"
        className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 space-y-6 px-2 sm:px-4"
      >
        {/* Badge */}
        <div className="mx-auto lg:mx-0 w-fit bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-md shadow-[0_0_20px_#e99b63] px-4 py-1">
          <div className="flex items-center gap-2 text-white text-sm font-medium">
            <i className="bx bx-diamond-alt text-lg"></i>
            Introducing
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide px-4 sm:px-0">
          Boost Your Business
          with Pay-Per-Call Marketing
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-[95%] sm:max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
          Maximize revenue with high-quality leads that convert. Connect with real customers through targeted calls and scale your business effectively.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start mt-6">
          <Link
            to="/documentation-page"
            className="border border-[#3a3a3a] text-white py-3 px-8 rounded-md text-sm sm:text-base font-semibold tracking-wide hover:bg-[#1a1a1a] transition-all duration-300 flex items-center gap-2"
          >
            Publisher
            <i className="bx bx-link-external"></i>
          </Link>
          <Link
            to="/get-started"
            className="bg-gray-300 text-black hover:text-white py-3 px-8 rounded-md text-sm sm:text-base font-semibold tracking-wide hover:bg-[#1a1a1a] transition-all duration-300 flex items-center gap-2"
          >
            Advertiser
            <i className="bx bx-link-external"></i>
          </Link>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div data-aos="zoom-in" className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-0 mt-10 lg:mt-0">
        {/* <div className="w-full max-w-[260px] h-[160px] sm:max-w-[320px] sm:h-[200px] md:max-w-[380px] md:h-[260px] lg:max-w-[420px] lg:h-[320px]">
          <img
            src="/images/Lead.png"
            alt="Brainwave Developers Illustration"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div> */}

           <div className="relative w-full max-w-[260px] h-[160px] sm:max-w-[320px] sm:h-[200px] md:max-w-[380px] md:h-[260px] lg:max-w-[420px] lg:h-[320px] rounded-xl overflow-hidden">
      {/* Your Image */}
      <img
        src="/images/Lead.png"
        alt="Lead Orbit Logo"
        className="w-full h-full object-contain z-10 relative"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none animate-light-sweep"></div>
    </div>
      </div>
    </main>
  );
};

export default Hero;
