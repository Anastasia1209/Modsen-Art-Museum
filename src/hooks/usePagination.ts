import { INITIAL_PAGE } from '@constants/constants';
import { useState } from 'react';

interface UsePaginationProps {
	totalPages: number;
	pagesPerRange: number;
}

const usePagination = ({ totalPages, pagesPerRange }: UsePaginationProps) => {
	const [currentRange, setCurrentRange] = useState<number>(INITIAL_PAGE);
	const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE);

	const getPageNumbers = () => {
		const start = (currentRange - 1) * pagesPerRange + INITIAL_PAGE;
		const end = Math.min(start + pagesPerRange - 1, totalPages);
		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	};

	const handleNextRange = () => {
		if (currentRange * pagesPerRange < totalPages) {
			setCurrentRange(currentRange + 1);
			setCurrentPage(currentRange * pagesPerRange + INITIAL_PAGE);
		}
	};

	const handlePrevRange = () => {
		if (currentRange > INITIAL_PAGE) {
			setCurrentRange(currentRange - 1);
			setCurrentPage((currentRange - 2) * pagesPerRange + INITIAL_PAGE);
		}
	};
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	return {
		currentPage,
		currentRange,
		getPageNumbers,
		handleNextRange,
		handlePrevRange,
		handlePageChange,
	};
};

export default usePagination;
