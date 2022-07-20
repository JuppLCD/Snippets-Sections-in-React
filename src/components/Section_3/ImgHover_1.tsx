interface Props {
	img: { src: string; alt?: string };
	title: string;
	description: string;
}

function ImgHover_1({ img, title, description }: Props) {
	return (
		<div className='hover hover-1 text-white rounded'>
			<img src={img.src} alt={img.alt} />
			<div className='hover-overlay'></div>
			<div className='hover-1-content px-5 py-4'>
				<h3 className='hover-1-title text-uppercase font-weight-bold mb-0'>{title}</h3>
				<p className='hover-1-description font-weight-light mb-0'>{description}</p>
			</div>
		</div>
	);
}

export default ImgHover_1;
