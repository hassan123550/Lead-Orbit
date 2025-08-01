import React from 'react';
import { FaBullhorn, FaCreditCard, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdvertiserSection = () => {
  const advertiserFeatures = [
    {
      icon: <FaBullhorn className="text-4xl text-purple-500 mb-4" />,
      title: "Targeted Customer Acquisition",
      description: "Reach your ideal audience through our extensive network of publishers. Our advanced targeting options ensure your campaigns connect with high-quality, relevant traffic to drive conversions."
    },
    {
      icon: <FaCreditCard className="text-4xl text-red-500 mb-4" />,
      title: "Flexible & Cost-Effective Models",
      description: "Choose from a range of pricing models, including CPA, CPL, and RevShare, to align with your business goals. We provide transparent tracking and competitive pricing to maximize your ROI."
    },
    {
      icon: <FaUserFriends className="text-4xl text-blue-500 mb-4" />,
      title: "Fraud Protection & Dedicated Support",
      description: "Our robust fraud detection system protects your campaigns from invalid traffic. Additionally, a dedicated account manager is always available to help you optimize and scale your advertising efforts."
    }
  ];

  return (
    <div data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
     className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          For Advertisers
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">
          Drive high-quality traffic and grow your business with our powerful advertising platform.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advertiserFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              {feature.icon}
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white text-center">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Back to Home Link */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg transition duration-300 ease-in-out shadow-lg"
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
    </div>
  );
};

export default AdvertiserSection;
