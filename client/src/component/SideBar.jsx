import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ currentApp }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Menu items based on currentApp
  const menuItems = {
    stoccounting: [
      { name: 'Dashboard', path: '/stoccounting' },
      { name: 'Penjualan', path: '/stoccounting/penjualan' },
      { name: 'Pembelian', path: '/stoccounting/pembelian' },
      { name: 'Laporan', path: '/stoccounting/laporan' },
      { name: 'Kembali', path: '/' }
    ],
    inventory: [
      { name: 'Dashboard', path: '/' },
      { name: 'Pencatatan', path: '/pencatatan' },
      { name: 'Kembali', path: '/' }
    ]
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header flex items-center justify-between py-2 px-4">
        <button
          className="sidebar-toggle focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out rounded-lg p-1"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="w-6 h-6 text-white hover:text-blue-500"
          />
        </button>
        <h3 className="text-lg font-bold">My App</h3>
      </div>
      <ul className="sidebar-menu py-2 px-4">
        {menuItems[currentApp].map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="text-gray-600 hover:text-blue-500 py-1 transition duration-300 ease-in-out"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;