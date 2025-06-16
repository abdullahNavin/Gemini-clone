import React, { createContext, useState } from 'react';
import geminiFn from '../config/geminiApi';

export const GeminiContextData = createContext()

const GeminiContext = ({ children }) => {

    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState('')
    const [showResult,setShowResult]=useState(false)
    const [recentPrompts,setRecentPrompts]=useState('')

    const Onsent = async () => {
        setLoading(true)
        setShowResult(true)
        const response = await geminiFn(input)
        setResult(response)
        setLoading(false)
        setInput('')
        setRecentPrompts(input)
    }

    const info = {
        input,
        setInput,
        Onsent,
        showResult,
        result,
        recentPrompts,
        loading

    }
    return (
        <GeminiContextData.Provider value={info}>
            {children}
        </GeminiContextData.Provider>
    );
};

export default GeminiContext;