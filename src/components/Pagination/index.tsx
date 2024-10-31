//import usePagination from '@hooks/usePagination';
import { INITIAL_PAGE } from '@constants/constants';
import { PaginationProps } from 'types/types';

import styles from './Pagination.module.css';

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
	getPageNumbers,
	handleNextRange,
	handlePrevRange,
}) => {
	const pageNumbers = getPageNumbers();
	const isFirstRange = pageNumbers[0] === INITIAL_PAGE;
	const isLastRange = pageNumbers[pageNumbers.length - 1] === totalPages;

	return (
		<div className={styles.pagination}>
			{!isFirstRange && (
				<button className={styles.prevButton} onClick={handlePrevRange}>
					&lt;
				</button>
			)}

			{pageNumbers.map((pageNumber) => (
				<button
					key={pageNumber}
					className={`${styles.pageButton} ${pageNumber === currentPage ? styles.active : ''}`}
					onClick={() => onPageChange(pageNumber)}
				>
					{pageNumber}
				</button>
			))}

			{!isLastRange && (
				<button className={styles.nextButton} onClick={handleNextRange}>
					&gt;
				</button>
			)}
		</div>
	);
};

export default Pagination;
