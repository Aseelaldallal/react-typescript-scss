import * as React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.scss";

export interface IModalProps {
    children: React.ReactNode;
    modalClosed: () => void;
    show: boolean;
}

const modal = (props: IModalProps) => (
    <>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                opacity: props.show ? 1 : 0,
                transform: props.show ? "translateY(0)" : "translateY(-100vh)"
            }}
        >
            {props.children}
        </div>
    </>
);

export default modal;
