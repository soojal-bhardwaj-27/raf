import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { X } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  state: string;
  degree: string;
  otherDegree?: string;
}

const degrees = ['B.Tech', 'BBA', 'MBA', 'LLB', 'Other'];

const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    state: '',
    degree: '',
    otherDegree: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const queryParams = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      queryParams.append(key, value);
    });

    window.location.href = `/apply?${queryParams.toString()}`;
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 animate-fade-up transition-all duration-500">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">Apply Now</h2>
          <p className="text-sm text-gray-500 mb-4">Fill out the form to start your journey</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              pattern="[A-Za-z ]{3,50}"
              title="Name should be between 3 and 50 characters and contain only letters"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              pattern="[A-Za-z ]{2,50}"
              title="Please enter a valid state name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <select
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none col-span-1 sm:col-span-2"
            >
              <option value="">Select Degree</option>
              {degrees.map(degree => (
                <option key={degree} value={degree}>{degree}</option>
              ))}
            </select>
            {formData.degree === 'Other' && (
              <input
                type="text"
                name="otherDegree"
                placeholder="Please specify your degree"
                value={formData.otherDegree}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none col-span-1 sm:col-span-2"
              />
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-3 rounded-lg font-medium transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionPopup;
