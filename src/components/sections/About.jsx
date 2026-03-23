import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiPhpmyadmin } from "react-icons/si";

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "Bootstrap", "JavaScript"];

  const backendSkills = ["PHP", "MySQL", "SQL", "phpMyAdmin"];

  const additionalSkills = ["React", "Node.js", "Tailwind CSS"];

  const iconMap = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    Bootstrap: <FaBootstrap />,
    React: <FaReact />,
    "Tailwind CSS": <SiTailwindcss />,
    JavaScript: <FaJs />,
    "Node.js": <FaNodeJs />,
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
            <p className="text-gray-300 mb-6 leading-relaxed">
              I work on existing web systems that need fixes, improvements, or
              additional features. My experience includes business-facing tools
              such as admin panels, portals, and database-driven applications
              built with PHP, MySQL, and JavaScript.

              <br />
              <br />
              I’m most comfortable working on practical problems like debugging
              broken functionality, improving system workflows, and making older
              codebases easier to maintain. I focus on solutions that are clear,
              usable, and realistic for the project.

              <br />
              <br />
              My approach is straightforward: understand the system, fix what is
              not working, and improve what can be made more reliable over time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {iconMap[tech]}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {iconMap[tech]}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Additional</h3>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <div className="text-gray-300 space-y-1">
                <p className="font-semibold">B.S. in Information Technology</p>
                <p>Araullo University, Philippines</p>
                <p>Graduated: 2019</p>
              </div>
            </div>
          </div>

          <div className="gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Freelance Web Developer (Self-Employed) · 2023 - Present
                  </h4>
                  <p className="mt-2">
                    Worked on web-based systems involving bug fixes, feature
                    improvements, and database-driven workflows.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                    <li>Fixed issues and restored functionality in existing PHP systems</li>
                    <li>Improved a bus fare management system for a transport business</li>
                    <li>Built admin portals and student management features</li>
                    <li>Worked with database updates, reporting logic, and system enhancements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    CSR / Voice Agent at iQor Philippines · 2018 - 2024
                  </h4>
                  <p className="mt-2 text-gray-400">
                    Developed communication, problem-solving, and client support
                    skills while handling customer concerns in a fast-paced
                    environment.
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