import React from 'react';

function Projects() {
  const projects = [
    { id: 1, title: "Project One", description: "This is a description of project one.", imageUrl: "/path-to-image1.jpg" },
    { id: 2, title: "Project Two", description: "This is a description of project two.", imageUrl: "/path-to-image2.jpg" },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-md" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
