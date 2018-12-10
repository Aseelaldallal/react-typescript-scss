import * as React from "react";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Burger from "../components/Burger/Burger";

const INGREDIENT_PRICES = {
    bacon: 0.8,
    cheese: 1,
    meat: 1.2,
    salad: 0.5
};

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0
        },
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
        }
    };

    render() {
        const disabledInfo = Object.keys(this.state.ingredients).reduce(
            (accumulator, ingredient) => {
                console.log(this.state.ingredients);
                accumulator[ingredient] =
                    this.state.ingredients[ingredient] < 1;
                return accumulator;
            },
            {}
        );

        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </>
        );
    }
}

export default BurgerBuilder;
