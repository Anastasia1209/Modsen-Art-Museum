import { useToggle } from '@hooks/useToggle';
import { bookmark, burger,home, museum } from 'constants/assetsPaths';
import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.css';

export const Header: React.FC = () => {
	const location = useLocation();
	const { isOpen, toggle, ref } = useToggle();

	return (
		<header className={styles.header}>
			<div className={styles['header-item']}>
				<img src={museum} alt="Museum of Art" className="logo" />
			</div>

			<div className={styles.burgerMenu} onClick={toggle}>
				<img src={burger} alt="Menu" />
			</div>

			<nav
				ref={ref}
				className={`${styles.headerItems} ${isOpen ? styles.open : ''}`}
			>
				{location.pathname !== '/' && (
					<Link to="/" className={styles['header-item']} onClick={toggle}>
						<img src={home} alt="home" className="logo" />
						<span className={styles.title}>Home</span>
					</Link>
				)}
				<Link to="/favorites" className={styles['header-item']}>
					<img src={bookmark} alt="bookmark" className="logo" />
					<span className={styles.title}>Your favorites</span>{' '}
				</Link>
			</nav>
		</header>
	);
};
