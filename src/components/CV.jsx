import React from 'react';

function CV() {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Company",
      duration: "Jan 2022 - Present",
      description: "Developed and maintained web applications using React and Tailwind CSS."
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Design Studio",
      duration: "Jun 2020 - Dec 2021",
      description: "Designed user interfaces and experiences for mobile and web applications."
    },
    // Add more experiences here
  ];

  const education = [
    {
      id: 1,
      degree: "B.Sc. in Computer Science",
      institution: "University Name",
      duration: "2017 - 2021",
    },
    // Add more education details here
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Figma"];

  return (
    <section id="cv" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Curriculum Vitae</h2>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Experience</h3>
          <div className="mt-6 space-y-6">
            {experiences.map((experience) => (
              <div key={experience.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900">{experience.title}</h4>
                <p className="text-gray-600">{experience.company} - {experience.duration}</p>
                <p className="mt-2 text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
          <div className="mt-6 space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                <p className="text-gray-600">{edu.institution} - {edu.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Skills</h3>
          <div className="mt-6 flex flex-wrap space-x-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/path-to-your-cv.pdf" className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default CV;
