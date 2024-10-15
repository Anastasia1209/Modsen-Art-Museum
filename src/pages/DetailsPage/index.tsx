import React from 'react';
import { Header } from '../../components/Header/index';
import { Footer } from '../../components/Footer/index';
import styles from './DetailsPage.module.css';
import DetailInfo from '../../components/DetailInfo';

const DetailsPage: React.FC = () => {
	return (
		<div className={styles.DetailsPage}>
			<Header />
			<DetailInfo />

			<Footer />
		</div>
	);
};

export default DetailsPage;
