import React, { useEffect, useState } from 'react';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import PaintList from '@components/PaintList';

import styles from './FavoritesPage.module.css';
import { icon } from '@assets/assets';
import { Paint } from '@utils/types';
import ErrorBoundary from '@components/ErrorBoundary';

const FavoritesPage: React.FC = () => {
	const [favorites, setFavorites] = useState<Paint[]>([]);

	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites');
		if (storedFavorites) {
			setFavorites(JSON.parse(storedFavorites));
		}
	}, []);

	return (
		<ErrorBoundary>
			<div className={styles.FavoritesPage}>
				<Header />
				<div className={styles.content}>
					<p>Here are your</p>
					<div className={styles.bookmarkContainer}>
						<div className={styles.bookmark}>
							<img src={icon} alt="" />
						</div>
						<span className={styles.highlight}>Favorites</span>
					</div>
					<div className={styles.paintList}>
						{favorites.length > 0 ? (
							<PaintList artworks={favorites} />
						) : (
							<p className={styles.emptyMessage}>
								You don&apos;t have any favorites yet.
							</p>
						)}
					</div>
				</div>

				<Footer />
			</div>
		</ErrorBoundary>
	);
};

export default FavoritesPage;
