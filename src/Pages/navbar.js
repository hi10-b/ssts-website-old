import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home';

const Navigation = () => {
	return (
		<Router>
			{/* <Header /> */}
			<Routes>
				<Route path="/" exact component={HomePage} />
				{/* <Route path="/product/:productId" component={ProductDetails} /> */}
				<Route>404 Not Found!</Route>
			</Routes>
		</Router>
	);
};

export default Navigation;
