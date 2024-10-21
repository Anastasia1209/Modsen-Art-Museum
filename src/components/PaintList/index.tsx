import React from 'react';

import PaintCard from '../PaintCard';
import styles from './PaintList.module.css';
import { PaintListProps } from '@utils/types';

const PaintList: React.FC<PaintListProps> = ({ artworks }) => {
	return (
		<div className={styles.paintList}>
			{artworks.length > 0 ? (
				artworks.map((artwork) => (
					<PaintCard
						key={artwork.id}
						title={artwork.title}
						author={artwork.author}
						imageUrl={artwork.imageUrl}
						status={artwork.status}
						id={artwork.id}
					/>
				))
			) : (
				<p className={styles.emptyMessage}>No artworks available.</p>
			)}
		</div>
	);
};

export default PaintList;
