import * as React from 'react';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Burger from '../components/Burger/Burger';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';
import Modal from '../components/UI/Modal/Modal';
import Spinner from '../components/UI/Spinner/Spinner';
import axios from '../axios-orders';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
	bacon: 0.8,
	cheese: 1,
	meat: 1.2,
	salad: 0.5
};

export interface Ingredients {
	[index: string]: number;
}

interface IState {
	ingredients: Ingredients;
	purchaseable: boolean;
	totalPrice: number;
	purchasing: boolean;
	loading: boolean;
}

class BurgerBuilder extends React.Component {
	state: IState = {
		ingredients: {},
		purchaseable: false,
		purchasing: false,
		totalPrice: 4,
		loading: false
	};

	async componentDidMount() {
		try {
			const response = await axios.get('/ingredients.json');
			this.setState({
				ingredients: response.data
			});
		} catch (e) {
			console.log(e);
		}
	}

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
		this.setState({ loading: true });
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
			this.setState({ loading: false, purchasing: false });
		} catch (e) {
			console.log(e);
			this.setState({ loading: false, purchasing: false });
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

		let orderSummary = null;

		let burger = (this.state as any).error ? (
			<p>Ingredients can't be loaded!</p>
		) : (
			<Spinner />
		);

		if (this.state.ingredients) {
			burger = (
				<>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						disabled={disabledInfo}
						purchaseable={this.state.purchaseable}
						ordered={this.purchaseHandler}
						price={this.state.totalPrice}
					/>
				</>
			);
			orderSummary = (
				<OrderSummary
					ingredients={this.state.ingredients}
					price={this.state.totalPrice}
					purchaseCancelled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
				/>
			);
		}
		if (this.state.loading) {
			orderSummary = <Spinner />;
		}

		return (
			<>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					{orderSummary}
				</Modal>
				{burger}
			</>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
