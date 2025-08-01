import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'boxicons/css/boxicons.min.css';
// import Spline from '@splinetool/react-spline'; // Keep if you decide to use it later
import { Link } from 'react-router-dom'; // Import Link

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[90vh] px-6 md:px-12 lg:px-24 pt-10 relative overflow-hidden">

      {/* TEXT SECTION */}
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        className="w-full lg:w-1/2 z-10 text-center lg:text-left mt-10 lg:mt-0 space-y-6"
      >
        {/* Badge */}
        <div className="mx-auto lg:mx-0 w-fit relative bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-md shadow-[0_0_20px_#e99b63] px-4 py-1">
          <div className="flex items-center gap-2 text-white text-sm font-medium">
            <i className="bx bx-diamond-alt text-lg"></i>
            Introducing
          </div>
        </div>

       
<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-white text-center px-4">
  Boost Your Business <br/>
  with Pay-Per-Call Marketing
</h1>

        {/* Paragraph */}
        {/* <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
          Maximize revenue with high-quality leads
           that convert.Connect with ral customers
           through targeted calls and scale your 
                 business effectively
        </p> */}
<p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-[90%] sm:max-w-xl mx-auto lg:mx-0 px-4 sm:px-0 text-center lg:text-left">
  Maximize revenue with high-quality leads that convert. Connect with real customers
  through targeted calls and scale your business effectively.
</p>



        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start mt-6">
          <Link // Use Link instead of a
            to="/documentation-page" // Specify the path
            className="border border-[#3a3a3a] text-white py-3 px-8 rounded-md text-sm sm:text-base font-semibold tracking-wide hover:bg-[#1a1a1a] transition-all duration-300 flex items-center gap-2"
          >
            Publisher
            <i className="bx bx-link-external"></i>
          </Link>

          <Link // Use Link instead of a
            to="/get-started" // Specify the path
            className="bg-gray-300 text-black hover:text-white py-3 px-8 rounded-md text-sm sm:text-base font-semibold tracking-wide hover:bg-[#1a1a1a] transition-all duration-300 flex items-center gap-2"
          >
            Advertiser
            <i className="bx bx-link-external"></i>
          </Link>
        </div>
      </div>

      {/* 3D ROBOT SECTION (using your image placeholder) */}
      <div data-aos="zoom-in" className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        {/* <div className="w-full max-w-[350px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]">
          <img
            src="/images/banner.png"
            alt="Brainwave Developers Illustration"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div> */}

        {/* <div className="w-full max-w-[280px] h-[180px] sm:max-w-[320px] sm:h-[220px] md:max-w-[350px] md:h-[280px] lg:max-w-[400px] lg:h-[350px]">
  <img
    src="/images/Lead.png"
    alt="Brainwave Developers Illustration"
    className="w-full h-full object-cover rounded-xl shadow-lg"
  />
</div> */}


<div className="w-full flex justify-center px-4 sm:px-0">
  <div className="w-full max-w-[260px] h-[160px] sm:max-w-[300px] sm:h-[200px] md:max-w-[360px] md:h-[260px] lg:max-w-[420px] lg:h-[320px]">
    <img
      src="/images/Lead.png"
      alt="Brainwave Developers Illustration"
      className="w-full h-full object-cover rounded-xl shadow-lg"
    />
  </div>
</div>


      </div>
    </main>
  );
};

export default Hero;