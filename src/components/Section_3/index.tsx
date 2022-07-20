import { Col, Container, Row } from 'react-bootstrap';

import Section from '../Section';
import ImgHover_1 from './ImgHover_1';
import ImgHover_2 from './ImgHover_2';
import ImgHover_3 from './ImgHover_3';
import ImgHover_4 from './ImgHover_4';
import ImgHover_5 from './ImgHover_5';

import './styles.scss';

function CardsHoverSection() {
	// * Creator https://bootstrapious.com/p/bootstrap-image-hover#:~:text=Bootstrap%20Image%20Hover%20combines%20accessibility,quick%20introduction%20to%20your%20photo.

	const item = {
		img: { src: '/img/750x500.png', alt: '...' },
		title: 'Image Caption',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	};

	const item_subtitle = {
		img: { src: '/img/750x500.png', alt: '...' },
		title: 'Image Caption',
		subTitle: 'Colorful',
	};

	return (
		<Section>
			<Container className='py-5'>
				<Row>
					<Col md={6} className='mb-3'>
						<ImgHover_1 {...item} />
					</Col>
					<Col md={6} className='mb-3'>
						<ImgHover_2 {...item} />
					</Col>
					<Col md={6} className='mb-3'>
						<ImgHover_3 {...item} />
					</Col>

					<Col md={6} className='mb-3'>
						<ImgHover_4 {...item} />
					</Col>

					<Col md={6} className='mb-3'>
						<ImgHover_5 {...item_subtitle} />
					</Col>
				</Row>
			</Container>
		</Section>
	);
}

export default CardsHoverSection;
