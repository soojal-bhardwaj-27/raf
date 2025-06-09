// import React from 'react';

const Pharmacy = () => {
  return (
    <div id="pharmacy" style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">School of Pharmacy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">About the School of Pharmacy</h2>
          <p className="text-lg mb-2">
            The School of Pharmacy at Raffles University is dedicated to providing high-quality education and fostering research in pharmaceutical sciences. Our programs are designed to equip students with the knowledge and skills necessary to excel in various fields of pharmacy, including drug discovery, development, manufacturing, and patient care.
          </p>
          <p className="text-lg mb-2">
            We emphasize a holistic approach to learning, combining rigorous academic coursework with practical training and research opportunities. Our faculty comprises experienced professionals and researchers who are committed to guiding students toward successful careers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Programmes Offered</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Bachelor of Pharmacy (B.Pharm)</li>
            <li>Master of Pharmacy (M.Pharm) - Specializations in Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmacognosy</li>
            <li>Doctor of Philosophy (Ph.D.) in Pharmaceutical Sciences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Facilities and Infrastructure</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Well-equipped laboratories for various pharmaceutical disciplines (e.g., Pharmacology, Pharmaceutical Analysis, Pharmaceutics, Medicinal Chemistry, Pharmacognosy)</li>
            <li>Central Instrumentation Facility with advanced analytical instruments</li>
            <li>Herbal Garden for cultivation and study of medicinal plants</li>
            <li>Animal House for preclinical studies (CPCSEA approved)</li>
            <li>Computer Lab with specialized software for drug design and data analysis</li>
            <li>Departmental Library with a rich collection of books, journals, and e-resources</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Research and Innovation</h2>
          <p className="text-lg mb-2">
            The School of Pharmacy is actively involved in research across various areas of pharmaceutical sciences. Our faculty and students contribute to advancements in drug delivery systems, natural product research, pharmacological screening, and clinical pharmacy. We encourage interdisciplinary collaborations and participation in national and international conferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Career Opportunities</h2>
          <p className="text-lg mb-2">
            Graduates from the School of Pharmacy are well-prepared for diverse career paths in the pharmaceutical industry, hospitals, research organizations, regulatory bodies, and academia. Potential roles include:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Pharmacist in hospitals or community pharmacies</li>
            <li>Drug Inspector or Regulatory Affairs Officer</li>
            <li>Research Scientist in pharmaceutical companies</li>
            <li>Production and Quality Control/Assurance Executive</li>
            <li>Medical Science Liaison</li>
            <li>Academician and Researcher</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Pharmacy;