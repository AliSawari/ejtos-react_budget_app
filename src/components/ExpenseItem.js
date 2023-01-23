import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PlusCircleFill, DashCircleFill, XCircleFill } from 'react-bootstrap-icons';

const ExpenseItem = (props) => {
	const { dispatch, currency } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense
		});

	}

	const decreaseAllocation = name => {
		dispatch({
			type: 'RED_EXPENSE',
			payload: { name, cost: 10 }
		});
	}


	return (
		<tr>
			<td>{props.name}</td>
			<td><span style={{ fontSize: '18px' }}>{currency}</span>{props.cost}</td>
			<td> <PlusCircleFill onClick={() => increaseAllocation(props.name)} size={30} color="#4fac5c" /> </td>
			<td><DashCircleFill onClick={() => decreaseAllocation(props.name)}  size={30} color="#af2419" /></td>
			<td><XCircleFill size={15} onClick={handleDeleteExpense} /></td>
		</tr>
	);
};

export default ExpenseItem;
