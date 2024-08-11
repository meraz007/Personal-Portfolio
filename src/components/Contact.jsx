import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Contact</h2>
        <div className="mt-8 max-w-lg mx-auto">
          <form action="#" method="POST">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
              <input className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
