import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import MainPage from './pages/MainPage/index';
import FavoritesPage from './pages/FavoritesPage';
import Error404 from './pages/Error404';

const RoutesComponent = () => (
	<Routes>
		<Route path="/" element={<MainPage />} />
		<Route path="/paint/:id" element={<DetailsPage />} />
		<Route path="/favorites" element={<FavoritesPage />} />
		<Route path="*" element={<Error404 />} />
	</Routes>
);

export default RoutesComponent;
