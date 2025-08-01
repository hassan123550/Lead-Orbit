import React from 'react';
import { FaGlobe, FaChartLine, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PublisherSection = () => {
  const publisherFeatures = [
    {
      icon: <FaGlobe className="text-4xl sm:text-5xl text-blue-500 mb-4" />,
      title: "Global Reach & Diverse Campaigns",
      description: "Partner with top advertisers and access a wide array of high-performing campaigns to monetize your traffic on a global scale. Our network connects you with diverse opportunities across various industries.",
    },
    {
      icon: <FaChartLine className="text-4xl sm:text-5xl text-green-500 mb-4" />,
      title: "Real-Time Analytics & Reporting",
      description: "Gain valuable insights into your performance with our advanced, real-time analytics dashboard. Monitor clicks, conversions, and earnings to optimize your strategies and maximize revenue.",
    },
    {
      icon: <FaHandshake className="text-4xl sm:text-5xl text-yellow-500 mb-4" />,
      title: "Dedicated Support & Payouts",
      description: "Receive personalized support from our experienced team to help you succeed. We offer flexible and timely payment options, ensuring you get paid quickly and securely for your hard work.",
    },
  ];

  return (
    <section data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">For Publishers</h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">
          Maximize your revenue with our robust affiliate network and cutting-edge tools.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {publisherFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
            >
              {feature.icon}
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublisherSection;
