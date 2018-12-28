import * as React from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.scss';

export interface ILayoutProps {
	children: React.ReactNode;
}

const layout = (props: ILayoutProps) => (
	<>
		<Toolbar />
		<SideDrawer />
		<main className={classes.Content}>{props.children}</main>
	</>
);

export default layout;
