import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const PrintQuote = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { form, quote } = location.state || {}; 

    useEffect(() => {
        window.print();
            navigate('/generate-quote');
    }, [navigate]);

    return (
        <>
        <div className='flex justify-center'>
            <NavBar items={[]}/>
        </div>
        <div className="p-6 bg-white max-w-4xl mx-auto my-10 rounded-lg shadow-lg">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Quote Summary</h1>
                <hr className="border-gray-300 mb-4" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="p-4 bg-gray-100 rounded-lg border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Form Data</h2>
                        <ul className="list-disc list-inside">
                            {Object.entries(form).map(([key, value]) => (
                                <li key={key} className="mb-1">
                                    <strong className="font-medium text-gray-600 capitalize">
                                        {key.replace(/_/g, ' ')}:
                                    </strong> {value || 'N/A'}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Quotation</h2>
                        <p className="text-gray-600">₹{quote.match(/\d*\.?\d+/g)[0] || 'No quotation available'}</p>
                    </div>
                </div>
            </div>
        </div>
                            </>
    );
};

export default PrintQuote;
