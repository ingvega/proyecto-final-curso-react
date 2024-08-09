import React, { createContext, useReducer } from 'react';
import salesReducer from '../reducers/salesReducer';
import { ventas } from '../data/ventas';

const SalesContext = createContext();

const initialState = { sales:ventas };

const SalesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(salesReducer, initialState);

  return (
    <SalesContext.Provider value={{ state, dispatch }}>
      {children}
    </SalesContext.Provider>
  );
};

export { SalesContext, SalesProvider };
