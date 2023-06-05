import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <img src="gambar1.jpg" alt="Gambar 1" className="w-32 h-32 mb-4" />
          <h2 className="text-lg font-bold mb-2">Stoccounting</h2>
          <p className="text-gray-600 mb-4">Lihat keuanganmu di sini</p>
          <Link
            to="/stoccounting/dashboard"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Go to Stoccounting
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <img src="gambar2.jpg" alt="Gambar 2" className="w-32 h-32 mb-4" />
          <h2 className="text-lg font-bold mb-2">Inventory Management</h2>
          <p className="text-gray-600 mb-4">Kelola inventaris dengan mudah</p>
          <Link
            to="/inventory-management"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Go to Inventory Management
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <img src="gambar3.jpg" alt="Gambar 3" className="w-32 h-32 mb-4" />
          <h2 className="text-lg font-bold mb-2">Other Menu</h2>
          <p className="text-gray-600 mb-4">Deskripsi menu lainnya</p>
          <Link
            to="/other-menu"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Go to Other Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
