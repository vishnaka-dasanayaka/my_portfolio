import me from "../../assets/img/me.png";

function Hero() {
  return (
    <div
      id="home"
      className="w-full h-screen flex flex-col lg:flex-row items-center justify-center bg-[#0D1117] text-white font-sans"
    >
      {/* Left Section - Text */}
      <div className="flex-1 flex flex-col items-start justify-center px-10 lg:pl-32 space-y-6">
        <h2 className="text-3xl text-gray-400">
          Hello<span className="text-orange-500">.</span>
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold">
          I'm <span className="text-white">Vishnaka</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Full-Stack Software Engineer
        </h2>
        <p className="text-gray-400 text-sm max-w-md">
          I build scalable, cloud-powered web apps using MERN, Spring Boot, and
          AWS. Specialized in ERP systems, automation & AI integration.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 pt-4">
          <a
            href="#contact"
            className="bg-orange-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Got a project?
          </a>
          <a
            href="https://vishnaka.netlify.app/resume.pdf" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            My resume
          </a>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex items-center justify-center mt-10 lg:mt-0">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 flex items-center justify-center shadow-2xl">
          <img
            src={me}
            alt="Vishnaka Dasanayaka"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#0D1117]"
          />
        </div>
      </div>

      {/* Tech Stack Footer */}
      <div className="absolute bottom-5 w-full px-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
        <span>Angular</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Sails.js</span>
        <span>AWS</span>
        <span>Spring Boot</span>
        <span>SQL</span>
        <span>MongoDB</span>
        <span>Docker</span>
        <span>Git</span>
      </div>
    </div>
  );
}

export default Hero;
