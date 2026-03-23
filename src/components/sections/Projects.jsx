/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import Modal from "./Modal";
import BrgyTracking1 from "../../assets/images/brgy_tracking_1.jpg";
import BrgyTracking2 from "../../assets/images/brgy_tracking_2.jpg";
import HCCPortal4 from "../../assets/images/hcc_portal_4.png";
import HCCPortal1 from "../../assets/images/hcc_portal_1.png";
import HCCPortal2 from "../../assets/images/hcc_portal_2.png";
import HCCPortal3 from "../../assets/images/hcc_portal_3.png";
import Locker1 from "../../assets/images/automated_locker_1.png";
import Locker2 from "../../assets/images/automated_locker_2.png";
import Locker3 from "../../assets/images/automated_locker_3.jpg";
import Locker4 from "../../assets/images/automated_locker_4.jpg";
import Locker5 from "../../assets/images/automated_locker_5.jpg";
import Locker6 from "../../assets/images/automated_locker_6.jpg";
import BusFare1 from "../../assets/images/bus_fare_1.png";
import BusFare2 from "../../assets/images/bus_fare_2.png";
import BusFare3 from "../../assets/images/bus_fare_3.png";

export const Projects = () => {
  const [modalContent, setModalContent] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const projects = [
    {
      title: "Bus Fare Management System",
      description:
        "Took over an existing fare tracking system and improved its reliability, features, and day-to-day usability for a local transportation business.",
      tech: ["PHP", "JavaScript", "MySQL", "Bootstrap", "Sunmi API", "Bug Fixing"],
      details: `**Overview**
A fare tracking system used by a local transportation business needed fixes and improvements to better support daily operations.

**What I Worked On**
* Reviewed and debugged the existing codebase to restore core functionality
* Improved fare-related workflows and overall system stability
* Added passenger logging enhancements and adjustable fare options
* Integrated Sunmi printer-scanner devices for ticket printing and QR scanning
* Improved maintainability and usability based on client feedback

**Stack**
* PHP
* JavaScript
* MySQL
* Bootstrap
* Sunmi API

**Outcome**
* Restored and improved an existing operational system
* Added practical features that supported transport-related workflows
* Made the system easier to use and maintain over time`,
      images: [BusFare1, BusFare2, BusFare3],
      featured: true,
    },
    {
      title: "HCC Student Portal",
      description:
        "Built a student administration portal for managing records, enrollment, and user access in a more organized and reliable way.",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Database Design"],
      details: `**Overview**
A student portal was developed to support student data management, enrollment workflows, and academic record handling.

**What I Built**
* Designed and implemented the portal using PHP and MySQL
* Built modules for student data, enrollment, and academic records
* Added authentication and role-based access control for secure usage
* Optimized database queries for better performance and reliability
* Created an interface that supported day-to-day administrative use

**Stack**
* PHP
* MySQL
* JavaScript
* Bootstrap

**Outcome**
* Delivered a structured system for managing student administration tasks
* Improved access to student records and core portal functions
* Built a reliable database-driven tool for academic workflows`,
      images: [HCCPortal4, HCCPortal1, HCCPortal2, HCCPortal3],
      featured: true,
    },
    {
      title: "Barangay Information Tracking System",
      description:
        "A centralized web application for managing household, resident, and official records in a local barangay.",
      tech: ["PHP", "JavaScript", "MySQL", "Full-Stack Development"],
      details: `**Overview**
A web-based tracking system built to help manage barangay information in a more organized way.

**What I Worked On**
* Developed features for managing resident, household, and service-related records
* Improved data organization and accessibility for authorized users
* Helped streamline workflows related to local information management

**Stack**
* PHP
* JavaScript
* MySQL

**Outcome**
* Supported more efficient handling of community-related records
* Improved accessibility of stored information for administrative use`,
      images: [BrgyTracking1, BrgyTracking2],
    },
    {
      title: "Automated Coin Locker",
      description:
        "A capstone project combining software and hardware for secure locker access and user interaction.",
      tech: ["Java", "Arduino", "Raspberry Pi"],
      details: `**Overview**
An automated locker system built as a capstone project using hardware-software integration.

**What I Worked On**
* Led the programming side of the project
* Developed the graphical interface in Java
* Used Raspberry Pi for touchscreen interaction
* Programmed Arduino for locker control and hardware feedback

**Stack**
* Java
* Arduino
* Raspberry Pi

**Outcome**
* Delivered a working prototype that demonstrated secure and responsive locker operation`,
      images: [Locker1, Locker2, Locker3, Locker4, Locker5, Locker6],
    },
  ];

  const renderDetails = (text) => {
    const lines = text.split("\n");
    const elements = [];
    let currentList = [];

    const flushList = (keyPrefix) => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`${keyPrefix}-list`} className="list-disc pl-5 mb-4 space-y-1">
            {currentList.map((item, idx) => (
              <li key={`${keyPrefix}-item-${idx}`} className="text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        flushList(index);
        elements.push(
          <h4
            key={`heading-${index}`}
            className="text-lg font-semibold text-cyan-400 mt-5 mb-2"
          >
            {line.replace(/\*\*/g, "")}
          </h4>
        );
      } else if (line.startsWith("* ")) {
        currentList.push(line.replace("* ", ""));
      } else if (line.trim() === "") {
        flushList(index);
      } else {
        flushList(index);
        elements.push(
          <p key={`paragraph-${index}`} className="text-gray-300 mb-3 leading-relaxed">
            {line}
          </p>
        );
      }
    });

    flushList("final");
    return elements;
  };

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [projects]
  );

  const otherProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    [projects]
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Work
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            A selection of systems I’ve built, improved, or worked on — with a
            focus on practical web applications, admin tools, and database-driven
            workflows.
          </p>

          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition"
                >
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, key) => (
                      <span
                        key={key}
                        className="py-1 px-3 rounded-full text-sm bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setModalContent(project);
                      setActiveImageIndex(0);
                      setEnlargedImage(null);
                    }}
                    className="transition-colors my-4 font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    View Project →
                  </button>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, idx) => (
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
                  <button
                    onClick={() => {
                      setModalContent(project);
                      setActiveImageIndex(0);
                      setEnlargedImage(null);
                    }}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <Modal
        isOpen={modalContent !== null}
        onClose={() => {
          setModalContent(null);
          setEnlargedImage(null);
        }}
      >
        {modalContent && (
          <div className="max-h-[80vh] overflow-y-auto pr-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {modalContent.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {modalContent.description}
              </p>
            </div>

            <div className="mb-8">
              {renderDetails(modalContent.details || modalContent.description)}
            </div>

            {modalContent.images && modalContent.images.length > 0 ? (
              <div className="mt-6 mb-8">
                <div className="relative bg-gray-800 rounded-lg overflow-hidden border border-white/10">
                  <div className="relative h-80">
                    <img
                      src={modalContent.images[activeImageIndex]}
                      alt={`${modalContent.title} screenshot ${activeImageIndex + 1}`}
                      className="w-full h-full object-contain cursor-pointer"
                      onClick={() =>
                        setEnlargedImage(modalContent.images[activeImageIndex])
                      }
                    />

                    {modalContent.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setActiveImageIndex((prev) =>
                              prev === 0 ? modalContent.images.length - 1 : prev - 1
                            )
                          }
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                          aria-label="Previous image"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={() =>
                            setActiveImageIndex((prev) =>
                              prev === modalContent.images.length - 1 ? 0 : prev + 1
                            )
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                          aria-label="Next image"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                    {activeImageIndex + 1} / {modalContent.images.length}
                  </div>
                </div>

                <p className="text-center text-gray-500 text-sm mt-2">
                  Click image to enlarge
                </p>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-8 text-center mb-8 border border-white/10">
                <p className="text-gray-500 italic">
                  No images available for this project.
                </p>
              </div>
            )}

            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">
                Technologies Used
              </h4>
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
        )}

        {enlargedImage && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60] cursor-zoom-out p-4"
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