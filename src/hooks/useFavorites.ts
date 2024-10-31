import { useEffect, useState } from 'react';

import localStorageManager from '../api/localStorageManager'

const useFavorites = (id: number, title: string, author: string, imageUrl: string, status: string) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = localStorageManager.getFavorites();
    setIsFavorite(favorites.some((fav: { id: number }) => fav.id === id));
  }, [id]);

  const toggleFavorite = () => {
    let favorites = localStorageManager.getFavorites();

    if (isFavorite) {
      favorites = favorites.filter((fav: { id: number }) => fav.id !== id);
      setIsFavorite(false);
    } else {
      const newFavorite = { id, title, author, imageUrl, status };
      favorites.push(newFavorite);
      setIsFavorite(true);
    }

    localStorageManager.saveFavorites(favorites);
  };

  return { isFavorite, toggleFavorite };
};

export default useFavorites;
