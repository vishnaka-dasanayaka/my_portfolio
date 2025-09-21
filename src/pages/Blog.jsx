import React from "react";

const blogData = {
  "Software Development": [
    {
      title: "Building Scalable MERN Apps",
      summary:
        "Learn how to structure your MERN stack applications for performance and scalability.",
      link: "#",
    },
    {
      title: "Advanced Angular Patterns",
      summary:
        "Tips and best practices for building maintainable Angular applications.",
      link: "#",
    },
  ],
  "AI/ML": [
    {
      title: "Introduction to TensorFlow.js",
      summary:
        "Bring machine learning directly into your web apps with TensorFlow.js.",
      link: "#",
    },
    {
      title: "Predicting Sales with ML",
      summary:
        "Step-by-step guide to forecasting sales using Python and ML models.",
      link: "#",
    },
  ],
  "Cyber Security": [
    {
      title: "OWASP Top 10 Explained",
      summary:
        "Understand the most common web vulnerabilities and how to prevent them.",
      link: "#",
    },
    {
      title: "Secure API Development",
      summary:
        "Best practices to secure your backend APIs using modern authentication techniques.",
      link: "#",
    },
  ],
};

function Blog() {
  return (
    <div
      id="blog"
      className="w-full min-h-screen bg-[#0D1117] text-white font-sans px-6 lg:px-32 py-20"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-10 text-center">
        My Blog
      </h1>

      {Object.keys(blogData).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-extrabold text-orange-500 mb-6">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData[category].map((blog, index) => (
              <div
                key={index}
                className="bg-[#161B22] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-400 mb-4">{blog.summary}</p>
                <a
                  href={blog.link}
                  className="text-orange-500 font-semibold hover:underline"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
