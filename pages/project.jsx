import Image from 'next/image';
import { useState } from 'react';

export default function ProjectPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open modal with the clicked image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  // List of projects
  const projects = [
    {
      title: "Facility Work Order",
      description: "The Facility Work Order Management System streamlines maintenance and service requests by allowing admins to manage users, assign roles, and configure department-specific approval workflows. Requestors can submit work orders, upload attachments, and track their status in real time, while each department follows a customized approval chain to ensure efficient processing. This system enhances accountability, optimizes workflow management, and improves overall operational efficiency.",
      image: "/Images/FacilityWorkOrder.jpg",
      technologies: ["Next.js", "Laravel", "API", "IIS", "MS SQL"],
    },
    {
      title: "Quality System",
      description: "The Quality System ensures efficient material tracking and inspection. It receives materials from the packing department using a scanner, where users scan packing labels to mark materials as received in the database. During inspection, users fill out an Outgoing Inspection Report (OIR), which undergoes an approval process. Once approved, the materials are scanned again for transfer to the Finished Goods area, ensuring accuracy, traceability, and quality control throughout the process.",
      image: "/Images/QualitySystem.jpg",
      technologies: ["Next.js", "Laravel", "API", "IIS", "MS SQL"],
    },
    {
      title: "Output Monitoring System",
      description: "The Output Monitoring System provides real-time data visualization using graphs for easy interpretation. It leverages WebSockets to update data dynamically without requiring a page refresh, ensuring seamless monitoring. The system translates raw data into intuitive graphical representations, allowing users to track performance and trends efficiently.",
      image: "/Images/ProductionOutputMonitoring.jpg",
      technologies: ["Next.js", "Laravel", "API", "Websocket", "Node.js", "Nginx", "PM2", "MS SQL"],
    },
    {
      title: "Todo List",
      description: "The Todo List System offers a flexible task management experience, allowing users to add custom columns beyond the standard To-Do, Ongoing, and Done. Users can personalize column colors to match their preferences and utilize drag-and-drop functionality for seamless task organization. This system enhances productivity by providing a fully customizable and visually intuitive workflow.",
      image: "/Images/TodoList.png",
      technologies: ["PHP", "HTML", "Bootstrap", "Dragula.js", "JQuery", "MySQL"],
    },
  ];

  return (
    <div id="work" className="min-h-screen flex flex-col gap-8 items-center px-7 md:px-32 pt-24 text-center">
      <div className="text-slate-200 text-4xl font-bold">Some of My Work</div>

      {projects.map((project, index) => (
        <div key={index} className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} w-full mt-16 text-[#64ffda] relative`}>
          {/* Desktop Image */}
          <div
            className="hidden lg:block border rounded-lg shadow-md shadow-[#64ffda] h-64 w-[460px] absolute top-1/2 -translate-y-1/2 cursor-pointer"
            style={{ [index % 2 === 0 ? "left" : "right"]: 0 }}
            onClick={() => openModal(project.image)}
          >
            <Image src={project.image} alt={project.title} fill />
          </div>

          <div className={`flex flex-col gap-4 ${index % 2 === 0 ? "text-right items-end" : "text-left"}`}>
            <span className="text-sm font-semibold">Feature Project</span>
            <span className="text-2xl md:text-xl font-bold text-white hover:text-[#64ffda]">
              {project.title}
            </span>
            <span className="bg-[#0b172e] rounded-md w-[500px] z-[1] shadow-[#64ffda] shadow p-3 text-slate-400 text-justify">
              {project.description}
            </span>

            {/* Mobile Image */}
            <div className="border h-auto w-fit block lg:hidden cursor-pointer" onClick={() => openModal(project.image)}>
              <Image src={project.image} alt={project.title} height={500} width={500} />
            </div>

            {/* Technologies */}
            <div>
              <ul className={`flex gap-3 text-slate-400 flex-wrap ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                {project.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="relative bg-[#0b172e] p-4 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="absolute top-2 right-2 text-white text-xl hover:text-[#64ffda]" onClick={closeModal}>
              ✖
            </button>

            {/* Enlarged Image */}
            <Image src={selectedImage} alt="Enlarged Project" width={800} height={600} className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
