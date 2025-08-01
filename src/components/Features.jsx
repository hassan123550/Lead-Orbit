// import React from 'react';

// const appFeatures = [
//   {
//     title: "Intuitive Interface",
//     description: "Experience seamless navigation and a user-friendly design that makes every interaction a delight."
//   },
//   {
//     title: "Real-time Updates",
//     description: "Stay informed with instant data synchronization and live notifications for critical events."
//   },
//   {
//     title: "Secure Data Encryption",
//     description: "Your privacy is paramount. We use advanced encryption to keep your data safe and protected."
//   },
//   {
//     title: "Cross-Platform Compatibility",
//     description: "Access your features from any device – desktop, tablet, or mobile, with consistent performance."
//   },
//   {
//     title: "Customizable Dashboards",
//     description: "Tailor your workspace to your needs with fully customizable dashboards and widgets."
//   },
//   {
//     title: "Offline Mode Support",
//     description: "Work uninterrupted even without an internet connection, with data syncing once you're back online."
//   },
//   {
//     title: "Advanced Analytics",
//     description: "Gain valuable insights with powerful analytics tools and visual data representations."
//   },
//   {
//     title: "Integrated Collaboration",
//     description: "Facilitate teamwork with built-in collaboration tools, sharing, and communication features."
//   },
//   {
//     title: "Scalable Architecture",
//     description: "Our app grows with you, designed to handle increasing demands and future expansions effortlessly."
//   },
//   {
//     title: "24/7 Premium Support",
//     description: "Our dedicated support team is always ready to assist you, ensuring a smooth and hassle-free experience."
//   },
// ];

