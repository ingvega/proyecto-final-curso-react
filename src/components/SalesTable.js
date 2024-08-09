import React from 'react';
import { useTable } from 'react-table';
import { usersData } from '../data/usersData';
import '../styles/styles.css';

const SalesTable = ()=>{
    const data = React.useMemo(()=>usersData,[]);
    const columns = React.useMemo(()=>[
            {Header: 'Clave', accessor: 'id'},
            {Header: 'Usuario', accessor: 'name'},
            {Header: 'Correo', accessor: 'email'},
            {Header: 'Edad', accessor: 'age'}
        ],[]);
    const {getTableProps, getTableBodyProps, headerGroups, rows, 
        prepareRow} = 
        useTable({columns,data});

    return (
        <table {...getTableProps()} className="data-table">
            <thead>
                {headerGroups.map(hg => (
                    <tr {...hg.getHeaderGroupProps()}>
                        {hg.headers.map(col=>(
                            <th {...col.getHeaderProps()}>
                                {col.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map( r => {
                    prepareRow(r);
                    return(
                        <tr {...r.getRowProps()}>
                            {r.cells.map(celda =>(
                            <td {...celda.getCellProps()}>
                                {celda.render('Cell')}
                            </td>
                        ))}
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export default SalesTable;
