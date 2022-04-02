import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css";

const ExpensesList = props => {
    //alterative more clean readable with lean JSX: by moving logic outside of returned component

    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    return <ul className='expenses-list'>
        {props.items.map(aa => (
            <ExpenseItem 
                key={aa.id}
                title={aa.title} 
                amount={aa.amount} 
                date={aa.date} 
            />
        ))}
    </ul>

}

export default ExpensesList;