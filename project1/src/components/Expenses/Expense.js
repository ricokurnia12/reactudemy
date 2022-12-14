import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expense.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangedHandler = (selectedYear) => {
        console.log("Expense.js");
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangedHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
            
        </div>
    );
};

export default Expense;
