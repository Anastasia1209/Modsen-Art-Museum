import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import museum from '../../assets/logo/museum.svg';
import home from '../../assets/icons/home.svg';
import bookmark from '../../assets/icons/bookmark.svg';
import burger from '../../assets/icons/burger.svg';

export const Header: React.FC = () => {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={styles.header}>
			<div className={styles['header-item']}>
				<img src={museum} alt="Museum of Art" className="logo" />
			</div>

			<div className={styles.burgerMenu} onClick={toggleMenu}>
				<img src={isMenuOpen ? burger : burger} alt="Menu" />
			</div>

			<div className={`${styles.headerItems} ${isMenuOpen ? styles.open : ''}`}>
				{location.pathname !== '/' && (
					<Link to="/" className={styles['header-item']}>
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
