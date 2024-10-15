export interface PaintFull {
	id: number;
	title: string;
	author: string;
	imageUrl: string;
	years: string;
	nationality: string;
	dimensions: string;
	creditLine: string;
	repository: string;
	status: string;
}

export interface Paint {
	id: number;
	title: string;
	author: string;
	imageUrl: string;
	status: string;
}

export interface PaintCardProps {
	id: number;
	title: string;
	author: string;
	imageUrl: string;
	status: string;
}
export interface PaintListProps {
	artworks: Paint[];
}


export interface ApiArtwork {
    id: number;
    title: string;
    artist_title: string | null; 
    image_id: string; 
    is_public_domain: boolean;
  }
