interface Props {
	img: { src: string; alt?: string };
	title: string;
	description: string;
}

function ImgHover_1({ img, title, description }: Props) {
	return (
		<div className='hover hover-6 text-white rounded' title={title}>
			<img className='img-fluid' src={img.src} alt={img.alt} />
			<div className='hover-6-content'>
				<h3 className='hover-6-title text-uppercase font-weight-bold mb-0'>{title}</h3>
				<p className='hover-6-description font-weight-light mb-0 text-white-50'>{description}</p>
			</div>
		</div>
	);
}

export default ImgHover_1;
