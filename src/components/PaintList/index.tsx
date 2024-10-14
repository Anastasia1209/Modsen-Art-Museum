// // components/PaintList.tsx
// import React, { useEffect, useState } from 'react';
// import PaintCard from '../PaintCard'; // Импортируем компонент карточки

// const API_URL = 'https://api.example.com/art'; // Замените на ваш URL API
// type Artwork = {
//     id: number;
//     title: string;
//     author: string;
//     imageUrl: string;
//     publicStatus: string;
//   };
// const PaintList: React.FC = () => {
//     const [artworks, setArtworks] = useState<Artwork[]>([]);

//   useEffect(() => {
//     // Асинхронный запрос к API для получения данных
//     const fetchArtworks = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         setArtworks(data);
//       } catch (error) {
//         console.error('Ошибка при загрузке данных:', error);
//       }
//     };

//     fetchArtworks();
//   }, []);

//   return (
//     <div>
//       {artworks.map((artwork) => (
//         <PaintCard
//           key={artwork.id}
//           title={artwork.title}
//           author={artwork.author}
//           imageUrl={artwork.imageUrl}
//           publicStatus={artwork.publicStatus}
//         />
//       ))}
//     </div>
//   );
// };

// export default PaintList;

import React from 'react';
import PaintCard from '../PaintCard';
import styles from './PaintList.module.css'

// Локальные данные
const artworks = [
  {
    id: 1,
    title: "Charles V, bust length...",
    author: "Giovanni Britto",
    imageUrl: "https://example.com/images/charles_v.jpg",
    publicStatus: "Public"
  },
  {
    id: 2,
    title: "Another Artwork",
    author: "Another Author",
    imageUrl: "https://example.com/images/artwork2.jpg",
    publicStatus: "Public"
  }
];

const PaintList: React.FC = () => {
  return (
    <div className={styles.paintList}>
      {artworks.map((artwork) => (
        <PaintCard
          key={artwork.id}
          title={artwork.title}
          author={artwork.author}
          imageUrl={artwork.imageUrl}
          publicStatus={artwork.publicStatus}
        />
      ))}
    </div>
  );
};

export default PaintList;
