import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import search from '../../assets/icons/search.svg';
import { Paint } from '../../types/types';
import { getPaintsSearch } from '../../services/api';

interface SearchBarProps {
	setSearchResults: (results: Paint[] | null) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchResults }) => {
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSearch = async () => {
		if (!query) return;

		try {
			setLoading(true);
			setError(null);

			const data: Paint[] = await getPaintsSearch(query);
			setSearchResults(data);
		} catch (error: any) {
			setError(error.message || 'Ошибка при выполнении поиска');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.searchBarContainer}>
			<div className={styles.searchBox}>
				<input
					type="text"
					placeholder="Search Art, Artist, Work..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className={styles.input}
				/>
				<button onClick={handleSearch} className={styles.searchButton}>
					<img src={search} alt="Search Icon" className={styles.icon} />
				</button>
			</div>

			{loading && <p>Loading...</p>}

			{error && <p className={styles.error}>{error}</p>}
		</div>
	);
};
