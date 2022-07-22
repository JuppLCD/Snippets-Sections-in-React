import styles from './TimeLine.module.scss';

interface Props {
	children: JSX.Element | JSX.Element[];
	color?: TimeLineColor;
}
type TimeLineColor = {
	date?: string;
	card?: string;
	text?: string;
};

function TimeLine({ children, color }: Props) {
	const varsCss = {
		'--color-date': color?.date || '#eaa023',
		'--color-card': color?.card || '#2f363e',
		'--color-text': color?.text || '#fff',
	} as React.CSSProperties;

	return (
		<div className={styles.timeline} style={varsCss}>
			{children}
		</div>
	);
}

export default TimeLine;
