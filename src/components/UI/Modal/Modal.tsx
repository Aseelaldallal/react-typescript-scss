import * as React from "react";
import classes from "./Modal.scss";

export interface IModalProps {
    children: React.ReactNode;
}

const modal = (props: IModalProps) => (
    <div className={classes.Modal}>{props.children}</div>
);

export default modal;
