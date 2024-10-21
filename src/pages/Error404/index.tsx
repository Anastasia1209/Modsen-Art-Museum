import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error404.module.css';
import ErrorBoundary from '@components/ErrorBoundary';

const Error404: React.FC = () => {
	return (
		<ErrorBoundary>
			<div className={styles.Error404}>
				<h1 className={styles.titleCode}>404</h1>
				<h2 className={styles.title}>Страница не найдена</h2>
				<p className={styles.details}>
					Извините, но запрашиваемая страница не существует.
					<Link to="/">Вернуться на главную страницу</Link>
				</p>
			</div>
		</ErrorBoundary>
	);
};

export default Error404;
