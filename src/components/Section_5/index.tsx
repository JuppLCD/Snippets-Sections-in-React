import Section from '../Section';

import TimeLine from './TimeLine';
import TimeLineItem from './TimeLineItem';

function index() {
	const items = [
		{
			date: '2015',
			title: 'timeline item title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			date: '2016',
			title: 'timeline item title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			date: '2017',
			title: 'timeline item title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			date: '2018',
			title: 'timeline item title',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
	];
	return (
		<Section>
			<TimeLine color={{ date: '#b200ff', card: '#3320cf', text: '#ff9500' }}>
				{items.map((item) => (
					<TimeLineItem {...item} key={item.title} />
				))}
			</TimeLine>
		</Section>
	);
}

export default index;
