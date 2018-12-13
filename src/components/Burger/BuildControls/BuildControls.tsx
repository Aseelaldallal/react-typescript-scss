import * as React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.scss";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];

export interface IBuildControlsProps {
    ingredientAdded: (type: string) => void;
    ingredientRemoved: (type: string) => void;
    ordered: () => void;
    purchaseable: boolean;
    disabled: {
        [key: string]: boolean;
    };
    price: number;
}

const buildControls = (props: IBuildControlsProps) => (
    <div className={classes.BuildControls}>
        <p>
            Current Price: <strong>{props.price}</strong>
        </p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            disabled={!props.purchaseable}
            className={classes.OrderButton}
            onClick={props.ordered}
        >
            ORDER NOW
        </button>
    </div>
);

export default buildControls;
