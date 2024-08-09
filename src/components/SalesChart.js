import React from 'react';
import { BarChart, Bar, Label, XAxis, YAxis, Tooltip, Legend, 
    ResponsiveContainer, CartesianGrid } from 'recharts';
import '../styles/styles.css';

const SalesChart=({salesData})=>{
    return (
        <ResponsiveContainer className="contenedor-responsive">
            <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="producto">                                    
                </XAxis>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="cantidad" fill="#82ca9d"/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SalesChart;