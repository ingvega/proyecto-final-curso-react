import React from 'react';
import { BarChart, Bar, Label, XAxis, YAxis, Tooltip, Legend, 
    ResponsiveContainer, CartesianGrid } from 'recharts';
import { sales } from '../data/sales';
import '../styles/styles.css';

const SalesChart=()=>{
    return (
        <ResponsiveContainer className="contenedor-responsive">
            <BarChart data={sales}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="month">
                    <Label value="Cantidad" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="amount" fill="#82ca9d"/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SalesChart;