// import React from "react";

const Agriculture = () => {
  return (
    <div id="agriculture" className="p-8 min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header Banner */}
      <div className="bg-green-800 text-white p-10 rounded-xl text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-3">School of Agriculture</h1>
        <h2 className="text-2xl font-semibold">RAFFLES UNIVERSITY, Neemrana</h2>
        <p className="mt-4 text-lg">Cultivating Knowledge for a Sustainable Future</p>
      </div>

      {/* Introduction */}
      <section className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-green-700 mb-4">Welcome to the Future of Agriculture</h3>
        <p className="text-lg leading-relaxed">
          The School of Agriculture at Raffles University Neemrana is dedicated to fostering innovation and excellence in agricultural education and research. We aim to equip students with the knowledge and skills necessary to address global challenges in food security, sustainable farming, and rural development.
        </p>
      </section>

      {/* Programs Offered */}
      <section className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-green-700 mb-6">Our Academic Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-semibold text-gray-700 mb-3">Bachelor of Science in Agriculture (B.Sc. Ag.)</h4>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
              <li>Agronomy</li>
              <li>Horticulture</li>
              <li>Soil Science</li>
              <li>Plant Pathology</li>
              <li>Agricultural Economics</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-700 mb-3">Diploma in Agricultural Sciences</h4>
            <p className="text-lg leading-relaxed">
              Our diploma program provides practical skills and knowledge for immediate entry into various agricultural sectors, focusing on:
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 mt-2">
              <li>Farm Management</li>
              <li>Crop Production</li>
              <li>Livestock Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-green-700 mb-6">Research and Innovation</h3>
        <p className="text-lg leading-relaxed mb-4">
          Our faculty and students are actively involved in research aimed at advancing agricultural practices and technologies. Key research areas include:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>Sustainable Farming Systems</li>
          <li>Crop Improvement and Biotechnology</li>
          <li>Precision Agriculture</li>
          <li>Pest and Disease Management</li>
          <li>Climate-Resilient Agriculture</li>
        </ul>
      </section>

      {/* Facilities */}
      <section className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-green-700 mb-6">Modern Facilities</h3>
        <p className="text-lg leading-relaxed mb-4">
          The School boasts state-of-the-art facilities to support hands-on learning and research:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>Experimental Farms and Greenhouses</li>
          <li>Advanced Soil and Plant Testing Laboratories</li>
          <li>Biotechnology and Tissue Culture Labs</li>
          <li>Agricultural Engineering Workshop</li>
          <li>Weather Station and Remote Sensing Lab</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="mt-12 max-w-4xl mx-auto p-8 bg-green-100 rounded-lg text-center shadow-md">
        <h3 className="text-3xl font-bold text-green-800 mb-4">Grow Your Future with Us!</h3>
        <p className="text-xl leading-relaxed mb-6">
          Join the School of Agriculture at Raffles University and contribute to a greener, more sustainable world.
        </p>
        <button className="px-8 py-4 bg-green-700 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Agriculture;