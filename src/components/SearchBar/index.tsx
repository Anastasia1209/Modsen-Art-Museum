import React, { useState } from 'react';

import styles from './SearchBar.module.css';
import { search } from '@assets/assets';
import { Paint, SearchBarProps } from '@utils/types';
import { getPaintsSearch } from '@utils/api';
import { searchValidationSchema } from '../../validation/validationSchema';

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchResults }) => {
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [validationError, setValidationError] = useState<string | null>(null);

	const handleSearch = async () => {
		if (!query) return;

		try {
			await searchValidationSchema.validate({ query });
			setValidationError(null);

			setLoading(true);
			setError(null);

			const data: Paint[] = await getPaintsSearch(query);
			setSearchResults(data);
		} catch (error: any) {
			if (error.name === 'ValidationError') {
				setValidationError(error.message);
			} else {
				setError('Ошибка при выполнении поиска');
			}
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
			<div className={styles.messages}>
				{loading && <p className={styles.loading}>Loading...</p>}
				{validationError && <p className={styles.error}>{validationError}</p>}
				{error && <p className={styles.error}>{error}</p>}
			</div>
		</div>
	);
};
