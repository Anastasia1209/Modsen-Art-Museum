import { PaintFull } from '../types/types'
import { Paint } from '../types/types';
import { API_BASE_URL } from '../constants/constants'
import { ApiArtwork } from '../types/types';

export const getPaints = async (): Promise<Paint[]> => {
	try {
		const response = await fetch(API_BASE_URL);
		if (!response.ok) {
			throw new Error('Ошибка при запросе данных');
		}
        const result = await response.json(); 
        const data: ApiArtwork[] = result.data;

        const paints: Paint[] = data.map((item) => ({
            id: item.id,
            title: item.title,
            author: item.artist_title || 'Unknown', 
            imageUrl: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`, 
            status: item.is_public_domain ? 'Public' : 'Private',
          }));

		return paints;
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error);
		throw error;
	}
};

export const getPaintById = async (id: number): Promise<PaintFull> => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Ошибка при запросе данных');
        }
        const result = await response.json();
        const data = result.data;

        return {
            id: data.id,
            title: data.title,
            author: data.artist_display || 'Unknown', 
            imageUrl: `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`, 
            years: data.date_display || 'Unknown', 
            nationality: data.artist_nationality || 'Unknown', 
            dimensions: data.dimensions || 'Unknown', 
            creditLine: data.credit_line || 'Unknown', 
            repository: data.repository || 'Unknown', 
            status: data.is_public_domain ? 'Public' : 'Private', 
        };
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        throw error;
    }
};

