import * as React from 'react';
import classes from './Button.scss';

export interface IButtonProps {
	children: React.ReactNode;
	btnType: 'Success' | 'Danger';
	clicked: () => void;
}

const button = (props: IButtonProps) => (
	<button
		className={[classes.Button, classes[props.btnType]].join(' ')}
		onClick={props.clicked}
	>
		{props.children}
	</button>
);

export default button;
