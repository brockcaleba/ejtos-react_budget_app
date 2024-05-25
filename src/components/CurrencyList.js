import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { currency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <div className='alert alert-primary' style={{background: "green", color: "white"}}>
            <label htmlFor="currency">Currency:</label>
            <select 
                id="currency"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
            >
                <option value="£" name="pound">£ Pound</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencyList;