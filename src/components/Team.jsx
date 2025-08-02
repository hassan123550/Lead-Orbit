// import React from 'react';

// const TeamSection = () => {
//   return (
//     <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">Our Leadership Team</h2>
      

// <p className="mt-4 text-base sm:text-lg text-center text-gray-400 leading-relaxed max-w-3xl mx-auto">
//   Our leadership team is composed of passionate professionals with deep industry knowledge and a drive for innovation. <br />
//   Each member brings unique expertise to the table, enabling strategic decision-making and impactful solutions. <br />
//   They work closely to ensure that our company’s vision is clearly defined and effectively executed. <br />
 
// </p>

//         <div className="mt-10 space-y-6">

//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;








import React from 'react';

const TeamSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
          Our Leadership Team
        </h2>

        {/* Responsive Paragraph without <br /> */}
        <p className="mt-4 text-base sm:text-lg text-center text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Our leadership team is composed of passionate professionals with deep industry knowledge and a drive for innovation.
          Each member brings unique expertise to the table, enabling strategic decision-making and impactful solutions.
          They work closely to ensure that our company’s vision is clearly defined and effectively executed.
          With a shared commitment to excellence, they guide us forward with clarity, collaboration, and purpose.
        </p>

        {/* Future team members or content can go here */}
        <div className="mt-10 space-y-6">
          {/* Optional team member entries */}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
