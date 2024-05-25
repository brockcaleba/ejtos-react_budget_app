import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const maxBudget = 20000
    // const defaultBudget = 2000
    // const drsetInputValue = useState(defaultBudget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        if(newBudget > maxBudget) {
            alert("The value exceeds the maximum approved budget")
            setNewBudget(budget);
        }
        if(newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending amount")
            setNewBudget(budget);
        }
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input id="budgetInput" type="number" step="10"  value={newBudget} max={maxBudget} min={totalExpenses}  onChange={handleBudgetChange}></input>
</div>
    );
};

export default Budget;