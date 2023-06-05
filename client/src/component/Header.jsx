import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleLogout = () => {
    // handle logout
    console.info('Logout');
  };

  return (
    <header className="bg-blue-500 py-4 px-6 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">StockMaster App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/penjualan" className="text-white">
              Penjualan
            </Link>
          </li>
          <li>
            <Link to="/input-data" className="text-white">
              Input Data
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
