import { useState, useEffect, useCallback } from 'react';
import { Paint } from 'types/types';
import { getPaintsSearch } from 'api/api';
import { searchValidationSchema } from '../validation/validationSchema';
import { ValidationError } from 'yup';

export const useSearch = (setSearchResults: (results: Paint[]) => void) => {
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [validationError, setValidationError] = useState<string | null>(null);
	const [sortCriterion, setSortCriterion] = useState('default');

	const sortData = useCallback((data: Paint[]) => {
		return [...data].sort((a, b) => {
			switch (sortCriterion) {
				case 'title':
					return a.title.localeCompare(b.title);
				case 'author':
					return a.author.localeCompare(b.author);
				default:
					return 0;
			}
		});
	}, [sortCriterion]);

	const handleSearch = useCallback(async () => {
		if (!query) return;

		try {
			await searchValidationSchema.validate({ query });
			setValidationError(null);
			setLoading(true);
			setError(null);

			const data: Paint[] = await getPaintsSearch(query);
			setSearchResults(sortData(data));
		} catch (error) {
			if (error instanceof ValidationError) {
				setValidationError(error.message);
			} else {
				setError('Error performing search');
			}
		} finally {
			setLoading(false);
		}
	},  [query, setSearchResults, sortData]);

	useEffect(() => {
		const delayDebounce = setTimeout(() => {
			handleSearch();
		}, 500); 

		return () => clearTimeout(delayDebounce);
	}, [query, handleSearch]);

	return {
		query,
		setQuery,
		loading,
		error,
		validationError,
		sortCriterion,
		setSortCriterion,
		handleSearch,
	};
};
