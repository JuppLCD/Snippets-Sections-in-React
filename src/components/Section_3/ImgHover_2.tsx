interface Props {
	img: { src: string; alt?: string };
	title: string;
	description: string;
}

function ImgHover_2({ img, title, description }: Props) {
	return (
		<div className='hover hover-2 text-white rounded'>
			<img src={img.src} alt={img.alt} />
			<div className='hover-overlay'></div>
			<div className='hover-2-content px-5 py-4'>
				<h3 className='hover-2-title text-uppercase font-weight-bold mb-0'>{title}</h3>
				<p className='hover-2-description text-uppercase mb-0'>{description}</p>
			</div>
		</div>
	);
}

export default ImgHover_2;
