import React from 'react';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import { salesData } from '../data/salesData';
import '../styles/styles.css';

const ExportButtons =()=>{
    //Exportación a excel
    const handleExcelExport = ()=>{
        const ws = XLSX.utils.json_to_sheet(salesData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb,ws,'Ventas');
        XLSX.writeFile(wb,'ventas.xlsx');
    };

    return (
        <div className='buttons-container'>
            <button onClick={handleExcelExport} className="btn-export">
                Exportar a excel
            </button>
            <CSVLink data={salesData} filename="ventas.csv" className='btn-export'>
                Exportar a CSV
            </CSVLink>
        </div>
    );
};

export default ExportButtons;
