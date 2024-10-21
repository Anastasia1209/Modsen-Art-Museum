import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import { museum, home, bookmark, burger } from '@assets/assets';
import { useToggle } from '../../hooks/useToggle';

export const Header: React.FC = () => {
	const location = useLocation();
	const { isOpen, toggle, close } = useToggle();

	const handleMenuClose = () => {
		close();
	};

	return (
		<header className={styles.header}>
			<div className={styles['header-item']}>
				<img src={museum} alt="Museum of Art" className="logo" />
			</div>

			<div className={styles.burgerMenu} onClick={toggle}>
				<img src={burger} alt="Menu" />
			</div>

			<div className={`${styles.headerItems} ${isOpen ? styles.open : ''}`}>
				{location.pathname !== '/' && (
					<Link
						to="/"
						className={styles['header-item']}
						onClick={handleMenuClose}
					>
						<img src={home} alt="home" className="logo" />
						<span className={styles.title}>Home</span>
					</Link>
				)}
				<Link to="/favorites" className={styles['header-item']}>
					<img src={bookmark} alt="bookmark" className="logo" />
					<span className={styles.title}>Your favorites</span>{' '}
				</Link>
			</div>
		</header>
	);
};
