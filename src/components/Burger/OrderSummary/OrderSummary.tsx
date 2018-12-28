import * as React from 'react';
import { Ingredients } from '../../../containers/BurgerBuilder';
import Button from '../../UI/Button/Button';

export interface IOrderSummaryProps {
	ingredients: Ingredients;
	purchaseContinued: () => void;
	purchaseCancelled: () => void;
	price: number;
}

const orderSummary = (props: IOrderSummaryProps) => {
	const ingredientSummary = Object.keys(props.ingredients).map(ingName => {
		return (
			<li key={ingName}>
				<span style={{ textTransform: 'capitalize' }}>{ingName}</span>:
				{props.ingredients[ingName]}
			</li>
		);
	});
	return (
		<>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul> {ingredientSummary} </ul>
			<p>
				<strong>Total Price: {props.price.toFixed(2)}</strong>
			</p>
			<p>Continue to Checkout</p>
			<Button btnType="Danger" clicked={props.purchaseCancelled}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</>
	);
};

export default orderSummary;
