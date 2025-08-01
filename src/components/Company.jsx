import React from 'react';
import { FaPhone, FaDollarSign } from 'react-icons/fa';

const Card = ({ title, description, buttonText }) => {
  return (
    <div data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine" className="flex flex-col items-center bg-black p-6 rounded-lg shadow-lg text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-sm">
      <div className="relative mb-4">
        <FaPhone className="text-6xl text-yellow-500 transform -rotate-12" />
        <FaDollarSign className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white" />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <p className="text-gray-400 mb-6 text-sm sm:text-base">{description}</p>
      <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300">
        {buttonText}
      </button>
    </div>
  );
};

const TwoCards = () => {
  const cardsData = [
    {
      title: "LEAD GENERATION",
      description:
        "We are passionate about bringing groundbreaking ideas to life through cutting-edge software solutions. Our team thrives on innovation, pushing boundaries to create what's next.",
      buttonText: "Get Started",
    },
    {
      title: "AFFILIATE NETWORK",
      description:
        "Our strength lies in our people. We boast a diverse team of highly skilled developers, designers, and strategists dedicated to delivering excellence and solving complex challenges.",
      buttonText: "Get Started",
    },
  ];

  return (
    <div className="bg-black py-10 px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default TwoCards;
