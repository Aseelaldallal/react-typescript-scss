import * as React from "react";
import classes from "./Backdrop.scss";

export interface IBackdropProps {
    show: boolean;
    clicked: () => void;
}

const backdrop = (props: IBackdropProps) =>
    props.show ? (
        <div className={classes.Backdrop} onClick={props.clicked} />
    ) : null;

export default backdrop;
