import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setTopGridEvents } from '../Redux/actions/eventsAction';
import GridContainer from '../Components/gridContainer';
import { Row, Container } from 'react-bootstrap';
import { ConvertDate } from '../common/convertDate';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GridTitle from '../Components/gridTitle';

const TopGrid = () => {
	const dispatch = useDispatch();
	const topGrid = useSelector((state) => state.topGridEvents.events);
	//do this in reducers
	const fetchTopGridEvents = async () => {
		const res = await axios.get('http://localhost:5000/topGrid').catch((err) => {
			console.log(`error in fetch event: ${err}`);
		});
		dispatch(setTopGridEvents(res.data));
	};

	useEffect(() => {
		fetchTopGridEvents();
	}, []);

	return (
		<Container
			style={{
				background: 'rgba(0, 0, 0, 0.3)',
				paddingTop: '10px',
				paddingBottom: '10px',
			}}
		>
			<GridTitle title="Top Grid" />

			<Row>
				{topGrid.map((event) => {
					return (
						<GridContainer
							key={event.id}
							title={event.name}
							body={event.description}
							imgPath={event.image}
							footer={ConvertDate(event.startDate)}
						/>
					);
				})}
			</Row>
		</Container>
	);
};

export default TopGrid;
