import { Col, Container, Row } from 'react-bootstrap';
import Section from '../Section';

function SectionOne() {
	return (
		<Section>
			<>
				<h1 className='my-4'>
					Page Heading
					<small>Secondary Text</small>
				</h1>

				<Row>
					<Col md={8}>
						<img className='img-fluid' src='https://via.placeholder.com/750x500' alt='' />
					</Col>

					<Col md={4}>
						<h3 className='my-3'>Project Description</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque
							urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo
							eu convallis placerat, felis enim.
						</p>
						<h3 className='my-3'>Project Details</h3>
						<ul>
							<li>Lorem Ipsum</li>
							<li>Dolor Sit Amet</li>
							<li>Consectetur</li>
							<li>Adipiscing Elit</li>
						</ul>
					</Col>
				</Row>

				<h3 className='my-4'>Related Projects</h3>

				<Row>
					<Col sm={6} md={3} className='mb-4'>
						<a href='#'>
							<img className='img-fluid' src='https://via.placeholder.com/500x300' alt='' />
						</a>
					</Col>
					<Col sm={6} md={3} className='mb-4'>
						<a href='#'>
							<img className='img-fluid' src='https://via.placeholder.com/500x300' alt='' />
						</a>
					</Col>
					<Col sm={6} md={3} className='mb-4'>
						<a href='#'>
							<img className='img-fluid' src='https://via.placeholder.com/500x300' alt='' />
						</a>
					</Col>
					<Col sm={6} md={3} className='mb-4'>
						<a href='#'>
							<img className='img-fluid' src='https://via.placeholder.com/500x300' alt='' />
						</a>
					</Col>
				</Row>
			</>
		</Section>
	);
}

export default SectionOne;
