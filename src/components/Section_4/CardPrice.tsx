import { Card, Col } from 'react-bootstrap';

import { BsCheck, BsX } from 'react-icons/bs';

import styles from './CardPrice.module.scss';

interface Props {
	name: string;
	price: number;
	badge?: string;
	period?: string;
	benefits: {
		name: string;
		state: boolean;
		strong?: boolean;
	}[];
	link: string;
}

function CardPrice({ name, price, badge = '$', period = 'month', benefits, link }: Props) {
	return (
		<Col md={6} lg={4}>
			<Card className={`mb-5 mb-lg-0 ${styles.card}`}>
				<Card.Body>
					<h5 className={`text-muted text-uppercase text-center ${styles['card-title']}`}>{name}</h5>
					<h6 className='h1 text-center'>
						{badge + String(price)}
						<span className='fs-6'>/{period}</span>
					</h6>
					<hr />
					<ul>
						{benefits.map((benefit) => (
							<li
								className={`${!benefit.state && 'text-muted opacity-75'} ${benefit.strong && 'fw-bold'} list-unstyled`}
								key={benefit.name}
							>
								<span className='me-2 fs-4'>
									{benefit.state ? <BsCheck color='#00bb2d' /> : <BsX color='ff6961' />}
								</span>
								{benefit.name}
							</li>
						))}
					</ul>
					<div>
						<a href={link} className={`btn btn-primary text-uppercase ${styles.btn} w-100`}>
							Button
						</a>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default CardPrice;
