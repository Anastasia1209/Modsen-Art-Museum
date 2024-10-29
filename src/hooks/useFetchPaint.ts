import { useEffect, useState } from 'react';
import { PaintFull } from 'types/types';
import { getPaintById } from 'api/api';

const useFetchPaint = (id: string | undefined) => {
	const [paint, setPaint] = useState<PaintFull | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPaint = async () => {
			if (id) {
				try {
					setLoading(true);
					const fetchedPaint = await getPaintById(Number(id));
					setPaint(fetchedPaint);
				} catch {
					setError('Ошибка при загрузке данных');
				} finally {
					setLoading(false);
				}
			}
		};
		fetchPaint();
	}, [id]);

	return { paint, loading, error };
};

export default useFetchPaint;
