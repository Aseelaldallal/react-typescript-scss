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
    disabled: {
        [key: string]: boolean;
    };
}

const buildControls = (props: IBuildControlsProps) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
    </div>
);

export default buildControls;
