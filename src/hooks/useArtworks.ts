import { getPaints } from 'api/api';
import { useEffect, useState } from 'react';
import { Paint } from 'types/types';

const useArtworks = () => {
	const [artworks, setArtworks] = useState<Paint[]>([]);
	const [searchResults, setSearchResults] = useState<Paint[] | null>(null);
    const [, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchArtworks = async () => {
			try {
				const data = await getPaints();
				if (Array.isArray(data)) {
					setArtworks(data);
				} else {
					setError('Data is not an array:');
				}
			} catch {
                setError('Error loading data'); 
            			}
		};

		fetchArtworks();
	}, []);

	return { artworks, searchResults, setSearchResults };
};

export default useArtworks;
