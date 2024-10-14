import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export const Header: React.FC = () => {
	const location = useLocation();

	return (
		<header className={styles.header}>
			<div className={styles['header-item']}>
				<img src="/logo/museum.svg" alt="Museum of Art" className="logo" />
			</div>
			{/* Кнопка Home */}
			{location.pathname !== '/' && (
				<Link to="/" className={styles['header-item']}>
					<span>Home</span>
				</Link>
			)}
			<Link to="/favorites" className={styles['header-item']}>
				<img src="/logo/bookmark.svg" alt="bookmark" className="logo" />
				<span className={styles.title}>Your favorites</span>{' '}
			</Link>
		</header>
	);
};
