import React from 'react';

import styles from './SearchBar.module.css';
import { search } from '@assets/assets';
import { SearchBarProps } from '@utils/types';

import { useSearch } from '../../hooks/useSearch';

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchResults }) => {
	const {
		query,
		setQuery,
		loading,
		error,
		validationError,
		sortCriterion,
		setSortCriterion,
		handleSearch,
	} = useSearch(setSearchResults);

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

			<div className={styles.sortContainer}>
				<label className={styles.sortLabel} htmlFor="sort">
					Sort by:
				</label>
				<select
					id="sort"
					value={sortCriterion}
					onChange={(e) => setSortCriterion(e.target.value)}
					className={styles.select}
				>
					<option value="default">Default</option>
					<option value="title">Title</option>
					<option value="author">Author</option>
				</select>
			</div>

			<div className={styles.messages}>
				{loading && <p className={styles.loading}>Loading...</p>}
				{validationError && <p className={styles.error}>{validationError}</p>}
				{error && <p className={styles.error}>{error}</p>}
			</div>
		</div>
	);
};
