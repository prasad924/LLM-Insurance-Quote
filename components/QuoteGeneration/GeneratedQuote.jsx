import React from 'react';
import { useLocation } from 'react-router-dom';

const GeneratedQuote = () => {
    const location = useLocation();
    const response = location.state?.response;

    return (
        <>
        <div>Quotation is {response}</div>
        </>
    );
};

export default GeneratedQuote;
