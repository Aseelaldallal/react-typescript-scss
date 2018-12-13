import * as React from "react";
import { Ingredients } from "src/containers/BurgerBuilder";

export interface IOrderSummaryProps {
    ingredients: Ingredients;
}

const orderSummary = (props: any) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingName => {
        return (
            <li key={ingName}>
                <span style={{ textTransform: "capitalize" }}>{ingName}</span>:
                {props.ingredients[ingName]}
            </li>
        );
    });
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul> {ingredientSummary} </ul>
            <p>Continue to Checkout</p>
        </>
    );
};

export default orderSummary;
