import * as React from 'react';
import classes from './NavigationItem.scss';

export interface INavigationItemProps {
	children: React.ReactNode;
	link: string;
	active?: boolean;
}

const navigationItem = (props: INavigationItemProps) => {
	return (
		<li className={classes.NavigationItem}>
			<a className={props.active ? classes.active : ''} href={props.link}>
				{props.children}
			</a>
		</li>
	);
};

export default navigationItem;
