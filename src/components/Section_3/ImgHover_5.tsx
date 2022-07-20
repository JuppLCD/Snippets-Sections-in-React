interface Props {
	img: { src: string; alt?: string };
	title: string;
	subTitle: string;
}

function ImgHover_5({ img, title, subTitle }: Props) {
	return (
		<div className='hover hover-5 text-white rounded'>
			<img src={img.src} alt={img.alt} />
			<div className='hover-overlay'></div>
			<div className='hover-5-content'>
				<h3 className='hover-5-title text-uppercase font-weight-light mb-0'>
					{/* Image <strong className='font-weight-bold text-white'>Caption </strong> */}
					{title}
					<span>{subTitle}</span>
				</h3>
			</div>
		</div>
	);
}

export default ImgHover_5;
