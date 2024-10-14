import React from 'react';
import styles from './PaintCard.module.css';

interface PaintCardProps {
  title: string;
  author: string;
  imageUrl: string;
  publicStatus: string;
}

const PaintCard: React.FC<PaintCardProps> = ({ title, author, imageUrl, publicStatus }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
        <p className={styles.status}>{publicStatus}</p>
      </div>
      <button className={styles.favoriteButton} >
        <img src="/logo/Icons.svg" alt='favorites' ></img>
      </button>
    </div>
  );
};

export default PaintCard;
