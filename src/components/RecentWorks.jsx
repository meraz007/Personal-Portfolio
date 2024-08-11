import React from 'react';

function RecentWorks() {
  const works = [
    {
      id: 1,
      title: "Modern Portfolio Website",
      description: "A sleek and responsive portfolio website using React and Tailwind CSS.",
      imageUrl: "/path-to-image1.jpg",
      link: "https://example.com/project1"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "An e-commerce platform with custom payment integration and user authentication.",
      imageUrl: "/path-to-image2.jpg",
      link: "https://example.com/project2"
    },
    // Add more recent works here
  ];

  return (
    <section id="recent-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {works.map(work => (
            <div key={work.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={work.imageUrl} alt={work.title} className="w-full h-64 object-cover rounded-md" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">{work.title}</h3>
              <p className="mt-2 text-gray-600">{work.description}</p>
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:text-blue-700">
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;
