import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DetailInfo.module.css';
import bookmark from '../../assets/icons/emptyFav.svg';
import filledBookmark from '../../assets/icons/fullFav.svg';

import { PaintFull } from '../../types/types';
import { getPaintById } from '../../services/api';

const DetailsPaint: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [paint, setPaint] = useState<PaintFull | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
		setIsFavorite(favorites.some((fav: PaintFull) => fav.id === Number(id)));
	}, [id]);

	useEffect(() => {
		const fetchPaint = async () => {
			if (id) {
				try {
					setLoading(true);
					const fetchedPaint = await getPaintById(Number(id));
					setPaint(fetchedPaint);
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
				} catch (err) {
					setError('Ошибка при загрузке данных');
				} finally {
					setLoading(false);
				}
			}
		};
		fetchPaint();
	}, [id]);

	const toggleFavorite = () => {
		let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

		if (isFavorite) {
			favorites = favorites.filter((fav: PaintFull) => fav.id !== paint?.id);
			localStorage.setItem('favorites', JSON.stringify(favorites));
			setIsFavorite(false);
		} else {
			if (paint) {
				favorites.push(paint);
				localStorage.setItem('favorites', JSON.stringify(favorites));
				setIsFavorite(true);
			}
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!paint) {
		return <div>Painting not found</div>;
	}

	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={paint.imageUrl} alt={paint.title} className={styles.image} />
				<button className={styles.bookmarkButton} onClick={toggleFavorite}>
					<img
						src={isFavorite ? filledBookmark : bookmark}
						alt="Bookmark"
						className={styles.imgInRound}
					/>
				</button>
			</div>
			<div className={styles.details}>
				<p className={styles.title}>{paint.title}</p>
				<p className={styles.author}>{paint.author}</p>
				<p className={styles.years}>{paint.years}</p>

				<div className={styles.overDetails}>
					<p className={styles.overview}>Overview</p>
					<p className={styles.commonDetails}>
						<span className={styles.label}>Artist nationality: </span>
						<span className={styles.value}>{paint.title}</span>
					</p>
					<p className={styles.commonDetails}>
						<span className={styles.label}>Dimensions: Sheet: </span>
						<span className={styles.value}>{paint.dimensions}</span>
					</p>
					<p className={styles.commonDetails}>
						<span className={styles.label}>Credit Line: </span>
						<span className={styles.value}>{paint.creditLine}</span>
					</p>
					<p className={styles.commonDetails}>
						<span className={styles.label}>Repository: </span>
						<span className={styles.value}>{paint.repository}</span>
					</p>
					<p className={styles.commonDetails}>
						<span className={styles.value}>{paint.status}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default DetailsPaint;
