import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './DetailInfo.module.css';
import { emptyFav, filledBookmark } from '@constants/assetsPaths';
import useFavorites from '@hooks/useFavorites';
import useFetchPaint from '@hooks/useFetchPaint';

const DetailsPaint: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const { paint, loading, error } = useFetchPaint(id);
	const paintId = Number(id);
	const { isFavorite, toggleFavorite } = useFavorites(
		paintId,
		paint?.title || '',
		paint?.author || '',
		paint?.imageUrl || '',
		paint?.status || ''
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!paint) {
		return <div>Painting not found</div>;
	}

	const {
		imageUrl,
		title,
		author,
		years,
		dimensions,
		creditLine,
		repository,
		status,
	} = paint;

	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={imageUrl} alt={title} className={styles.image} />
				<button className={styles.bookmarkButton} onClick={toggleFavorite}>
					<img
						src={isFavorite ? filledBookmark : emptyFav}
						alt="Bookmark"
						className={styles.imgInRound}
					/>
				</button>
			</div>
			<div className={styles.details}>
				<p className={styles.title}>{title}</p>
				<p className={styles.author}>{author}</p>
				<p className={styles.years}>{years}</p>

				<div className={styles.overDetails}>
					<p className={styles.overview}>Overview</p>
					<p className={styles.commonDetails}>
						<span className={styles.label}>Artist nationality: </span>
						<span className={styles.value}>{title}</span>
					</p>
					<p className={styles.commonDetails}>
						<span className={styles.label}>Dimensions: Sheet: </span>
						<span className={styles.value}>{dimensions}</span>
					</p>
					<p className={styles.commonDetails}>
						<span className={styles.label}>Credit Line: </span>
						<span className={styles.value}>{creditLine}</span>
					</p>
					<p className={styles.commonDetails}>
						<span className={styles.label}>Repository: </span>
						<span className={styles.value}>{repository}</span>
					</p>
					<p className={styles.commonDetails}>
						<span className={styles.value}>{status}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default DetailsPaint;
