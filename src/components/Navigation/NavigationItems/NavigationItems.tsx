import * as React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.scss';

const navigationItems = () => {
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem link="/" active={true}>
				BurgerBuilder
			</NavigationItem>
			<NavigationItem link="/">Checkout</NavigationItem>
		</ul>
	);
};

export default navigationItems;
