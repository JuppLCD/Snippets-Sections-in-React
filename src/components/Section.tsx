interface Props {
	children: JSX.Element;
}
function Section({ children }: Props) {
	return (
		<article className='my-5 py-5'>
			<hr />
			<br />
			<hr className='mb-5' />
			{children}
			<hr className='mt-5' />
			<br />
			<hr />
		</article>
	);
}

export default Section;
