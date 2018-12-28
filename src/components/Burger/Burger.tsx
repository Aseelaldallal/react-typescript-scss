import * as React from 'react';
import { Ingredients } from '../../containers/BurgerBuilder';
import classes from './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export interface IBurgerProps {
	ingredients: Ingredients;
}

const burger = (props: IBurgerProps) => {
	let transformedIngredients: JSX.Element | JSX.Element[] = Object.keys(
		props.ingredients
	).reduce((accumulator, currentIngredient) => {
		const amount = props.ingredients[currentIngredient];
		const burgerIngredients = [];
		for (let i = 0; i < amount; i++) {
			burgerIngredients.push(
				<BurgerIngredient
					type={currentIngredient}
					key={currentIngredient + i}
				/>
			);
		}
		return [...accumulator, ...burgerIngredients];
	}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p> Please Start Adding Ingredients</p>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
