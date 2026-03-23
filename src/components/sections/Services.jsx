import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaBug,
  FaTools,
  FaDatabase,
  FaChartLine,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      icon: <FaBug className="text-2xl" />,
      title: "Bug Fixing & Debugging",
      description:
        "Find and fix issues in existing PHP, MySQL, and JavaScript applications. Restore broken functionality and improve overall reliability.",
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: "Legacy System Improvements",
      description:
        "Work on existing systems that need cleanup, improvements, or new functionality. Improve maintainability, performance, and day-to-day usability.",
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "Database-Driven Systems",
      description:
        "Build, improve, and maintain systems that rely on structured business data. Help with query optimization, schema updates, and smoother data workflows.",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Feature Enhancements",
      description:
        "Add practical features to existing systems, from reporting tools to user management and workflow improvements.",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Admin Panels & Portals",
      description:
        "Create or improve admin interfaces for managing records, users, and business data with clear workflows and role-based access.",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Maintenance & Support",
      description:
        "Help keep your system usable and up to date with fixes, adjustments, and support for ongoing improvements.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            How I Help
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            I focus on improving existing web systems built with PHP, MySQL, and
            JavaScript, especially admin tools, portals, and other
            database-driven applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-blue-500 text-white py-3 px-8 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};