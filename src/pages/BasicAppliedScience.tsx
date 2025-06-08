
const BasicAppliedScience = () => {
  return (
    <div
      id="basic-applied-science"
      className="min-h-screen bg-cover bg-center flex flex-col items-center py-12 px-4"
      style={{
        backgroundImage: `url('https://www.impactio.com/blog/the-differences-in-basic-research-vs.-applied-research')`, // Replace with your image path
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold text-indigo-800 mb-6">School of Basic & Applied Science</h1>
        <p className="text-lg text-gray-700 mb-8">
          The School of Basic & Applied Science is dedicated to fostering a deep understanding of fundamental scientific principles and their practical applications. We aim to cultivate critical thinking, innovation, and research skills in our students, preparing them for diverse careers and advanced studies.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Programs Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium text-indigo-600 mb-2">Undergraduate Programs</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>B.Sc. in Physics</li>
                <li>B.Sc. in Chemistry</li>
                <li>B.Sc. in Mathematics</li>
                <li>B.Sc. in Biotechnology</li>
                <li>B.Sc. in Environmental Science</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium text-indigo-600 mb-2">Postgraduate Programs</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>M.Sc. in Physics</li>
                <li>M.Sc. in Chemistry</li>
                <li>M.Sc. in Mathematics</li>
                <li>M.Sc. in Biotechnology</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Research Areas</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our faculty and students are actively involved in cutting-edge research across various scientific disciplines. Key research areas include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
            <li>Nanomaterials and their applications</li>
            <li>Computational modeling and simulation</li>
            <li>Environmental remediation and sustainability</li>
            <li>Genomic and proteomic studies</li>
            <li>Theoretical physics and astrophysics</li>
            <li>Drug discovery and development</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Facilities</h2>
          <p className="text-lg text-gray-700 mb-4">
            The school is equipped with state-of-the-art laboratories and research facilities to support hands-on learning and advanced research:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
            <li>Advanced Physics Lab (Spectroscopy, X-ray Diffraction)</li>
            <li>Modern Chemistry Lab (Chromatography, NMR)</li>
            <li>Biotechnology Lab (PCR, Gel Electrophoresis, Cell Culture)</li>
            <li>Computer Science Lab with high-performance computing resources</li>
            <li>Dedicated research cubicles for postgraduate students</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Why Choose Basic & Applied Science at Our University?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Choosing the School of Basic & Applied Science means joining a vibrant academic community where curiosity is encouraged, and scientific inquiry is celebrated. Our experienced faculty, interdisciplinary approach, and strong industry connections ensure that our graduates are well-prepared for successful careers in academia, research, and various industries.
          </p>
          <button className="mt-6 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
            Apply Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default BasicAppliedScience;