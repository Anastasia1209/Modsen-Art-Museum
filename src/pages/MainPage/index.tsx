import React, { useState, useEffect } from 'react';

import { Header } from '@components/Header/index';
import { Footer } from '@components/Footer/index';
import { SearchBar } from '@components/SearchBar';
import PaintList from '@components/PaintList';
import Gallery from '@components/Galary';
import Pagination from '@components/Pagination';

import styles from './MainPage.module.css';

import { getPaints } from '@utils/api';
import { Paint } from '@utils/types';
import ErrorBoundary from '@components/ErrorBoundary';

const MainPage: React.FC = () => {
	const [artworks, setArtworks] = useState<Paint[]>([]);
	const [searchResults, setSearchResults] = useState<Paint[] | null>(null);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [error, setError] = useState<string | null>(null);

	const paintingsPerPage = 2;
	const pagesPerRange = 4;

	useEffect(() => {
		const fetchArtworks = async () => {
			try {
				const data = await getPaints();
				if (Array.isArray(data)) {
					setArtworks(data);
				} else {
					console.error('Данные не являются массивом:', data);
				}
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (error) {
				setError('Ошибка при загрузке данных');
			}
		};

		fetchArtworks();
	}, []);

	if (error) {
		return <p>{error}</p>;
	}

	const paintingsToShow = searchResults ?? artworks;
	const totalPages = Math.ceil(paintingsToShow.length / paintingsPerPage);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const visiblePaintings = paintingsToShow.slice(
		(currentPage - 1) * paintingsPerPage,
		currentPage * paintingsPerPage
	);

	return (
		<ErrorBoundary>
			<div className={styles.MainPage}>
				<Header />

				<div className={styles.content}>
					<p className={styles.title}>
						Let&rsquo;s Find Some <span className={styles.highlight}>Art</span>{' '}
						<br /> Here!
					</p>
				</div>
				<SearchBar setSearchResults={setSearchResults} />
				<Gallery paintings={visiblePaintings} />

				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					pagesPerRange={pagesPerRange}
					onPageChange={handlePageChange}
				/>

				<PaintList artworks={artworks} />

				<Footer />
			</div>
		</ErrorBoundary>
	);
};

export default MainPage;