// const Features = () => {
//   return (
//     <div data-aos="fade-right"
//         data-aos-offset="100"
//         data-aos-easing="ease-in-sine" className="min-h-screen bg-gray-950 p-8 flex flex-col items-center justify-center">
//       <h1 className="text-5xl font-extrabold mb-12 text-center text-white relative">
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 animate-pulse">
//           App Features
//         </span>
//         <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full shadow-lg shadow-purple-500/50"></span>
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {appFeatures.map((feature, index) => (
//           <div
//             key={index}
//             className="relative p-0.5 rounded-xl shadow-lg
//                        bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400
//                        transform skew-y-2 hover:skew-y-0 transition-all duration-500 ease-in-out
//                        hover:scale-105"
//           >
//             <div
//               className="bg-gray-800 rounded-lg p-6 h-full flex flex-col justify-between
//                          text-white relative z-10"
//               style={{
//                 // Inner content styling to counter the skew and create depth
//                 transform: 'skewY(-2deg)', // Counter-skew for text readability
//                 transition: 'transform 0.5s ease-in-out',
//                 boxShadow: '0 0 15px rgba(128, 0, 128, 0.4), 0 0 30px rgba(0, 0, 255, 0.3)' // Subtle inner glow
//               }}
//             >
//               <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
//                 {feature.title}
//               </h2>
//               <p className="text-gray-200 text-lg leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Features;
















// import React from 'react';

// // Updated content for Lead Generation and Marketing Solutions
// const marketingSolutions = [
//   {
//     title: "Targeted Lead Generation",
//     description: "Data-driven strategies istemal karke apne ideal customers tak pohnchain aur high-quality leads hasil karein jo convert hone ke liye tayar hain."
//   },
//   {
//     title: "Marketing Automation",
//     description: "Apne marketing ke kaam ko asaan banayein. Repetitive tasks ko automate karein, leads ko nurture karein, aur personalized experiences provide karein."
//   },

//   {
//     title: "PPC Campaign Management",
//     description: "Google aur social media par targeted ads ke zariye fori nataij hasil karein. Hum aapke Pay-Per-Click campaigns ko manage karke maximum ROI dete hain."
//   },
//   {
//     title: "Content Marketing",
//     description: "Apni audience ko qeemti content se engage karein. Hum blog posts se le kar videos tak, aisa content banate hain jo trust build karta hai aur traffic lata hai."
//   },
//   {
//     title: "Social Media Strategy",
//     description: "Online ek mazboot brand presence banayein. Hum aapke social media channels ko manage karke community engage karte hain aur leads generate karte hain."
//   },
//   {
//     title: "Email Marketing Campaigns",
//     description: "Leads ko unke inbox mein direct nurture karein. Hum effective email campaigns design karte hain jo subscribers ko loyal customers banate hain."
//   },
//   {
//     title: "Advanced Analytics & Reporting",
//     description: "Saaf data ke saath behtar faislay lein. Hum aapki campaign performance aur ROI par tafseeli reports aur insights faraham karte hain."
//   },

// ];

// const MarketingFeatures = () => {
//   return (
//     <div data-aos="fade-right"
//         data-aos-offset="100"
//         data-aos-easing="ease-in-sine" className="min-h-screen bg-gray-950 p-8 flex flex-col items-center justify-center">
//       <h1 className="text-5xl font-extrabold mb-12 text-center text-white relative">
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 animate-pulse">
//           Marketing Solutions
//         </span>
//         <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full shadow-lg shadow-purple-500/50"></span>
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {marketingSolutions.map((feature, index) => (
//           <div
//             key={index}
//             className="relative p-0.5 rounded-xl shadow-lg
//                        bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400
//                        transform skew-y-2 hover:skew-y-0 transition-all duration-500 ease-in-out
//                        hover:scale-105"
//           >
//             <div
//               className="bg-gray-800 rounded-lg p-6 h-full flex flex-col justify-between
//                          text-white relative z-10"
//               style={{
//                 // Inner content styling to counter the skew and create depth
//                 transform: 'skewY(-2deg)', // Counter-skew for text readability
//                 transition: 'transform 0.5s ease-in-out',
//                 boxShadow: '0 0 15px rgba(128, 0, 128, 0.4), 0 0 30px rgba(0, 0, 255, 0.3)' // Subtle inner glow
//               }}
//             >
//               <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
//                 {feature.title}
//               </h2>
//               <p className="text-gray-200 text-lg leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MarketingFeatures;

























import React from 'react';

const marketingSolutions = [
  {
    title: "Targeted Lead Generation",
    description: "Reach your ideal customers using data-driven strategies and acquire high-quality leads that are ready to convert."
  },
  {
    title: "Marketing Automation",
    description: "Simplify your marketing efforts by automating repetitive tasks, nurturing leads, and delivering personalized experiences."
  },
  {
    title: "PPC Campaign Management",
    description: "Get instant results with targeted ads on Google and social media. We manage your Pay-Per-Click campaigns to maximize ROI."
  },
  {
    title: "Content Marketing",
    description: "Engage your audience with valuable content. From blog posts to videos, we create content that builds trust and drives traffic."
  },
  {
    title: "Social Media Strategy",
    description: "Build a strong brand presence online. We manage your social channels, engage your community, and generate leads effectively."
  },
  {
    title: "Email Marketing Campaigns",
    description: "Nurture leads directly in their inbox. We design effective email campaigns that turn subscribers into loyal customers."
  },
  {
    title: "Advanced Analytics & Reporting",
    description: "Make smarter decisions with clear data. We provide detailed reports and insights on your campaign performance and ROI."
  }
];

const MarketingFeatures = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      className="min-h-screen bg-black px-4 py-12 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-white relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 animate-pulse">
          Marketing Solutions
        </span>
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full shadow-lg shadow-purple-500/50"></span>
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {marketingSolutions.map((feature, index) => (
          <div
            key={index}
            className="relative p-0.5 rounded-xl shadow-lg bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div
              className="bg-gray-800 rounded-lg p-6 sm:p-7 h-full flex flex-col justify-between text-white relative z-10"
              style={{
                transform: 'skewY(-2deg)',
                transition: 'transform 0.5s ease-in-out',
                boxShadow:
                  '0 0 15px rgba(128, 0, 128, 0.4), 0 0 30px rgba(0, 0, 255, 0.3)'
              }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 text-center">
                {feature.title}
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingFeatures;
