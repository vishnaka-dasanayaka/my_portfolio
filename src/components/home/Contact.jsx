import fe from "../../assets/img/cv.jpg";
import phone from "../../assets/img/phone.png";
import gmail from "../../assets/img/gmail.webp";
import linkedin from "../../assets/img/linkedin.webp";
import hackerrank from "../../assets/img/hackerrank.png";
import leet from "../../assets/img/leet.png";
import fiverrlogo from "../../assets/img/fiverrlogo.png";
import git from "../../assets/img/git.png";

function Contact() {
  const contacts = [
    {
      icon: phone,
      text: "+94 71 370 4691",
      link: "tel:+94713704691",
    },

    {
      icon: linkedin,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/vishnaka-dasanayaka-358a16211/",
    },
    {
      icon: git,
      text: "GitHub",
      link: "https://github.com/vishnaka-dasanayaka",
    },
    {
      icon: fiverrlogo,
      text: "Fiverr",
      link: "https://www.fiverr.com/sachinvishnaka",
    },
    {
      icon: hackerrank,
      text: "HackerRank",
      link: "https://www.hackerrank.com/vishnaka-dasanayaka",
    },
    {
      icon: leet,
      text: "LeetCode",
      link: "https://leetcode.com/vishnaka-dasanayaka",
    },
    {
      icon: gmail,
      text: "vishnakadasanayaka@gmail.com",
      link: "mailto:vishnakadasanayaka@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#0D1117] text-white px-6 lg:px-32 py-20"
    >
      <h1 className="text-4xl font-extrabold text-white mb-16 text-center">
        Get in Touch
      </h1>

      <div className="grid grid-cols-1  gap-12">
        {/* Left: Contact Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {contacts.map((c, index) => (
            <a
              key={index}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-4 p-4 bg-[#161B22] hover:bg-[#1F2937] rounded-lg transition `}
            >
              <img
                src={c.icon}
                alt={c.text}
                className="w-10 h-10 object-cover rounded-full"
              />
              <span className="text-sm font-semibold text-gray-300 hover:text-white transition">
                {c.text}
              </span>
            </a>
          ))}
        </div>

        {/* Right: Contact Form */}
        <div className="bg-[#161B22] rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-600 text-white outline-none focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-600 text-white outline-none focus:border-orange-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-600 text-white outline-none focus:border-orange-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
