// import React from 'react';


// const companyResources = [
//   {
//     icon: '📖', // Placeholder for actual icon, e.g., <BookOpenIcon />
//     title: "Comprehensive Documentation",
//     description: "Access our extensive knowledge base, API references, and detailed user guides. Our documentation is meticulously crafted to help you understand every aspect of our software, from basic setup to advanced configurations and troubleshooting.",
//     link: "/documentation",
//     category: "Learning & Support"
//   },
//   {
//     icon: '📹', // Placeholder for actual icon, e.g., <VideoCameraIcon />
//     title: "Video Tutorials & Demos",
//     description: "Watch our step-by-step video tutorials and product demonstrations. These visual guides cover various features, use cases, and best practices, designed to accelerate your learning curve and maximize productivity.",
//     link: "/videos",
//     category: "Learning & Support"
//   },
//   {
//     icon: '💬', // Placeholder for actual icon, e.g., <ChatAlt2Icon />
//     title: "Community Forum",
//     description: "Connect with fellow users, ask questions, share insights, and find solutions in our active community forum. Our team also monitors discussions to provide expert assistance and gather valuable feedback.",
//     link: "/community",
//     category: "Community & Support"
//   },
//   {
//     icon: '📄', // Placeholder for actual icon, e.g., <DocumentTextIcon />
//     title: "Whitepapers & Case Studies",
//     description: "Explore in-depth analyses, research papers, and real-world success stories. Our whitepapers offer insights into industry trends, while case studies showcase how our solutions deliver tangible results for businesses.",
//     link: "/insights",
//     category: "Insights & Data"
//   },
//   {
//     icon: '🤝', // Placeholder for actual icon, e.g., <UsersIcon />
//     title: "Partnership Program",
//     description: "Discover opportunities to collaborate with us. Our partnership program offers various tiers for technology integrators, solution providers, and resellers, fostering mutual growth and expanded reach.",
//     link: "/partners",
//     category: "Business & Growth"
//   },
//   {
//     icon: '📞', // Placeholder for actual icon, e.g., <SupportIcon />
//     title: "Dedicated Customer Support",
//     description: "Access our multi-channel support for timely assistance. Our expert support team is available via chat, email, and phone to help you with technical issues, product inquiries, and general assistance.",
//     link: "#",
//     category: "Customer Service"
//   },
//   {
//     icon: '📢', // Placeholder for actual icon
//     title: "Blog & Latest News",
//     description: "Stay updated with the latest company news, product announcements, industry articles, and expert opinions. Our blog provides valuable content and keeps you informed about our innovations.",
//     link: "/blog",
//     category: "Updates & News"
//   },
//   {
//     icon: '🛠️', // Placeholder for actual icon
//     title: "Developer Tools & SDKs",
//     description: "Empower your development team with our robust APIs, SDKs, and development tools. Integrate our functionalities seamlessly into your applications and build custom solutions with ease.",
//     link: "/developers",
//     category: "Technical Resources"
//   },
//   {
//     icon: '📚', // Placeholder for actual icon
//     title: "Webinars & Events",
//     description: "Join our live webinars, online workshops, and upcoming industry events. Learn directly from our experts, participate in Q&A sessions, and network with peers.",
//     link: "/events",
//     category: "Learning & Engagement"
//   },
//   {
//     icon: '🌟', // Placeholder for actual icon
//     title: "Success Stories Portal",
//     description: "Read inspiring stories of how our clients have transformed their operations and achieved significant milestones using our products and services. Learn from their journeys and strategies.",
//     link: "/success-stories",
//     category: "Client Spotlights"
//   }
// ];

