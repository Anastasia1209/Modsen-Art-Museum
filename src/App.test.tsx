import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/index';
import DetailsPage from './pages/DetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import Error404 from './pages/Error404';

test('renders MainPage component', () => {
	render(
		<MemoryRouter initialEntries={['/']}>
			<MainPage />
		</MemoryRouter>
	);
	expect(screen.getByText(/Find Some/i)).toBeInTheDocument();
});

jest.mock('../src/components/DetailInfo', () => {
	const DetailInfo = () => <div>DetailInfo content</div>;
	DetailInfo.displayName = 'DetailInfo';
	return DetailInfo;
});

test('renders DetailsPage component', () => {
	render(
		<MemoryRouter initialEntries={['/paint/271551']}>
			<DetailsPage />
		</MemoryRouter>
	);
	expect(screen.getByText(/DetailInfo content/i)).toBeInTheDocument();
});

test('renders FavoritesPage component', () => {
	render(
		<MemoryRouter initialEntries={['/favorites']}>
			<FavoritesPage />
		</MemoryRouter>
	);
	expect(screen.getByText(/Your Favorites/i)).toBeInTheDocument();
});

test('renders Error404 component on invalid route', () => {
	render(
		<MemoryRouter initialEntries={['/invalid-route']}>
			<Error404 />
		</MemoryRouter>
	);
	expect(screen.getByText(/404/i)).toBeInTheDocument();
});
