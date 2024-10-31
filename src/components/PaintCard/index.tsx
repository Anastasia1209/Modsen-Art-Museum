import defaultImg from '@assets/Image.svg';
import { emptyFav, filledBookmark } from '@constants/assetsPaths';
import useFavorites from '@hooks/useFavorites';
import { Link } from 'react-router-dom';
import { PaintCardProps } from 'types/types';

import styles from './PaintCard.module.css';

const PaintCard: React.FC<PaintCardProps> = ({
	id,
	title,
	author,
	imageUrl,
	status,
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

	const handleImageError = (
		event: React.SyntheticEvent<HTMLImageElement, Event>
	) => {
		event.currentTarget.src = defaultImg;
	};

	return (
		<Link to={`/paint/${id}`} className={styles.cardLink}>
			<article className={styles.card}>
				<img
					src={imageUrl || defaultImg}
					alt={title}
					className={styles.image}
					onError={handleImageError}
				/>
				<section className={styles.details}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.author}>{author}</p>
					<p className={styles.status}>{status}</p>
				</section>

				<button className={styles.favoriteButton} onClick={handleFavoriteClick}>
					<img
						src={isFavorite ? filledBookmark : emptyFav}
						alt="favorites"
						className={styles.imgInRound}
					/>
				</button>
			</article>
		</Link>
	);
};

export default PaintCard;
