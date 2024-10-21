import { useState } from 'react';
import { Paint } from '@utils/types';
import { getPaintsSearch } from '@utils/api';
import { searchValidationSchema } from '../validation/validationSchema';

export const useSearch = (setSearchResults: (results: Paint[]) => void) => {
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [validationError, setValidationError] = useState<string | null>(null);
	const [sortCriterion, setSortCriterion] = useState('default');

	const handleSearch = async () => {
		if (!query) return;

		try {
			await searchValidationSchema.validate({ query });
			setValidationError(null);
			setLoading(true);
			setError(null);

			const data: Paint[] = await getPaintsSearch(query);
			setSearchResults(sortData(data));
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

	const sortData = (data: Paint[]) => {
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
	};

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
