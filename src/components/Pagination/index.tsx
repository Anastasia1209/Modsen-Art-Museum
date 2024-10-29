import React from 'react';

import styles from './Pagination.module.css';
import { PaginationProps } from 'types/types';
import usePagination from '@hooks/usePagination';

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	pagesPerRange,
	onPageChange,
}) => {
	const { currentRange, getPageNumbers, handleNextRange, handlePrevRange } =
		usePagination({
			totalPages,
			pagesPerRange,
		});

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
