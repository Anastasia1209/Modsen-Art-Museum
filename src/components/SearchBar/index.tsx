import { search } from '@constants/assetsPaths';
import { useSearch } from '@hooks/useSearch';
import { SearchBarProps } from 'types/types';

import styles from './SearchBar.module.css';

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

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleSearch();
	};

	return (
		<form className={styles.searchBarContainer} onSubmit={handleSubmit}>
			<fieldset className={styles.searchBox}>
				<input
					type="text"
					placeholder="Search Art, Artist, Work..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className={styles.input}
				/>
				<button type="submit" className={styles.searchButton}>
					<img src={search} alt="Search Icon" className={styles.icon} />
				</button>
			</fieldset>

			<fieldset className={styles.sortContainer}>
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
			</fieldset>

			<div className={styles.messages}>
				{loading && <p className={styles.loading}>Loading...</p>}
				{validationError && <p className={styles.error}>{validationError}</p>}
				{error && <p className={styles.error}>{error}</p>}
			</div>
		</form>
	);
};
