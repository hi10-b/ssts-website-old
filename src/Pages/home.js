import React from 'react';
import Events from '../Features/events';
import { LandingPage } from '../Features/landingPage';
import TopGrid from '../Features/topGrid';
const HomePage = () => {
	return (
		<>
			{/* <Navbar/> */}
			{/* <BarAtTheTop/> */}
			<LandingPage />
			<TopGrid style={{ padding: '5%' }} />
			<Events style={{ padding: '5%' }} />
		</>
	);
};

export default HomePage;
