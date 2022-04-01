import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props){

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        // we will update the state upon this onClick event
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title Action</button> 
        </Card>
    );
}

export default ExpenseItem;