
const ZigZagSection = ({ title, text, image, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-8 py-12`}>
      <img src={image} alt={title} className="w-full md:w-1/2 rounded-xl shadow-lg" />
      <div className="w-full md:w-1/2">
        <h3 className="text-3xl font-bold text-blue-800 mb-4">{title}</h3>
        <p className="text-lg leading-relaxed text-gray-700">{text}</p>
      </div>
    </div>
  );
};

const Engineering = () => {
  return (
    <div
      id="engineering"
      className="p-8 min-h-screen bg-gray-50 font-sans text-gray-800"
      style={{
        backgroundImage: "url('/bg.png/')", // Update image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <div className="bg-blue-900 text-white p-10 rounded-xl text-center shadow-lg bg-opacity-90">
        <h1 className="text-5xl font-extrabold mb-3">School of Engineering</h1>
        <h2 className="text-2xl font-semibold">RAFFLES UNIVERSITY, Neemrana</h2>
        <p className="mt-4 text-lg">Innovating for a Sustainable Future</p>
      </div>

      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <ZigZagSection
          title="Welcome to Excellence in Engineering"
          text="At the School of Engineering, Raffles University Neemrana, we are dedicated to shaping future engineering leaders with strong academic and ethical foundations."
          image="/Welcome.png"
        />

        <ZigZagSection
          title="Comprehensive Programs"
          text="Offering B.Tech, BCA, and Diploma programs in various specializations to meet the evolving demands of the industry."
          image="/images/programs.jpg"
          reverse
        />

        <ZigZagSection
          title="State-of-the-Art Labs"
          text="Experience hands-on learning with modern labs in AI, robotics, mechanical design, and more."
          image="/images/labs.jpg"
        />
      </div>

      {/* Projects Section */}
      <section className="mt-20 max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-md bg-opacity-95">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">Innovative Student Projects</h3>
        <p className="text-lg text-center mb-6">Our students actively work on real-world problems through interdisciplinary projects.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/project1.jpg" className="rounded mb-4" />
            <h4 className="text-xl font-semibold">Autonomous Delivery Drone</h4>
            <p className="text-sm mt-2">Designed to deliver medical supplies in rural areas using GPS and IoT.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/project2.jpg" className="rounded mb-4" />
            <h4 className="text-xl font-semibold">Smart Water Monitoring</h4>
            <p className="text-sm mt-2">IoT-based real-time water quality monitoring system.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/project3.jpg" className="rounded mb-4" />
            <h4 className="text-xl font-semibold">AI Chatbot for Education</h4>
            <p className="text-sm mt-2">An AI-based assistant to support e-learning and resolve student queries.</p>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="mt-20 max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-md bg-opacity-95">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">Competitions & Achievements</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-3">
          <li>Winners of National Robotics Challenge 2024</li>
          <li>Finalists in Smart India Hackathon</li>
          <li>Top 10 in AI Innovation Expo, Delhi</li>
          <li>Best Paper Award at IEEE Student Conference</li>
        </ul>
      </section>

      {/* Memories Section */}
      <section className="mt-20 max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-md bg-opacity-95">
        <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">Memories & Campus Life</h3>
        <p className="text-center text-lg mb-8">Glimpses of life at Raffles University – vibrant, engaging, and unforgettable.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/memories1.jpg" className="rounded-lg shadow-md" />
          <img src="/images/memories2.jpg" className="rounded-lg shadow-md" />
          <img src="/images/memories3.jpg" className="rounded-lg shadow-md" />
          <img src="/images/memories4.jpg" className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 max-w-4xl mx-auto p-10 bg-blue-100 rounded-lg text-center shadow-md bg-opacity-95">
        <h3 className="text-3xl font-bold text-blue-800 mb-4">Ready to Engineer Your Future?</h3>
        <p className="text-xl leading-relaxed mb-6">
          Join Raffles University's School of Engineering and embark on a journey of innovation and excellence.
        </p>
        <button className="px-8 py-4 bg-blue-700 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Engineering;
