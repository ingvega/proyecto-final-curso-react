import React, { useState } from 'react'
import logo from './logo.svg';


import './App.css';
import './styles/styles.css';
import SalesTable from './components/SalesTable';
import SalesForm from './components/SalesForm';
import SalesChart from './components/SalesChart';
import ExportButtons from './components/ExportButtons';
import { ventas } from './data/ventas';

function App() {
  
  const [salesData,setSalesData]=useState(ventas);
  
  const actualizarEstado=(nuevaVenta)=>{
    
    setSalesData(salesData=>{return[...salesData,nuevaVenta]});
    console.log(nuevaVenta);
    console.log(salesData);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>Aplicación de ventas</a>
      </header>
      
        <SalesForm actualizarEstado={actualizarEstado} />
        <ExportButtons salesData={salesData}/>
        <SalesTable salesData={salesData}/>
        <SalesChart salesData={salesData}/>
      
    </div>
  );
}

export default App;
