import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const ReportForm = () => {
  const [jenisJurnal, setJenisJurnal] = useState('');
  const [bulan, setBulan] = useState('');
  const [tahun, setTahun] = useState('');

  const handleJenisJurnalChange = (event) => {
    setJenisJurnal(event.target.value);
  };

  const handleBulanChange = (event) => {
    setBulan(event.target.value);
  };

  const handleTahunChange = (event) => {
    setTahun(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lakukan sesuatu dengan data yang diinputkan
    console.log('Jenis Jurnal:', jenisJurnal);
    console.log('Periode Bulan:', bulan);
    console.log('Periode Tahun:', tahun);

    // Reset input form setelah submit
    setJenisJurnal('');
    setBulan('');
    setTahun('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label className="block mb-2">
          Jenis Jurnal:
          <select
            value={jenisJurnal}
            onChange={handleJenisJurnalChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Pilih jenis jurnal</option>
            <option value="pembelian">Pembelian</option>
            <option value="penjualan">Penjualan</option>
            <option value="labarugi">Laba Rugi</option>
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Bulan:
          <input
            type="text"
            value={bulan}
            onChange={handleBulanChange}
            placeholder="Masukkan bulan"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Tahun:
          <input
            type="text"
            value={tahun}
            onChange={handleTahunChange}
            placeholder="Masukkan tahun"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ReportForm;