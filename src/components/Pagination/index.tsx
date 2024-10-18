import React from 'react';

import styles from './Pagination.module.css';
import { PaginationProps } from '../../types/types';

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	pagesPerRange,
	onPageChange,
}) => {
	const [currentRange, setCurrentRange] = React.useState<number>(1);

	const getPageNumbers = () => {
		const start = currentRange;
		const end = Math.min(start + pagesPerRange - 1, totalPages);
		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	};

	const handleNextRange = () => {
		if (currentRange + pagesPerRange <= totalPages) {
			setCurrentRange(currentRange + pagesPerRange);
		}
	};

	const handlePrevRange = () => {
		if (currentRange - pagesPerRange > 0) {
			setCurrentRange(currentRange - pagesPerRange);
		}
	};

	return (
		<div className={styles.pagination}>
			{currentRange > 1 && (
				<button className={styles.prevButton} onClick={handlePrevRange}>
					&lt;
				</button>
			)}
			{getPageNumbers().map((pageNumber) => (
				<button
					key={pageNumber}
					className={`${styles.pageButton} ${pageNumber === currentPage ? styles.active : ''}`}
					onClick={() => onPageChange(pageNumber)}
				>
					{pageNumber}
				</button>
			))}
			{currentRange + pagesPerRange <= totalPages && (
				<button className={styles.nextButton} onClick={handleNextRange}>
					&gt;
				</button>
			)}
		</div>
	);
};

export default Pagination;
