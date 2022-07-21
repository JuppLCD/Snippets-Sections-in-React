interface Props {
	img: { src: string; alt?: string };
	title: string;
	description: string;
}

function ImgHover_4({ img, title, description }: Props) {
	return (
		<div className='hover hover-4 text-white rounded'>
			<img src={img.src} alt={img.alt} />
			<div className='hover-overlay'></div>
			<div className='hover-4-content'>
				<h3 className='hover-4-title text-uppercase font-weight-bold mb-0'>{title}</h3>
				<p className='hover-4-description text-uppercase mb-0 small'>{description}</p>
			</div>
		</div>
	);
}

export default ImgHover_4;
