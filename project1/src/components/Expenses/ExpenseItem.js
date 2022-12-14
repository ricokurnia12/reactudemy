import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle("Changes");
    //     console.log(title);
    // };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">
                        Rp {props.amount}
                    </div>
                </div>
                {/* <button onClick={clickHandler}>Click for Change</button> */}
            </Card>
        </li>
    );
};

export default ExpenseItem;
