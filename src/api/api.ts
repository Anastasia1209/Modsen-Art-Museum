import { API_BASE_URL, API_URL, IMAGE_BASE_URL } from '../constants/constants'
import { PaintFull } from '../types/types'
import { ApiArtwork, ApiResponse, Artwork, Paint } from '../types/types';
  
  export const fetchByText = async (
    search: string, 
    page: number = 1, 
    limit: number = 100
  ): Promise<ApiResponse> => { 
    const encodedSearch = encodeURIComponent(search);
    const response = await fetch(
      `${API_URL}?q=${encodedSearch}&limit=${limit}&page=${page}&fields=id,title,image_id,artist_title,is_on_view`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch artworks");
    }
    const data: ApiResponse = await response.json();
    return data;
  };
  
  export const getPaintsSearch = async (
    query: string,
    page: number = 1,
    limit: number = 100
): Promise<Paint[]> => {
    try {
      const result: ApiResponse = await fetchByText(query, page, limit);
  
      const data: Artwork[] = result.data;  
      const paints: Paint[] = data.map((item) => ({
        id: item.id,
        title: item.title,
        author: item.artist_title || 'Unknown', 
        imageUrl: item.image_id
          ? `${IMAGE_BASE_URL}/${item.image_id}/full/843,/0/default.jpg`
          : '', 
        status: item.is_on_view ? "Public" : "Private" , 
      }));
  
      return paints;
    } catch (error) {
      console.error('Error loading data:', error);
      throw new Error('Error loading data');
    }
  };
  
export const getPaints = async (): Promise<Paint[]> => {
	try {
		const response = await fetch(API_BASE_URL);
		if (!response.ok) {
			throw new Error('Error when requesting data');
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
		console.error('Error loading data:', error);
    throw new Error('Error loading data');
	}
};

export const getPaintById = async (id: number): Promise<PaintFull> => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Error when requesting data');
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
        console.error('Error loading data:', error);
        throw new Error('Error loading data');
      }
};

