import ErrorBoundary from '@components/ErrorBoundary';
import { Footer } from '@components/Footer';
import Gallery from '@components/Galary';
import { Header } from '@components/Header';
import Pagination from '@components/Pagination';
import PaintList from '@components/PaintList';
import { SearchBar } from '@components/SearchBar';
import {
	INITIAL_PAGE,
	pagesPerRange,
	paintingsPerPage,
} from '@constants/constants';
import useArtworks from '@hooks/useArtworks';
import usePagination from '@hooks/usePagination';
import { useState } from 'react';

import styles from './MainPage.module.css';

const MainPage: React.FC = () => {
	const { artworks, searchResults, setSearchResults } = useArtworks();
	const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE);

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
