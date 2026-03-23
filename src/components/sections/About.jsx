import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaAws,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPhpmyadmin } from "react-icons/si";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
  ];

  const backendSkills = [
    "PHP",
    "MySQL", 
    "SQL",
    "phpMyAdmin"
  ];

  const additionalSkills = [
    "React",
    "Node.js", 
    "Tailwind CSS"
  ];

  const iconMap = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Bootstrap: <FaBootstrap />,
  React: <FaReact />,
  "Tailwind CSS": <SiTailwindcss />,
  JavaScript: <FaJs />,
  "Node.js": <FaNodeJs />,
  Python: <FaPython />,
  AWS: <FaAws />,
  MongoDB: <SiMongodb />,
  PHP: <FaPhp />,
  phpMyAdmin: <SiPhpmyadmin />,
  SQL: <FaDatabase />,
};

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Why Work With Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a freelance developer who specializes in taking over and improving existing web systems. With real-world experience working directly with businesses, I've helped clients fix broken functionality, modernize legacy code, and add features that solve actual business problems.

              <br /><br />My approach is practical and client-focused. I don't just write code—I deliver solutions that keep your business running smoothly. Whether it's debugging a critical issue, optimizing database performance, or building a new admin interface, I focus on results that matter.

              <br /><br />I work primarily with PHP, MySQL, and JavaScript because these technologies power most business-critical systems. I'm not interested in the latest frameworks—I'm interested in what works for your business and what I can maintain reliably for the long term.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {iconMap[tech]}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {iconMap[tech]}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Additional</h3>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {iconMap[tech]}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <strong> B.S. in Information Technology </strong> 
                  <br /> Araullo University Philippines
                  <br />Graduated: 2019
              </ul>
            </div>
          </div>
          <div className=" gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Client Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Freelance Web Developer (Self-Employed) (2023 - Present){" "}
                  </h4>
                  <p>
                     * Fixed critical bugs and restored functionality in legacy PHP systems
                    <br /> * Took over and improved a Bus Fare System for a transport business client
                    <br /> * Built custom admin portals and student management systems
                    <br /> * Integrated hardware devices and optimized database performance
                    <br /> * Work directly with business owners to deliver practical solutions
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    CSR / Voice Agent at iQor Philippines (2018 - 2024){" "}
                  </h4>
                  <p>
                    * Provided excellent customer service and support to clients, resolving issues efficiently.
                    <br /> * Utilized strong communication skills to handle inquiries and provide solutions.
                    <br /> * Gained experience in managing customer relationships and problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
