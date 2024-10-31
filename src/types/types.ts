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
	author: string ; 
    imageUrl: string ; 
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

export interface Painting {
	id: number;
	title: string;
	author: string;
	status: string;
	imageUrl: string;
}

export interface GalleryProps {
	paintings: Painting[];
}


export interface ApiArtwork {
    id: number;
    title: string;
    artist_title: string | null; 
    image_id: string; 
    is_public_domain: boolean;
  }

export interface SearchBarProps {
	setSearchResults: (results: Paint[] | null) => void;
}

export interface PaginationProps {
	currentPage: number;
	totalPages: number;
	pagesPerRange: number;
	onPageChange: (pageNumber: number) => void;
}

export interface Artwork {
    id: number;
    title: string;
    artist_title: string | null; 
    image_id: string | null; 
    is_on_view: boolean; 
  }
  
  export interface Config {
    iiif_url: string; 
    website_url: string; 
  }
  
  export interface Pagination {
    total: number; 
    limit: number; 
    offset: number; 
    total_pages: number; 
    current_page: number; 
  }
  
  export interface Info {
    license_text: string; 
    license_links: string[]; 
    version: string; 
  }
  
  export interface ApiResponse {
    pagination: Pagination;
    data: Artwork[];
    info: Info;
    config: Config;
  }
  
