import React, { useEffect, useState } from 'react';
import styles from './PaintCard.module.css';
import { Link } from 'react-router-dom';
import { PaintCardProps } from '../../types/types';
import bookmark from '../../assets/icons/emptyFav.svg';
import filledBookmark from '../../assets/icons/fullFav.svg';

const PaintCard: React.FC<PaintCardProps> = ({
	id,
	title,
	author,
	imageUrl,
	status,
}) => {
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
		setIsFavorite(favorites.some((fav: { id: number }) => fav.id === id));
	}, [id]);

	const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		event.preventDefault();

		let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

		if (isFavorite) {
			favorites = favorites.filter((fav: { id: number }) => fav.id !== id);
			setIsFavorite(false);
		} else {
			const newFavorite = { id, title, author, imageUrl, status };
			favorites.push(newFavorite);
			setIsFavorite(true);
		}

		localStorage.setItem('favorites', JSON.stringify(favorites));
	};

	return (
		<Link to={`/paint/${id}`} className={styles.cardLink}>
			<div className={styles.card}>
				<img src={imageUrl} alt={title} className={styles.image} />
				<div className={styles.details}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.author}>{author}</p>
					<p className={styles.status}>{status}</p>
				</div>
				<button className={styles.favoriteButton} onClick={handleFavoriteClick}>
					<img
						src={isFavorite ? filledBookmark : bookmark}
						alt="favorites"
						className={styles.imgInRound}
					/>
				</button>
			</div>
		</Link>
	);
};

export default PaintCard;
