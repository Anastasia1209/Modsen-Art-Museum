import React from 'react';
import styles from './Footer.module.css'


export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer-item']}>
				<img src="/logo/museum-black.svg" alt="Museum of Art" className="logo" />
			</div>
			<div className={styles['footer-item']}>
				<img src="/logo/modsen.svg" alt="modsen" className="logo" />
			</div>
		</footer>
	);
};
