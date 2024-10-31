import ErrorBoundary from '@components/ErrorBoundary';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import PaintList from '@components/PaintList';
import { icon } from '@constants/assetsPaths';
import { useEffect, useState } from 'react';
import { Paint } from 'types/types';

import localStorageManager from '../../api/localStorageManager';
import styles from './FavoritesPage.module.css';

const FavoritesPage: React.FC = () => {
	const [favorites, setFavorites] = useState<Paint[]>([]);

	useEffect(() => {
		const storedFavorites = localStorageManager.getFavorites();
		if (storedFavorites) {
			setFavorites(storedFavorites);
		}
	}, []);

	return (
		<ErrorBoundary>
			<div className={styles.FavoritesPage}>
				<Header />
				<main className={styles.content} role="main">
					<p>Here are your</p>
					<section className={styles.bookmarkContainer}>
						<div className={styles.bookmark}>
							<img src={icon} alt="" />
						</div>
						<span className={styles.highlight}>Favorites</span>
					</section>
					<section className={styles.paintList}>
						{favorites.length > 0 ? (
							<PaintList artworks={favorites} />
						) : (
							<p className={styles.emptyMessage}>
								You don&apos;t have any favorites yet.
							</p>
						)}
					</section>
				</main>
				<Footer />
			</div>
		</ErrorBoundary>
	);
};

export default FavoritesPage;
