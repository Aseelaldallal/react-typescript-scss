import * as React from "react";
import classes from "./BuildControl.scss";

export interface IBuildControlProps {
    label: string;
    added: () => void;
    removed: () => void;
    disabled: boolean;
}

const buildControl = (props: IBuildControlProps) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                disabled={props.disabled}
                className={classes.Less}
                onClick={props.removed}
            >
                Less
            </button>
            <button className={classes.More} onClick={props.added}>
                More
            </button>
        </div>
    );
};

export default buildControl;
