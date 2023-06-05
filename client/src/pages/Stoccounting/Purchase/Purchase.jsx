import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Purchase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddTransaksi = () => {
    // Logika untuk menambahkan transaksi baru
    // ...
  };

  const handleUpdateTransaksi = (transaksiId) => {
    // Logika untuk mengupdate transaksi berdasarkan ID
    // ...
  };

  const handleDeleteTransaksi = (transaksiId) => {
    // Logika untuk menghapus transaksi berdasarkan ID
    // ...
  };

  // Filter data berdasarkan searchQuery
  const filteredData = data.filter((transaksi) =>
  Object.values(transaksi).some((value) =>
    value.toLowerCase().includes(searchQuery.toLowerCase())
  )
);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari transaksi..."
            className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTransaksi}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Tambah Transaksi
          </button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nomor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tanggal Pembelian
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Keterangan
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nominal Pembelian
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredData.map((transaksi) => (
            <tr key={transaksi._id}>
              <td className="px-6 py-4 whitespace-nowrap">{transaksi._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{transaksi.tgl_beli}</td>
              <td className="px-6 py-4 whitespace-nowrap">{transaksi.keterangan}</td>
              <td className="px-6 py-4 whitespace-nowrap">{transaksi.jml_beli}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleUpdateTransaksi(transaksi._id)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleDeleteTransaksi(transaksi._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Purchase;