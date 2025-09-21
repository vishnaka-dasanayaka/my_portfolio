import fe from "../../assets/img/fe.jpg";
import be from "../../assets/img/be.jpg";
import fs from "../../assets/img/fs.jpg";

function Services() {
  const services = [
    {
      img: fe,
      title: "Front-end Development",
      description:
        "Modern, responsive UIs with Angular, React, and TailwindCSS. I've delivered scalable frontend solutions for products like SimZilla and Feel ERP.",
    },
    {
      img: be,
      title: "Back-end & DevOps",
      description:
        "I build REST APIs with Node.js, Sails.js, and Spring Boot. Skilled with AWS (Lambda, RDS, S3), CI/CD (Jenkins), and secure DevOps deployments.",
    },
    {
      img: fs,
      title: "Full-stack & ERP Systems",
      description:
        "Architected full ERP systems with authentication, dashboards, payments, and live tracking. Clients include Sethneth, EyePlanet, and Feel.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full min-h-screen bg-[#0D1117] text-white px-6 lg:px-32 py-20"
    >
      <h1 className="text-4xl font-extrabold text-white mb-16 text-center">
        What do I provide?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#161B22] rounded-2xl p-6 shadow-md hover:shadow-orange-500/20 transition-all duration-300 group hover:-translate-y-1 hover:scale-[1.01] cursor-pointer"
          >
            <div className="flex items-center justify-center mb-6">
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-[#0D1117]"
              />
            </div>
            <h2 className="text-xl font-bold text-center mb-3 group-hover:text-orange-400 transition">
              {service.title}
            </h2>
            <p className="text-sm text-gray-400 text-center leading-relaxed">
              {service.description}
            </p>
            <div className="mt-5 flex justify-center">
              <a
                href="#works"
                className="text-sm text-orange-400 font-medium hover:underline"
              >
                View Projects →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
