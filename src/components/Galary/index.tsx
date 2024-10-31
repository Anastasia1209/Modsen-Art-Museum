import { GalleryProps } from 'types/types';

import GalleryCard from '../GalaryCard';
import styles from './Galary.module.css';

const Gallery: React.FC<GalleryProps> = ({ paintings }) => {
	return (
		<section className={styles.gallery}>
			<p className={styles.highlight}>Topics for you</p>
			<p className={styles.title}>Our special gallery</p>
			<div className={styles.cards}>
				{paintings.map((painting) => (
					<GalleryCard key={painting.id} {...painting} />
				))}
			</div>
		</section>
	);
};

export default Gallery;
