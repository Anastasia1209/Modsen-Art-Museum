import ErrorBoundary from '@components/ErrorBoundary';
import { Link } from 'react-router-dom';

import styles from './Error404.module.css';

const Error404: React.FC = () => {
	return (
		<ErrorBoundary>
			<div className={styles.Error404}>
				<h1 className={styles.titleCode}>404</h1>
				<h2 className={styles.title}>Page not found</h2>
				<p className={styles.details}>
					Sorry, but the requested page does not exist.
					<Link to="/">Return to main page</Link>
				</p>
			</div>
		</ErrorBoundary>
	);
};

export default Error404;
