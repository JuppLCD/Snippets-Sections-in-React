import { Row } from 'react-bootstrap';
import Section from '../Section';
import CardPrice from './CardPrice';

function index() {
	const plans = [
		{
			name: 'Free',
			price: 0,
			benefits: [
				{ name: 'Single User', state: true },
				{ name: '5GB Storage', state: true },
				{ name: 'Unlimited Public Projects', state: true },
				{ name: 'Community Access', state: true },
				{ name: 'Unlimited Private Projects', state: false },
				{ name: 'Dedicated Phone Support', state: false },
				{ name: 'Free Subdomain', state: false },
				{ name: 'Monthly Status Reports', state: false },
			],
			link: '#',
		},
		{
			name: 'Plus',
			price: 9,
			benefits: [
				{ name: '5 User', state: true, strong: true },
				{ name: '50GB Storage', state: true },
				{ name: 'Unlimited Public Projects', state: true },
				{ name: 'Community Access', state: true },
				{ name: 'Unlimited Private Projects', state: true },
				{ name: 'Dedicated Phone Support', state: true },
				{ name: 'Free Subdomain', state: true },
				{ name: 'Monthly Status Reports', state: false },
			],
			link: '#',
		},
		{
			name: 'Pro',
			price: 45,
			benefits: [
				{ name: 'Unlimited User', state: true, strong: true },
				{ name: '150GB Storage', state: true },
				{ name: 'Unlimited Public Projects', state: true },
				{ name: 'Community Access', state: true },
				{ name: 'Unlimited Private Projects', state: false },
				{ name: 'Dedicated Phone Support', state: false },
				{ name: 'Unlimited Free Subdomain', state: false, strong: true },
				{ name: 'Monthly Status Reports', state: false },
			],
			link: '#',
		},
	];

	return (
		<Section>
			<Row>
				{plans.map((plan) => (
					<CardPrice {...plan} key={plan.name} />
				))}
			</Row>
		</Section>
	);
}

export default index;
