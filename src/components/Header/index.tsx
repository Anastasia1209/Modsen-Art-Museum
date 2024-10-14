import React from 'react';
//import museumLogo from '/public/logo/museum.svg'
import styles from './Header.module.css'


export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles['header-item']}>
				<img src="/logo/museum.svg" alt="Museum of Art" className="logo" />
			</div>
			<div className={styles['header-item']}>
				<img src="/logo/bookmark.svg" alt="bookmark" className="logo" />
				<span className={styles.title} >Your favorites</span>
			</div>
		</header>
	);
};
