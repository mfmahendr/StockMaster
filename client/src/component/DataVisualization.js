import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';

const DataVisualization = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const pembelianResponse = await fetch('/api/pembelian');
        const pembelianData = await pembelianResponse.json();
  
        const penjualanResponse = await fetch('/api/penjualan');
        const penjualanData = await penjualanResponse.json();
  
        setData({ pembelian: pembelianData, penjualan: penjualanData });
      } catch (error) {
        console.error('Gagal mendapatkan data:', error);
      }
    };
  
    useEffect(() => {
      if (data) {
        createChart();
      }
    }, [data]);
  
    const createChart = () => {
      const labels = data.pembelian.map((item) => item.tgl_beli);
      const pembelianData = data.pembelian.map((item) => item.jml_beli);
      const penjualanData = data.penjualan.map((item) => item.jml_jual);
  
      const ctx = document.getElementById('chart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Pembelian',
              data: pembelianData,
              borderColor: 'blue',
              fill: false,
            },
            {
              label: 'Penjualan',
              data: penjualanData,
              borderColor: 'red',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Tanggal',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Jumlah',
              },
            },
          },
        },
      });
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-lg p-4">
          <canvas id="chart"></canvas>
        </div>
      </div>
    );
  };
  
export default DataVisualization;
  