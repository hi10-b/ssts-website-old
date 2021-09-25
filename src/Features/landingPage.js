import { Row, Col, Container, Card, Table } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardBlock from '../Components/cardBlock';
import { NavBar } from './navbar';
import TopGrid from './topGrid';

export const LandingPage = () => {
	return (
		<Container>
			<Row
				style={{
					// background: 'rgba(0, 0, 0, 0.3)',
					paddingTop: '10px',
					paddingBottom: '10px',
					height: '75vh',
				}}
			>
				{/* <Col>
					<Card.Img src="bg.png" style={{ height: '50vh' }} />
				</Col> */}
				{/* <Col md="auto">Variable width content</Col>
				<Col xs lg="2">
					3 of 3
				</Col> */}

				{/* <TopGrid /> */}
				<Col style={{}}>
					<img src="/gm2.png" alt="" style={{ height: '70vh' }} />
				</Col>
				{/* <Col></Col> */}
				<Col>
					<Row style={{ display: 'flex' }}>
						<h3 style={{ color: 'white' }}>Calendar</h3>
						<Table responsive variant="dark">
							<thead>
								<tr>
									<th>Date</th>
									<th>Event</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1/1/2021</td>
									<td>Event 1</td>
								</tr>
								<tr>
									<td>1/2/2021</td>
									<td>Event 2</td>
								</tr>
								<tr>
									<td>3/1/2021</td>
									<td>Event 3</td>
								</tr>
							</tbody>
						</Table>
					</Row>
					<Row style={{ height: '65%' }}>
						<h3 style={{ color: 'white' }}>Opening Times</h3>
						<Table responsive variant="dark">
							<thead>
								<tr>
									<th scope="col"></th>
									<th scope="col">
										<b>Opening</b>
									</th>
									<th scope="col">
										<b>Closing</b>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Mon-Fri</th>
									<td>
										06:00 <br />
										16:00
									</td>
									<td>
										11:00 <br />
										20:30
									</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th scope="row">Sat-Sun</th>
									<td>
										07:30 <br />
										16:00
									</td>
									<td>
										11:00 <br />
										19:30
									</td>
								</tr>
							</tbody>
							<thead>
								<tr>
									<th colspan="3">
										<h4 style={{ fontSize: '15px' }}>
											<b>Aarti Times</b>
										</h4>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Mon-Fri</th>
									<td>06:30</td>
									<td>19:00</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th scope="row">Sat-Sun</th>
									<td>08:00</td>
									<td>17:30</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th scope="row">Public Holidays</th>
									<td>08:00</td>
									<td>19:00</td>
								</tr>
							</tbody>
						</Table>
					</Row>
				</Col>
			</Row>
			<Row>
				<NavBar style={{ position: 'sticky-top', top: '20' }} />
			</Row>
		</Container>
	);
};
