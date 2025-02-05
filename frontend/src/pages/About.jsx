//import React from 'react';
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <header className="bg-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-4xl font-bold">About Campus Conversation</h1>
       
        <Link to="/home" className="text-white underline hover:text-gray-200">
            Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        {/* Mission Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            The Campus Conversations is dedicated to advancing educational excellence, supporting student success, and promoting research and innovation within our community. We strive to create a supportive environment where students and faculty can thrive and make a lasting impact.
          </p>
        </section>

        {/* Goals Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Goals</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Enhance the quality of education and academic programs.</li>
            <li>Support diverse and inclusive learning environments.</li>
            <li>Facilitate student success and career readiness.</li>
            <li>Encourage community engagement and collaboration.</li>
            <li>Promote innovation and research excellence.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">Have questions? Reach out to our team for more information.</p>
          <div>
            <p><strong>Email:</strong> info@CampusConversations.edu</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Address:</strong> 123 University Ave, City, Country</p>
          </div>
        </section>

        {/* Quick Navigation Section */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Quick Links</h2>
          <nav className="space-y-2">
            <a href="#mission" className="text-blue-500 hover:underline">Mission</a><br/>
            <a href="#goals" className="text-blue-500 hover:underline">Goals</a><br/>
            <a href="#contact" className="text-blue-500 hover:underline">Contact Us</a>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default About;
