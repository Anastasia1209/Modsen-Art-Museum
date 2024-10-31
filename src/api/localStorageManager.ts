import { Paint } from 'types/types';

const localStorageManager = {
  getFavorites: (): Paint[] => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  },
  saveFavorites: (favorites: Paint[]) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  },
};

export default localStorageManager;
