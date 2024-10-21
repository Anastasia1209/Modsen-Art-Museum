import React from 'react';
import { Link } from 'react-router-dom';

import styles from './GalaryCard.module.css';
import { PaintCardProps } from '@utils/types';
import { emptyFav, filledBookmark } from '@assets/assets';
import useFavorites from '../../hooks/useFavorites';

const GalleryCard: React.FC<PaintCardProps> = ({
	id,
	title,
	author,
	status,
	imageUrl,
}) => {
	const { isFavorite, toggleFavorite } = useFavorites(
		id,
		title,
		author,
		imageUrl,
		status
	);
	const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
		toggleFavorite();
	};

	return (
		<Link to={`/paint/${id}`} className={styles.cardLink}>
			<div className={styles.card}>
				<img src={imageUrl} alt={title} className={styles.image} />
				<div className={styles.details}>
					<div className={styles['text-container']}>
						<p className={styles.title}>{title}</p>
						<p className={styles.author}>{author}</p>
						<p className={styles.status}>{status}</p>
					</div>
					<button
						className={styles.favoriteButton}
						onClick={handleFavoriteClick}
					>
						<img
							src={isFavorite ? filledBookmark : emptyFav}
							alt="favorites"
							className={styles.imgInRound}
						/>
					</button>
				</div>
			</div>
		</Link>
	);
};

export default GalleryCard;
