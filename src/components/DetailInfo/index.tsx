import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './DetailInfo.module.css';
import { emptyFav, filledBookmark } from '@assets/assets';
import { PaintFull } from '@utils/types';
import { getPaintById } from '@utils/api';
import useFavorites from '../../hooks/useFavorites';

const DetailsPaint: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [paint, setPaint] = useState<PaintFull | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const paintId = Number(id);
	const { isFavorite, toggleFavorite } = useFavorites(
		paintId,
		paint?.title || '',
		paint?.author || '',
		paint?.imageUrl || '',
		paint?.status || ''
	);

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
						src={isFavorite ? filledBookmark : emptyFav}
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
