import fe from "../../assets/img/fe.jpg";
import mongo from "../../assets/img/mongo.png"; // Use real tech icons if available

const projects = [
  {
    title: "Eye Planet - Sales & Order Tracking",
    subtitle: "Full-stack Web Application",
    description:
      "Built a complete solution for Eye Planet (eyeplanet.lk) to manage patient registration, order workflows, and sales tracking. Integrated CI/CD with Jenkins and deployed to a VPS.",
    tech: ["React", "Node.js", "MongoDB", "Jenkins", "TailwindCSS"],
    images: [fe, fe, fe],
    color: "blue",
  },
  {
    title: "Feel ERP - Fitness Service Management",
    subtitle: "Custom ERP Platform",
    description:
      "Developed ERP for Feel, a personal training service by Sri Lanka’s top fitness influencer. Built client portal, admin dashboard, payment handling, and scalable backend using Sails.js.",
    tech: ["Angular", "Sails.js", "MySQL", "AWS", "Bootstrap"],
    images: [fe, fe, fe],
    color: "orange",
  },
];

function Works() {
  return (
    <section
      id="works"
      className="w-full min-h-screen bg-[#0D1117] text-white px-6 lg:px-32 py-20"
    >
      <h1 className="text-4xl font-extrabold text-white mb-16 text-center">
        Projects
      </h1>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-full bg-[#161B22] border-l-4 border-${project.color}-500 rounded-xl p-6 shadow hover:shadow-${project.color}-500/30 transition-all`}
          >
            <h2 className="text-2xl font-bold text-white">
              {project.title}{" "}
              <span className="text-sm italic text-gray-400 font-normal">
                ({project.subtitle})
              </span>
            </h2>

            <div className="flex flex-col lg:flex-row mt-6 gap-6">
              {/* Left - Description + Tech */}
              <div className="lg:w-1/3">
                <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                  {project.description}
                </p>
                <h3 className="text-sm text-gray-400 mb-2 uppercase">
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700 px-3 py-1 rounded-full text-white tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - Images */}
              <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.images.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden shadow">
                    <img
                      src={img}
                      alt="Project Screenshot"
                      className="object-cover w-full h-full hover:scale-105 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="px-5 py-2 text-sm text-white bg-orange-500 hover:bg-orange-600 rounded-md transition">
          View More Projects →
        </button>
      </div>
    </section>
  );
}

export default Works;
