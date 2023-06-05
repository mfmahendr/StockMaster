import logo from './logo.svg';
import DashboardStoccounting from './pages/Stoccounting/Dashboard/DashboardStoccounting';
import Sale from './pages/Stoccounting/Sale/Sale';
import Purchase from './pages/Stoccounting/Purchase/Purchase';
import ErrorBoundary from './pages/ErrorBoundary';
import Home from './pages/Home';

import Header from './component/Header';
import SideBar from './component/SideBar';

import './App.css';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import ReportForm from './pages/Stoccounting/Report/ReportForm';


ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  const [currentApp, setCurrentApp] = useState('stoccounting'); // Ganti dengan nilai default yang sesuai

  return (
    <>
      <Router>
        <div className="container">
        <ErrorBoundary>
          <Header />
          <SideBar currentApp={currentApp} setCurrentApp={setCurrentApp} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stoccounting/dashboard" element={<DashboardStoccounting />} />
            {/* <Route path="/inventory-management" element={<InventoryManagement />} /> */}

            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}

            <Route path="/stoccounting/penjualan" element={<Sale />} />
            <Route path="/stoccounting/pembelian" element={<Purchase />} />
            <Route path="/stoccounting/report" element={<ReportForm />} />
            
            {/* <Route path="/input-data" element={<AddData />} />
            <Route path="/update-data/update/:id" element={<UpdateSales />} /> */}
          </Routes>
        </ErrorBoundary>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}


export default App;