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
      "A PHP-based system for tracking and managing fare collections, routes, and passenger logs.",
    tech: ["JavaScript", "PHP", "Java", "Bootstrap", "Sunmi API", "Full-Stack Development"],
    details:
      "* Hired to take over and enhance an existing fare tracking system for a local transportation service. \n* Reviewed and debugged legacy code to restore core functionality and ensure system stability. \n * Added new features such as passenger logging enhancements and adjustable fare options. \n* Integrated with Sunmi printer-scanner devices to enable automated ticket printing and QR scanning. \nImproved code maintainability and usability based on client feedback.",
    images: [
    ],
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
        "A complete student information system with login, enrollment tracking, and grades viewing, built with PHP and SQL.",
      tech: ["MySQL", "JavaScript", "PHP", "Bootstrap", "Full-Stack Development"],
      details:
        "* Designed and implemented a feature-rich student portal for HCC using PHP and SQL. \n* Built modules for managing student data, enrollment, and academic records.\n* Integrated user authentication and role-based access control for secure usage.\n* Optimized database queries to ensure fast and reliable performance.\n* Delivered an intuitive and efficient tool for student administration.",
      images: [HCCPortal4, HCCPortal1, HCCPortal2, HCCPortal3],
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
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setModalContent(project)}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
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
          <div>
            <h3 className="text-black text-xl font-bold mb-2">{modalContent.title}</h3>
            <p className="text-gray-700 mb-4">
              {(modalContent.details || modalContent.description).split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>

            {modalContent.images && modalContent.images.length > 0 ? (
              <div className="mt-4 flex flex-col items-center">
                <div className="relative w-96 h-56 overflow-hidden rounded-md">
                  <img
                    src={modalContent.images[activeImageIndex]}
                    alt={`${modalContent.title} screenshot ${activeImageIndex + 1}`}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={() => setEnlargedImage(modalContent.images[activeImageIndex])}
                  />
                  {/* Left arrow */}
                  {modalContent.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveImageIndex((prev) => (prev === 0 ? modalContent.images.length - 1 : prev - 1))}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-1"
                      >
                        ‹
                      </button>
                      {/* Right arrow */}
                      <button
                        onClick={() => setActiveImageIndex((prev) => (prev === modalContent.images.length - 1 ? 0 : prev + 1))}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-1"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">{`${activeImageIndex + 1} / ${modalContent.images.length}`}</p>
              </div>
            ) : (
              <p className="italic text-gray-500 mt-4">No images available for this project.</p>
            )}

            <div className="flex flex-wrap gap-2">
              {modalContent.tech.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {enlargedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-60 cursor-zoom-out"
            onClick={() => setEnlargedImage(null)}
          >
            <img
              src={enlargedImage}
              alt="Enlarged project screenshot"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
        )}

      </Modal>
    </section>
  );
};
