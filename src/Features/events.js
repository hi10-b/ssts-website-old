import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setEvents } from '../Redux/actions/eventsAction';
import GridContainer from '../Components/gridContainer';
import { Row, Container } from 'react-bootstrap';
import { ConvertDate } from '../common/convertDate';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GridTitle from '../Components/gridTitle';

const Events = () => {
	const dispatch = useDispatch();
	const events = useSelector((state) => state.allEvents.events);
	//do this in reducers
	const fetchEvents = async () => {
		const res = await axios.get('http://localhost:5000').catch((err) => {
			console.log(`error in fetch event: ${err}`);
		});
		dispatch(setEvents(res.data));
	};

	useEffect(() => {
		fetchEvents();
	}, []);

	return (
		<Container
			style={{
				background: 'rgba(0, 0, 0, 0.3)',
				paddingTop: '10px',
				paddingBottom: '10px',
			}}
		>
			<GridTitle title="Events" />
			<Row>
				{events.map((event) => {
					return (
						<GridContainer
							key={event.id}
							title={event.name}
							imgPath={event.image}
							body={event.description}
							footer={ConvertDate(event.startDate)}
						/>
					);
				})}
			</Row>
		</Container>
	);
};

export default Events;
