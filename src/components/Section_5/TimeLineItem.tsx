import styles from './TimeLine.module.scss';
interface Props {
	date: string;
	title: string;
	description: string;
}
function TimeLineItem({ date, title, description }: Props) {
	return (
		<div className={styles['timeline-item']}>
			<div className={styles['timeline-dot']}></div>
			<div className={styles['timeline-date']}>{date}</div>
			<div className={styles['timeline-content']}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default TimeLineItem;
