import { Container } from 'react-bootstrap';

interface Props {
	children: JSX.Element;
	container?: 'md' | 'lg';
	classStyles?: string;
}
function Section({ children, container = 'lg', classStyles = '' }: Props) {
	return (
		<article className='my-5 py-5'>
			<hr />
			<br />
			<hr className='mb-5' />
			<Container fluid={container} className={classStyles}>
				{children}
			</Container>
			<hr className='mt-5' />
			<br />
			<hr />
		</article>
	);
}

export default Section;
