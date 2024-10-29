import { useState } from 'react';

interface UsePaginationProps {
	totalPages: number;
	pagesPerRange: number;
}

const usePagination = ({ totalPages, pagesPerRange }: UsePaginationProps) => {
	const [currentRange, setCurrentRange] = useState<number>(1);

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

	return {
		currentRange,
		getPageNumbers,
		handleNextRange,
		handlePrevRange,
	};
};

export default usePagination;
