import { RevealOnScroll } from "../RevealOnScroll";
import { FaBug, FaTools, FaDatabase, FaChartLine, FaShieldAlt, FaClock } from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      icon: <FaBug className="text-2xl" />,
      title: "Bug Fixing & Debugging",
      description: "Quickly identify and fix issues in your existing PHP/MySQL/JavaScript applications. Restore broken functionality and get your systems running smoothly again."
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: "Legacy System Improvements",
      description: "Take over and enhance outdated systems. Modernize code, improve performance, and add new features to extend the life of your business-critical applications."
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "Database-Driven Applications",
      description: "Build and maintain robust database applications using MySQL. Optimize queries, design efficient schemas, and ensure data integrity for your business operations."
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Feature Enhancements",
      description: "Add new functionality to your existing systems. From reporting dashboards to user management features, I deliver practical improvements that solve real business problems."
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Admin Panels & Portals",
      description: "Create secure, user-friendly admin interfaces for managing your business data. Role-based access control, intuitive workflows, and reliable performance."
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Maintenance & Support",
      description: "Ongoing support to keep your systems running optimally. Regular updates, security patches, and technical assistance when you need it."
    }
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            How I Help Your Business
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            I specialize in maintaining and improving existing web systems. 
            No project too messy, no code too legacy—if it runs on PHP, MySQL, or JavaScript, I can fix it and make it better.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                <div className="text-blue-500 mb-4">
                  {service.icon}
                </div>
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
              className="inline-block bg-blue-500 text-white py-3 px-8 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
