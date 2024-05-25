import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyList = () => {
    const [name, setName] = useState('');

    return (
        <div className='alert alert-primary' style={{background: "green", color: "white"}}>
            <span>Currency</span>
            <select
                className="custom-select" 
                id="inputCurrencySelect"  
                onChange={(event) => setName(event.target.value)}
            >
                <option defaultValue value="£ Pound" name="pound">£ Pound</option>
                <option value="$ Dollar" name="dollar">$ Dollar</option>
                <option value="€ Euro" name="euro">€ Euro</option>
                <option value="₹ Ruppee" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencyList;