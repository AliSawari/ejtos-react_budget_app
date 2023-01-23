import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, currency, expenses, remaining, dispatch } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const validateBudget = value => {
		console.log(totalExpenses)
		if(totalExpenses){
			if(value > (totalExpenses + remaining)) return alert("Out of Budget!");
		}
		if(value < totalExpenses) return alert("Budget Cannot be Less that Expenses");
		if(value > 20000) return alert("Cannot Exceed Upper Limit 20000");
		dispatch({type: "SET_BUDGET", payload: value});
	}

	return (
		<div className='alert alert-secondary'>
			<span>Budget:</span>
			<label htmlFor='bud' style={{fontSize: '18px'}}>{currency}</label>
			<input style={{ width: "150px" }} onChange={e => validateBudget(e.target.value)}  max={20000} min={expenses} value={budget} id="bud" type="number" step={10}></input>
		</div>
	);
};

export default Budget;