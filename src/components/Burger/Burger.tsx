import * as React from "react";
import classes from "./Burger.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export interface IBurgerProps {
    ingredients: {
        salad?: number;
        bacon?: number;
        cheese?: number;
        meat?: number;
    };
}

const burger = (props: IBurgerProps) => {
    const transformedIngredients = Object.keys(props.ingredients).reduce(
        (accumulator, currentIngredient) => {
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
        },
        []
    );

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
