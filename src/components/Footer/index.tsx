import { modsen,museumBlack } from '@constants/assetsPaths';

import styles from './Footer.module.css';

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
