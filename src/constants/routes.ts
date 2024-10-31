import DetailsPage from '../pages/DetailsPage';
import Error404 from '../pages/Error404';
import FavoritesPage from '../pages/FavoritesPage';
import MainPage from '../pages/MainPage/index';

export const ROUTES = {
    HOME: '/',
    FAVORITES: '/favorites',
    DETAILS: '/paint/:id',
    ERROR: '*',
}

export const routesConfig = [
	{ path: ROUTES.HOME, component: MainPage },
	{ path: ROUTES.DETAILS, component: DetailsPage },
	{ path: ROUTES.FAVORITES, component: FavoritesPage },
	{ path: ROUTES.ERROR, component: Error404 },
];
