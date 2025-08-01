import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "5 Digital Marketing Trends to Watch in 2025",
    excerpt:
      "The world is evolving fast, and so is marketing. In this post, we’ll explore 5 powerful digital marketing trends for 2025 that will help you stay ahead of the competition.",

    category: "Marketing Strategy",
    link: "#"
  },
  {
    id: 2,
    title: "How to Generate High-Quality Leads: A Practical Guide",
    excerpt:
      "Getting leads is not enough — they must be high-quality. This guide walks you through actionable strategies to attract top-notch leads for your business.",

    category: "Lead Generation",
    link: "#"
  }
];

const BlogSection = () => {
  return (
    <section
    data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine" 
      className="bg-black text-white px-5 py-14 sm:px-10 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500 animate-pulse">
          Our Blog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col group hover:-translate-y-1.5 transition-transform duration-300 ease-in-out border border-gray-700 hover:border-teal-400"
            >
              <div className="flex justify-between items-center mb-3 text-sm">
                <span className="bg-gray-700 text-teal-300 font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-400">{post.date}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-teal-300 transition-colors duration-300">
                {post.title}
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              <div className="flex justify-between items-center mt-auto">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
