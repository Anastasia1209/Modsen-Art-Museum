import React, { useState } from 'react';
import GalleryCard from '../GalaryCard';
import styles from './Galary.module.css';

interface Painting {
	id: number;
	title: string;
	author: string;
	status: string;
	imageUrl: string;
}

interface GalleryProps {
	paintings: Painting[];
	totalPages: number;
}

const Gallery: React.FC<GalleryProps> = ({ paintings, totalPages }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 2;
	//const totalPages = Math.ceil(localPaintings.length / itemsPerPage);

	//const [visiblePages, setVisiblePages] = useState([1, 2, 3, 4]);
	const visiblePaintings = paintings.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div className={styles.gallery}>
			<p className={styles.highlight}>Topics for you</p>
			<p className={styles.title}>Our special gallery</p>
			<div className={styles.cards}>
				{visiblePaintings.map((painting) => (
					<GalleryCard
						key={painting.id}
						title={painting.title}
						author={painting.author}
						status={painting.status}
						imageUrl={painting.imageUrl}
						id={painting.id}
					/>
				))}
			</div>

			<div className={styles.pagination}>
				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index + 1}
						className={`${styles.pageButton} ${currentPage === index + 1 ? styles.active : ''}`}
						onClick={() => handlePageChange(index + 1)}
					>
						{index + 1}
					</button>
				))}
				<button
					className={`${styles.nextButton}`}
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					{'>'}
				</button>
			</div>
		</div>
	);
};

export default Gallery;
