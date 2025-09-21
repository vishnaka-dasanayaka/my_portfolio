import lightway from "../../assets/img/lightway.svg";
import hifigod from "../../assets/img/hifigod.jpeg";
import fiver from "../../assets/img/fiver.png";
import AddIcon from "@mui/icons-material/Add";

const experiences = [
  {
    logo: lightway,
    role: "Software Engineer (Internship)",
    company: "LightwayIT (Pvt) Ltd, Sri Lanka",
    link: "https://lightwayit.com",
    period: "Oct 2023 – Jan 2024",
    color: "orange-400",
    tech: [
      "React JS",
      "Express JS",
      "AWS (Lambda, S3, DynamoDB, API Gateway)",
      "Meta Dev Tools",
      "OpenAI",
    ],
    project: {
      name: "Socialq Chatbot",
      link: "https://lightwayit.com/work.html#chatbot",
      description:
        "An AI-powered customer support service using OpenAI + AWS Lambda to automate real-time customer responses via Facebook Messenger.",
    },
    bullets: [
      "Built business dashboard UI with React JS",
      "Integrated chatbot using Meta Dev Tools",
      "Used AWS Lambda for serverless execution",
      "Managed storage and routing with DynamoDB + API Gateway",
      "Connected OpenAI API for dynamic NLP",
      "Worked in Agile team environment",
    ],
  },
  {
    logo: hifigod,
    role: "Front-end Developer (Remote, Part-time)",
    company: "Hifi God, Australia",
    link: "https://www.simzilla.com",
    period: "Jan 2024 – Present",
    color: "teal-400",
    tech: ["Angular", "AWS Cognito", "Tailwind CSS"],
    project: {
      name: "SimZilla",
      link: "https://www.simzilla.com",
      description:
        "A multiplayer gaming room matching app where users can create, host, and join rooms based on preferences.",
    },
    bullets: [
      "Used Angular to develop dynamic pages",
      "Styled UI using Tailwind CSS",
      "Integrated AWS Cognito for authentication",
      "Worked under Sprint-based Agile process",
    ],
  },
  {
    logo: fiver,
    role: "Freelancer Web Developer",
    company: "Fiverr",
    link: "https://www.fiverr.com/sachinvishnaka?up_rollout=true",
    period: "Jan 2023 – Present",
    color: "green-500",
    tech: ["JavaScript", "React", "Tailwind CSS", "Bootstrap"],
    project: null,
    bullets: [
      "Resolved UI/UX bugs for global clients",
      "Delivered production-ready components",
      "Gained experience in client comms & feedback",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-[#0D1117] text-white px-6 lg:px-32 py-20"
    >
      <h1 className="text-4xl font-extrabold mb-16 text-center">
        Work Experience
      </h1>

      <div className="relative border-l-2 border-gray-700 ml-3">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-14 ml-6 relative group">
            {/* Dot */}
            <div className="absolute -left-4 top-1.5 w-4 h-4 bg-white border-4 border-orange-500 rounded-full group-hover:scale-125 transition" />

            {/* Card */}
            <div className="bg-[#161B22] p-6 rounded-xl shadow hover:shadow-orange-500/20 transition-all">
              <div className="flex items-center mb-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 rounded-md object-contain mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{exp.role}</h2>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm text-${exp.color} hover:underline`}
                  >
                    {exp.company}
                  </a>
                  <p className="text-xs text-gray-400">{exp.period}</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-xs text-gray-400 uppercase font-medium mb-1">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {exp.project && (
                <div className="mb-3">
                  <p className="text-xs text-gray-400 uppercase font-medium mb-1">
                    Project
                  </p>
                  <a
                    href={exp.project.link}
                    target="_blank"
                    className="text-blue-400 text-sm hover:text-green-400"
                  >
                    {exp.project.name}
                  </a>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    {exp.project.description}
                  </p>
                </div>
              )}

              <ul className="text-sm text-gray-300 space-y-1">
                {exp.bullets.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <AddIcon
                      className="text-orange-500 scale-90 mt-0.5"
                      fontSize="small"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
