import React from 'react';

import styles from './Footer.module.css';
import { museumBlack, modsen } from '@assets/assets';

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer-item']}>
				<img src={museumBlack} alt="Museum of Art" className="logo" />
			</div>
			<div className={styles['footer-item']}>
				<img src={modsen} alt="modsen" className="logo" />
			</div>
		</footer>
	);
};
