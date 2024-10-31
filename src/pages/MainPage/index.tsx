import ErrorBoundary from '@components/ErrorBoundary';
import { Footer } from '@components/Footer/index';
import Gallery from '@components/Galary';
import { Header } from '@components/Header/index';
import Pagination from '@components/Pagination';
import PaintList from '@components/PaintList';
import { SearchBar } from '@components/SearchBar';
import { pagesPerRange, paintingsPerPage } from '@constants/constants';
import usePagination from '@hooks/usePagination';
import { getPaints } from 'api/api';
import { useEffect, useState } from 'react';
import { Paint } from 'types/types';

import styles from './MainPage.module.css';

const MainPage: React.FC = () => {
	const [artworks, setArtworks] = useState<Paint[]>([]);
	const [searchResults, setSearchResults] = useState<Paint[] | null>(null);
	const [currentPage, setCurrentPage] = useState<number>(1);

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
				console.error('Ошибка при загрузке данных');
			}
		};

		fetchArtworks();
	}, []);

	const paintingsToShow = searchResults ?? artworks;
	const totalPages = Math.ceil(paintingsToShow.length / paintingsPerPage);

	const { getPageNumbers, handleNextRange, handlePrevRange } = usePagination({
		totalPages,
		pagesPerRange,
	});

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
					getPageNumbers={getPageNumbers}
					handleNextRange={handleNextRange}
					handlePrevRange={handlePrevRange}
				/>
				<PaintList artworks={artworks} />
				<Footer />
			</div>
		</ErrorBoundary>
	);
};

export default MainPage;
