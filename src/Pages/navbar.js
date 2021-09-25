import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './home';

const Navigation = () => {
	return (
		<Router>
			{/* <Header /> */}
			<Switch>
				<Route path="/" exact component={HomePage} />
				{/* <Route path="/product/:productId" component={ProductDetails} /> */}
				<Route>404 Not Found!</Route>
			</Switch>
		</Router>
	);
};

export default Navigation;
