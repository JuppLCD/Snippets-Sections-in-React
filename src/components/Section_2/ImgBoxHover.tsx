interface Props {
	type?: 'wide' | 'tall' | 'big' | '';
	imgSrc: string;
	imgAlt?: string;
}
function ImgBoxHover({ type, imgSrc, imgAlt }: Props) {
	return (
		<div className={`imgBoxGallery ${type}`}>
			<img className='img-fluid rounded' src={imgSrc} alt={imgAlt} loading='lazy' />
		</div>
	);
}

export default ImgBoxHover;
