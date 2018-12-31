import * as React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';

class App extends React.Component {
	public render() {
		return (
			<div>
				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		);
	}
}

export default App;
