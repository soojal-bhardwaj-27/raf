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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/70 backdrop-blur-md">
      <div 
        className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl max-w-xl w-full p-8 animate-fade-up transition-all duration-500 hover:shadow-blue-200/50"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          transform: 'translateZ(0)'
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 bg-white text-gray-500 hover:text-red-500 transition-colors rounded-full p-2 shadow-lg hover:shadow-xl transform hover:scale-110 duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Apply Now</h2>
            <p className="text-gray-600 text-lg">Fill out the form to start your journey</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                pattern="[A-Za-z ]{3,50}"
                title="Name should be between 3 and 50 characters and contain only letters"
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white group-hover:border-blue-300"
              />
            </div>
            <div className="group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white group-hover:border-blue-300"
              />
            </div>
            <div className="group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white group-hover:border-blue-300"
              />
            </div>
            <div className="group">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
                pattern="[A-Za-z ]{2,50}"
                title="Please enter a valid state name"
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white group-hover:border-blue-300"
              />
            </div>
            <div className="group col-span-1 sm:col-span-2">
              <select
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white group-hover:border-blue-300"
              >
                <option value="">Select Degree</option>
                {degrees.map(degree => (
                  <option key={degree} value={degree}>{degree}</option>
                ))}
              </select>
            </div>
            {formData.degree === 'Other' && (
              <div className="group col-span-1 sm:col-span-2">
                <input
                  type="text"
                  name="otherDegree"
                  placeholder="Please specify your degree"
                  value={formData.otherDegree}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white group-hover:border-blue-300"
                />
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
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
