import React, { createContext } from 'react';
import geminiFn from '../config/geminiApi';

export const GeminiContextData = createContext()
const GeminiContext = ({children}) => {
    const info ={geminiFn}
    return (
        <GeminiContextData.Provider value={info}>
            {children}
        </GeminiContextData.Provider>
    );
};

export default GeminiContext;