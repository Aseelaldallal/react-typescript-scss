import * as React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.scss';

// export interface IToolbarProps {}

const toolbar = () => {
	return (
		<header className={classes.Toolbar}>
			<div>MENU</div>
			<Logo />
			<nav>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default toolbar;
