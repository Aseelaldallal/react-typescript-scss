import * as React from 'react';
import classes from './DrawerToggle.scss';

interface IDrawerToggleProps {
	clicked: () => void;
}

const drawerToggle = (props: IDrawerToggleProps) => {
	return (
		<div className={classes.DrawerToggle} onClick={props.clicked}>
			<div />
			<div />
			<div />
		</div>
	);
};

export default drawerToggle;
