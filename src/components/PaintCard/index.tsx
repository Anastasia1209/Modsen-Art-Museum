import React from 'react';
import styles from './PaintCard.module.css';
import { Link } from 'react-router-dom';

interface PaintCardProps {
	id: number;
	title: string;
	author: string;
	imageUrl: string;
	publicStatus: string;
}

const PaintCard: React.FC<PaintCardProps> = ({
	id,
	title,
	author,
	imageUrl,
	publicStatus,
}) => {
	return (
		<Link to={`/paint/${id}`} className={styles.cardLink}>
			<div className={styles.card}>
				<img src={imageUrl} alt={title} className={styles.image} />
				<div className={styles.details}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.author}>{author}</p>
					<p className={styles.status}>{publicStatus}</p>
				</div>
				<button className={styles.favoriteButton}>
					<img src="/logo/Icons.svg" alt="favorites"></img>
				</button>
			</div>
		</Link>
	);
};

export default PaintCard;
