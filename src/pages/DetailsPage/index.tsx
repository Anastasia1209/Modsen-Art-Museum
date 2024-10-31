import DetailInfo from '@components/DetailInfo';
import ErrorBoundary from '@components/ErrorBoundary';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import styles from './DetailsPage.module.css';

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
