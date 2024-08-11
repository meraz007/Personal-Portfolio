import React from 'react';

function Hero() {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}>
      <div className="container mx-auto px-6 h-full flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">Hello, I'm [Your Name]</h1>
          <p className="text-2xl text-white mt-4">Web Developer | Designer</p>
          <a href="#projects" className="mt-8 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600">View My Work</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