// const Resources = () => {
//   return (
//     <div data-aos="fade-right"
//         data-aos-offset="100"
//         data-aos-easing="ease-in-sine" className="min-h-screen bg-gray-900 text-white p-8 sm:p-12">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
//           Our Resources
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {companyResources.map((resource, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-xl shadow-2xl p-8 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out
//                          border border-transparent hover:border-blue-500
//                          relative overflow-hidden group" // Added group for hover effects
//             >
//               {/* Optional: A subtle background effect on hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></div>

//               <div className="mb-4 text-5xl flex-shrink-0 relative z-10">
//                 {/* Replace with actual Heroicon if installed, e.g., <BookOpenIcon className="h-12 w-12 text-blue-400" /> */}
//                 {resource.icon}
//               </div>
//               <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 relative z-10">
//                 {resource.title}
//               </h2>
//               <p className="text-gray-300 text-lg flex-grow mb-4 relative z-10">
//                 {resource.description}
//               </p>
//               {resource.link && (
//                 <a
//                   href={resource.link}
//                   className="mt-auto inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold
//                              transition-colors duration-300 relative z-10"
//                 >
//                   Learn More
//                   <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </a>
//               )}
//               {/* Category tag - subtle */}
//               <div className="absolute top-4 right-4 bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded-full opacity-80 z-10">
//                 {resource.category}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resources;










// import React from 'react';

// // Sirf 2 services jo lead generation par focus karti hain
// const leadGenServices = [
//   {
//     icon: '🎯', // Icon for targeting
//     title: "Targeted Lead Generation",
//     description: "Hum data-driven techniques aur advanced targeting ka istemal karte hain taake aapke business ke liye high-quality aur relevant leads hasil ki ja sakein jo sales mein convert hon.",
 
//     category: "Lead"
//   },
//   {
//     icon: '📈', // Icon for growth/optimization
//     title: "Sales Funnel Optimization",
//     description: "Hum aapke sales process ko analyze aur optimize karte hain. Leads ko nurturing se le kar conversion tak, hum har step ko behtar banate hain taake aapka Return on Investment (ROI) maximize ho.",
 
//     category: "Sales"
//   }
// ];

// const LeadServices = () => {
//   return (
//     <div data-aos="fade-in" className="min-h-screen bg-gray-900 text-white p-8 sm:p-12 flex flex-col justify-center items-center">
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 animate-pulse">
//           Our Lead Generation Services
//         </h1>

//         {/* Container for the two cards, centered */}
//         <div className="flex flex-wrap justify-center gap-10">
//           {leadGenServices.map((service, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-xl shadow-2xl p-8 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out
//                          border border-transparent hover:border-blue-500
//                          relative overflow-hidden group max-w-lg" // max-w-lg to control width
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></div>

//               <div className="mb-4 text-5xl flex-shrink-0 relative z-10 text-center sm:text-left">
//                 {service.icon}
//               </div>
//               <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 relative z-10 text-center sm:text-left">
//                 {service.title}
//               </h2>
//               <p className="text-gray-300 text-lg flex-grow mb-4 relative z-10 text-center sm:text-left">
//                 {service.description}
//               </p>
//               {service.link && (
//                 <a
//                   href={service.link}
//                   className="mt-auto inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold
//                              transition-colors duration-300 relative z-10 mx-auto sm:mx-0" // Center button on small screens
//                 >
//                   Learn More
//                   <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </a>
//               )}
//               <div className="absolute top-4 right-4 bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded-full opacity-80 z-10">
//                 {service.category}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeadServices;













import React from 'react';

const leadGenServices = [
  {
    icon: '🎯',
    title: "Targeted Lead Generation",
    description:
      "We use data-driven techniques and advanced targeting to acquire high-quality, relevant leads that are more likely to convert into actual sales.",
    category: "Lead",
  },
  {
    icon: '📈',
    title: "Sales Funnel Optimization",
    description:
      "We analyze and optimize your sales funnel, improving every step from lead nurturing to conversion — maximizing your Return on Investment (ROI).",
    category: "Sales",
  },
];

const LeadServices = () => {
  return (
    <div
       data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      className="min-h-screen bg-black text-white px-4 py-12 sm:px-8 lg:px-16 flex flex-col justify-center items-center"
    >
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 animate-pulse">
          Our Lead Generation Services
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {leadGenServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out border border-transparent hover:border-blue-500 relative overflow-hidden group w-full max-w-sm sm:max-w-md"
            >
              {/* Background Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></div>

              {/* Icon */}
              <div className="mb-4 text-5xl flex-shrink-0 relative z-10 text-center">
                {service.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 relative z-10 text-center">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow mb-4 relative z-10 text-center">
                {service.description}
              </p>

              {/* Optional Link */}
              {service.link && (
                <a
                  href={service.link}
                  className="mt-auto inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 relative z-10 justify-center"
                >
                  Learn More
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded-full opacity-80 z-10">
                {service.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadServices;
