import React from 'react';
import { useTable, useSortBy } from 'react-table';
import '../styles/styles.css';

const SalesTable = ({salesData})=>{
    //const { state } = useContext(SalesContext);
    const sortBy = [];

    return (
        <table className="data-table">
            <thead>
                <th>Nombre del Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Fecha de venta</th>
            </thead>
            <tbody>
                {salesData.map( r => {
                    return(
                        <tr>
                            <td>{r.producto}</td>
                            <td>{r.cantidad}</td>
                            <td>{r.precio}</td>
                            <td>{r.fecha}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export default SalesTable;
