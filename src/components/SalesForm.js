import React, { useState, useContext } from 'react';
import { SalesContext } from '../context/SalesContext';
import { useForm } from 'react-hook-form';
import { yupResolver  } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../styles/styles.css';

//esquema de validación
const valSchema=yup.object().shape({
    producto: yup.string()
        .required('El nombre del producto es requerido')
        .min(3,'El nombre del producto debe tener al menos 3 caracteres'),
    cantidad: yup.string()
        .required('La cantidad debe ser numérica'),
    precio: yup.string()
        .required('El precio debe ser numérico'),
    fecha: yup.string()
        .required("Ingresa un fecha válida")
        /*.matches(
            /^[0-9]{2}[\\/][0-9]{2}[\\/][0-9]{4}$/,
            "Fecha no válida"
          )*/
        //.required('La fecha no cumple con el formato DD/MM/AAAA')        
        });

const SalesForm=({actualizarEstado})=>{
    const [producto, setProducto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [fecha, setFecha] = useState(new Date());
    //const { state, dispatch } = useContext(SalesContext);
  
    const {register,handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(valSchema)
    });

    const onSubmit = (e) => {
        //e.preventDefault();
        const sale=
            { producto: producto, 
                cantidad: cantidad,
                 precio: precio, 
                 fecha: fecha } ;
        
        
        //dispatch({ type: 'ADD_SALE', payload: sale });
        actualizarEstado(sale);

        setProducto('');
        setCantidad('');
        setPrecio('');
        setFecha(new Date());
        
        
        alert('Registro exitoso');
    };

    return (
        <div className='form-container'>
            <h2>Registro de ventas</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label htmlFor='txtProducto'>Producto</label>
                    <input id="txtProducto" {...register('producto')} 
                    value={producto}
                    onChange={(e) => setProducto(e.target.value)}
                    placeholder="Producto a vender"
                    />
                    {errors.producto && <p className='error-message'>
                        {errors.producto.message}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='txtCantidad'>Cantidad</label>
                    <input id="txtCantidad" type="number" {...register('cantidad')} 
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    />
                    {errors.cantidad && <p className='error-message'>
                        {errors.cantidad.message}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='txtPrecio'>Precio</label>
                    <input id="txtPrecio" type="number" {...register('precio')} 
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    />
                    {errors.precio && <p className='error-message'>
                        {errors.precio.message}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='txtFecha'>Fecha de Venta</label>
                    <input id="txtFecha" 
                    type="date"
                    {...register('fecha')} 
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    placeholder="Fecha de venta"
                    />
                    {errors.fecha && <p className='error-message'>
                        {errors.fecha.message}</p>}
                </div>
                <button>Registrar</button>
            </form>
        </div>
    );
};

export default SalesForm;