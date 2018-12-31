import * as React from 'react';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Burger from '../components/Burger/Burger';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';
import Modal from '../components/UI/Modal/Modal';
import axios from '../axios-orders';

const INGREDIENT_PRICES = {
	bacon: 0.8,
	cheese: 1,
	meat: 1.2,
	salad: 0.5
};

type IngredientName = 'salad' | 'bacon' | 'cheese' | 'meat';
export type Ingredients = Record<IngredientName, number>;

interface IState {
	ingredients: Ingredients;
	purchaseable: boolean;
	totalPrice: number;
	purchasing: boolean;
}

class BurgerBuilder extends React.Component {
	state: IState = {
		ingredients: {
			bacon: 0,
			cheese: 0,
			meat: 0,
			salad: 0
		},
		purchaseable: false,
		purchasing: false,
		totalPrice: 4
	};

	addIngredientHandler = (type: string) => {
		const oldCount = this.state.ingredients[type];
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = oldCount + 1;
		const priceAddition = INGREDIENT_PRICES[type];
		const newPrice = this.state.totalPrice + priceAddition;
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice
		});
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type: string) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount > 0) {
			const updatedIngredients = { ...this.state.ingredients };
			updatedIngredients[type] = oldCount - 1;
			const priceDecrease = INGREDIENT_PRICES[type];
			const newPrice = this.state.totalPrice - priceDecrease;
			this.setState({
				ingredients: updatedIngredients,
				totalPrice: newPrice
			});
			this.updatePurchaseState(updatedIngredients);
		}
	};

	updatePurchaseState = (ingredients: any) => {
		const sum = Object.keys(ingredients).reduce(
			(accumulator, currentIngredient) => {
				return accumulator + ingredients[currentIngredient];
			},
			0
		);
		this.setState({ purchaseable: sum > 0 });
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = async () => {
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Aseel',
				address: {
					street: 'test',
					country: 'canada'
				},
				email: 'aseelaldallal@gmail.com'
			},
			deliveryMethod: 'fastest'
		};

		try {
			const response = await axios.post('/orders.json', order);
			console.log(response);
		} catch (e) {
			console.log(e);
		}
	};

	render() {
		const disabledInfo = Object.keys(this.state.ingredients).reduce(
			(accumulator, ingredient) => {
				accumulator[ingredient] =
					this.state.ingredients[ingredient] < 1;
				return accumulator;
			},
			{}
		);

		return (
			<>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					purchaseable={this.state.purchaseable}
					price={this.state.totalPrice}
					ordered={this.purchaseHandler}
				/>
			</>
		);
	}
}

export default BurgerBuilder;
