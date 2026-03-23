/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import Modal from "./Modal"; // Adjust path if needed
import BrgyTracking1 from '../../assets/images/brgy_tracking_1.jpg';
import BrgyTracking2 from '../../assets/images/brgy_tracking_2.jpg';
import HCCPortal4 from '../../assets/images/hcc_portal_4.png';
import HCCPortal1 from '../../assets/images/hcc_portal_1.png';
import HCCPortal2 from '../../assets/images/hcc_portal_2.png';
import HCCPortal3 from '../../assets/images/hcc_portal_3.png';
import Locker1 from '../../assets/images/automated_locker_1.png';
import Locker2 from '../../assets/images/automated_locker_2.png';
import Locker3 from '../../assets/images/automated_locker_3.jpg';
import Locker4 from '../../assets/images/automated_locker_4.jpg';
import Locker5 from '../../assets/images/automated_locker_5.jpg';
import Locker6 from '../../assets/images/automated_locker_6.jpg';


export const Projects = () => {
  const [modalContent, setModalContent] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [enlargedImage, setEnlargedImage] = React.useState(null);

  const projects = [
    {
    title: "Bus Fare Management System",
    description:
      "Took over and restored a broken fare tracking system for a local transportation business.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap", "Sunmi API", "Bug Fixing"],
    details:
      "**Client Problem:** A local transportation service had a broken fare management system that was causing revenue loss and operational headaches.\n\n**My Solution:**\n* Audited and debugged legacy PHP code to identify root causes of system failures\n* Restored core functionality including fare calculation and route management\n* Added passenger logging improvements and adjustable fare options based on business needs\n* Integrated Sunmi printer/scanner devices for automated ticket printing and QR scanning\n* Optimized database queries and improved code maintainability\n\n**Results:**\n* System reliability improved from frequent crashes to stable daily operation\n* Client could process fares 3x faster with automated ticket printing\n* Reduced manual data entry errors by 90%\n* Business owner now has reliable tools to manage operations and track revenue",
    images: [],
    featured: true,
  },
    {
      title: "Barangay Information Tracking System",
      description:
        "A centralized web application for managing household, resident, and official records in a local barangay.",
      tech: ["PHP", "JavaScript", "MySQL", "Full-Stack Development"],
      details:
        "* Developed a comprehensive tracking system for managing barangay information. \n* Implemented features to record and access detailed data on residents, services, and community resources. \n* Improved administrative efficiency through streamlined data management workflows. \n* Enhanced data accessibility for authorized personnel to support informed decision-making. \n* Ensured accurate and up-to-date information to aid in community planning and service delivery.",
      images: [BrgyTracking1, BrgyTracking2],
    },
    {
      title: "HCC Student Portal",
      description:
        "Built a complete student administration system from scratch for a client needing reliable academic record management.",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Database Design"],
      details:
        "**Client Problem:** An educational institution needed a reliable system to manage student data, enrollment, and academic records without expensive commercial software.\n\n**My Solution:**\n* Designed and implemented a complete student portal using PHP and MySQL\n* Built modules for student profiles, enrollment tracking, and grade management\n* Integrated secure authentication and role-based access control\n* Optimized database queries for fast performance even with large datasets\n* Created intuitive admin interfaces for staff with minimal technical training\n\n**Results:**\n* Reduced administrative workload by 60% through automated record management\n* Eliminated paper-based processes and manual data entry errors\n* Provided instant access to student records for authorized staff\n* System handles 500+ student records without performance issues\n* Client saved thousands compared to commercial software alternatives",
      images: [HCCPortal4, HCCPortal1, HCCPortal2, HCCPortal3],
      featured: true,
    },
    {
      title: "Automated Coin Locker",
      description:
        "An IoT-enabled locker system using Arduino, Raspberry Pi, and Java for secure storage and user authentication.",
      tech: ["Java", "Arduino", "Raspberry Pi"],
      details:
        "* Led the programming of a sophisticated automated coin locker system as part of our capstone project. \n* Developed a user-friendly graphical interface using Java. \n* Integrated Raspberry Pi to handle the responsive touchscreen interface. \n* Programmed Arduino to manage precise locker control and real-time feedback. \n* Showcased strong hardware-software integration skills to deliver secure and efficient user interactions.",
      images: [Locker1, Locker2, Locker3, Locker4, Locker5, Locker6],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Client Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ${
                  project.featured 
                    ? 'border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 hover:border-blue-500/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)]' 
                    : 'border-white/10 hover:border-blue-500/30'
                }`}
              >
                {project.featured && (
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                    Featured Case Study
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${project.featured ? 'text-white' : ''}`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ${
                        project.featured 
                          ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30' 
                          : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setModalContent(project)}
                    className={`transition-colors my-4 font-medium ${
                      project.featured 
                        ? 'text-cyan-400 hover:text-cyan-300' 
                        : 'text-blue-400 hover:text-blue-300'
                    }`}
                  >
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Modal */}
      <Modal isOpen={modalContent !== null} onClose={() => setModalContent(null)}>
        {modalContent && (
          <div className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{modalContent.title}</h3>
                  <p className="text-gray-400">{modalContent.description}</p>
                </div>
                {modalContent.featured && (
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="prose prose-invert max-w-none mb-6">
                {(modalContent.details || modalContent.description).split('\n').map((line, index) => {
                  if (line.startsWith('**')) {
                    return (
                      <h4 key={index} className="text-lg font-semibold text-cyan-400 mt-4 mb-2">
                        {line.replace(/\*\*/g, '')}
                      </h4>
                    );
                  } else if (line.startsWith('* ')) {
                    return (
                      <li key={index} className="text-gray-300 ml-4 mb-1">
                        {line.replace('* ', '')}
                      </li>
                    );
                  } else if (line.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return (
                      <p key={index} className="text-gray-300 mb-2">
                        {line}
                      </p>
                    );
                  }
                })}
              </div>

              {/* Images */}
              {modalContent.images && modalContent.images.length > 0 ? (
                <div className="mt-6 mb-6">
                  <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                    <div className="relative h-80">
                      <img
                        src={modalContent.images[activeImageIndex]}
                        alt={`${modalContent.title} screenshot ${activeImageIndex + 1}`}
                        className="w-full h-full object-contain cursor-pointer"
                        onClick={() => setEnlargedImage(modalContent.images[activeImageIndex])}
                      />
                      {/* Navigation arrows */}
                      {modalContent.images.length > 1 && (
                        <>
                          <button
                            onClick={() => setActiveImageIndex((prev) => (prev === 0 ? modalContent.images.length - 1 : prev - 1))}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={() => setActiveImageIndex((prev) => (prev === modalContent.images.length - 1 ? 0 : prev + 1))}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                      {activeImageIndex + 1} / {modalContent.images.length}
                    </div>
                  </div>
                  <p className="text-center text-gray-500 text-sm mt-2">Click image to enlarge</p>
                </div>
              ) : (
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <p className="text-gray-500 italic">No images available for this project.</p>
                </div>
              )}

              {/* Technologies */}
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {modalContent.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-blue-500/30 py-2 px-4 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {enlargedImage && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-60 cursor-zoom-out p-4"
            onClick={() => setEnlargedImage(null)}
          >
            <img
              src={enlargedImage}
              alt="Enlarged project screenshot"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
            <div className="absolute top-4 right-4 text-white/60 text-sm">
              Click to close
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
