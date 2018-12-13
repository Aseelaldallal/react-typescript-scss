import * as React from "react";
import classes from "./Modal.scss";

export interface IModalProps {
    children: React.ReactNode;
    show: boolean;
}

const modal = (props: IModalProps) => (
    <div
        className={classes.Modal}
        style={{
            opacity: props.show ? 1 : 0,
            transform: props.show ? "translateY(0)" : "translateY(-100vh)"
        }}
    >
        {props.children}
    </div>
);

export default modal;
