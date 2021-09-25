import { Card, Button } from 'react-bootstrap';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'placeHolder.png' from '../../public';

export const CardBlock = ({ title, body, imgPath, footer }) => {
	return (
		<Card className={'fullCard'} border="dark" style={{ width: '18rem', height: '100%' }}>
			{/* {title && <Header header={title} />} */}

			{/* {body && <Body body={body} />} */}

			<BodyImage2 imgPath={imgPath} />

			{/* {footer && <Footer footer={footer} />} */}
			{/* <Header />
                <Body />
                <Footer /> */}
		</Card>
	);
};

//title name
const Header = ({ header }) => {
	return <Card.Header>{header}</Card.Header>;
};

//photo
//info
const Body = ({ body }) => {
	return (
		<Card.Body>
			{/* <img src={image} style={{ height: '80%', width: '100%' }}></img> */}
			<Card.Text>{body}</Card.Text>
			{/* <Card.Text>
				<h1>asd</h1>
			</Card.Text> */}
		</Card.Body>
	);
};

// interface TestProps {
// 	imgPath?: string;
// }

// const BodyImage = ({ imgPath = '/placeHolder.png' }: TestProps) => {
// 	return <Card.Img src={imgPath} />;
// };

const BodyImage2 = ({ imgPath }) => {
	const img = imgPath === '' ? '/placeHolder.png' : imgPath;
	// imgPath == null ? (imgPath = '/placeHolder.png') ;
	return <Card.Img src={img} />;
};

//dates?
//info
//read more
const Footer = ({ footer }) => {
	return (
		<Card.Footer>
			{/* <small className="text-muted">This is footer</small> */}
			<Button variant="primary">{footer}</Button>
			<label>Read More</label>
		</Card.Footer>
	);
};

export default CardBlock;
