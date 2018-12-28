import * as React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.scss';

export interface IToolbarProps {
	drawerToggleClicked: () => void;
}

const toolbar = (props: IToolbarProps) => {
	return (
		<header className={classes.Toolbar}>
			<DrawerToggle clicked={props.drawerToggleClicked} />
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav className={classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default toolbar;
