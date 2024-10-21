import { useEffect, useState } from 'react';

const useFavorites = (id: number, title: string, author: string, imageUrl: string, status: string) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some((fav: { id: number }) => fav.id === id));
  }, [id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (isFavorite) {
      favorites = favorites.filter((fav: { id: number }) => fav.id !== id);
      setIsFavorite(false);
    } else {
      const newFavorite = { id, title, author, imageUrl, status };
      favorites.push(newFavorite);
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return { isFavorite, toggleFavorite };
};

export default useFavorites;
