import React from 'react';

import GalleryCard from '../GalaryCard';
import styles from './Galary.module.css';
import { GalleryProps } from '@utils/types';

const Gallery: React.FC<GalleryProps> = ({ paintings }) => {
	return (
		<div className={styles.gallery}>
			<p className={styles.highlight}>Topics for you</p>
			<p className={styles.title}>Our special gallery</p>
			<div className={styles.cards}>
				{paintings.map((painting) => (
					<GalleryCard
						key={painting.id}
						title={painting.title}
						author={painting.author}
						status={painting.status}
						imageUrl={painting.imageUrl}
						id={painting.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Gallery;
