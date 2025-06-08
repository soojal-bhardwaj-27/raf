import React from 'react';
import { Link } from 'react-router-dom';

interface SideNavbarProps {
  onNavLinkClick?: () => void;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ onNavLinkClick }) => {
  const handleLinkClick = () => {
    if (onNavLinkClick) {
      onNavLinkClick();
    }
  };

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 shadow-lg z-40">
      <div className="text-2xl font-bold mb-6">Schools</div>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/engineering" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleLinkClick}>Engineering</Link>
          </li>
          <li className="mb-2">
            <Link to="/law" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleLinkClick}>Law</Link>
          </li>
          <li className="mb-2">
            <Link to="/pharmacy" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleLinkClick}>Pharmacy</Link>
          </li>
          <li className="mb-2">
            <Link to="/management" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleLinkClick}>Management</Link>
          </li>
          <li className="mb-2">
            <Link to="/basic-applied-science" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleLinkClick}>Basic Applied Science</Link>
          </li>
          <li className="mb-2">
            <Link to="/agriculture" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleLinkClick}>Agriculture</Link>
          </li>
          <li className="mb-2">
            <Link to="/design" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleLinkClick}>Humanities</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;