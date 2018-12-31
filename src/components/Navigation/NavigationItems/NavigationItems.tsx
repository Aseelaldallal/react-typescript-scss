import * as React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.scss';

const navigationItems = () => {
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem link="/" active={true}>
				Burger
			</NavigationItem>
			<NavigationItem link="/">Order Summary</NavigationItem>
		</ul>
	);
};

export default navigationItems;
