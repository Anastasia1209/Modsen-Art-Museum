import React from 'react';
import styles from './Footer.module.css';
import museum from '../../assets/logo/museum-black.svg';
import modsen from '../../assets/logo/modsen.svg';

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer-item']}>
				<img src={museum} alt="Museum of Art" className="logo" />
			</div>
			<div className={styles['footer-item']}>
				<img src={modsen} alt="modsen" className="logo" />
			</div>
		</footer>
	);
};
