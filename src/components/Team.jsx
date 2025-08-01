import React from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Usman Khan",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // young man
    bio: "Usman is a full‑stack expert with over 10 years of experience building scalable web applications.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Ali Ahmed",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/45.jpg", // young man
    bio: "Ali excels at translating complex ideas into clear product roadmaps and a great user experience.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Usman Tariq",
    role: "Marketing Strategist",
    image: "https://randomuser.me/api/portraits/men/52.jpg", // young man
    bio: "Usman drives our outreach efforts, connecting us with key partners and clients.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const TeamSection = () => {
  return (
    <div data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine" className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Our Leadership Team</h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">
          Meet the dedicated professionals who drive our success and lead our mission.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
              <img
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-4 ring-4 ring-yellow-500"
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-xl sm:text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-yellow-500 text-sm sm:text-base mb-1">{member.role}</p>
              <p className="text-gray-400 text-sm sm:text-base mb-4 text-center">{member.bio}</p>
              <div className="flex space-x-4">
                <a href={member.social.linkedin} className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  <FaLinkedinIn size={20} />
                </a>
                <a href={member.social.twitter} className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  <FaTwitter size={20} />
                </a>
                <a href={member.social.github} className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
