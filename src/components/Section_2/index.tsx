import Section from '../Section';
import ImgBox from './ImgBox';

import './styles.scss';

function GallerySection() {
	// Esto seria la props Images = []
	// Img src https://via.placeholder.com/750x500

	const arrImg = new Array(13).fill(0).map(() => ({ id: Math.random(), imgSrc: '/img/750x500.png', imgAlt: '' }));

	enum TypeImgSize {
		NORMAL = '',
		WIDE = 'wide',
		TALL = 'tall',
		BIG = 'big',
	}

	const arrTypeSize = new Array(arrImg.length).fill(0).map((i) => {
		const n = Math.floor(Math.random() * 101);
		if (n < 50) return TypeImgSize.NORMAL;
		if (n >= 50 && n < 70) return TypeImgSize.WIDE;
		if (n >= 70 && n < 90) return TypeImgSize.TALL;
		if (n > 90) return TypeImgSize.BIG;
	});

	return (
		<Section classStyles='overflow-hidden'>
			<article className='grid-wrapper'>
				{arrImg.map((image, index) => {
					return <ImgBox type={arrTypeSize[index]} key={image.id} {...image} />;
				})}
			</article>
		</Section>
	);
}

export default GallerySection;
