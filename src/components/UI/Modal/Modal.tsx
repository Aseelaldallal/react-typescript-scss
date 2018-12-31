import * as React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.scss';

export interface IModalProps {
	children: React.ReactNode;
	modalClosed: () => void;
	show: boolean;
}

class Modal extends React.Component<IModalProps> {
	shouldComponentUpdate(nextProps: IModalProps) {
		return (
			nextProps.show !== this.props.show ||
			nextProps.children !== this.props.children
		);
	}

	render() {
		return (
			<>
				<Backdrop
					show={this.props.show}
					clicked={this.props.modalClosed}
				/>
				<div
					className={classes.Modal}
					style={{
						opacity: this.props.show ? 1 : 0,
						transform: this.props.show
							? 'translateY(0)'
							: 'translateY(-100vh)'
					}}
				>
					{this.props.children}
				</div>
			</>
		);
	}
}

export default Modal;
