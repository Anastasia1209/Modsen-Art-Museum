import React from 'react';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import DetailInfo from '@components/DetailInfo';

import styles from './DetailsPage.module.css';
import ErrorBoundary from '@components/ErrorBoundary';

const DetailsPage: React.FC = () => {
	return (
		<ErrorBoundary>
			<div className={styles.DetailsPage}>
				<Header />
				<DetailInfo />

				<Footer />
			</div>
		</ErrorBoundary>
	);
};

export default DetailsPage;
