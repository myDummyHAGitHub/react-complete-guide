import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

//function Expenses(props){
const Expenses = (props) => {
    const expenses = props.expensesdata;
    //console.log(expenses)

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        //console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>

                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                
                {expenses.map(aa => (
                    <ExpenseItem 
                        key={aa.id}
                        title={aa.title} 
                        amount={aa.amount} 
                        date={aa.date} 
                    />
                ))};
            </Card>
        </div>
    );
}

export default Expenses;