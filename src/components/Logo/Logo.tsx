import * as React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.scss';

const logo = () => (
	<div className={classes.Logo}>
		<img src={burgerLogo} alt="MyBurger" />
	</div>
);
export default logo;
