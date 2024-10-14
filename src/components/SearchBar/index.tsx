import React from 'react';
import styles from './SearchBar.module.css';

export const SearchBar: React.FC = () => {
    return (
        <div className={styles.searchBarContainer}>
            <div className={styles.searchBox}>
                <input
                    type="text"
                    placeholder="Search Art, Artist, Work..."
                    className={styles.input}
                />
                <button className={styles.searchButton}>
                    <img src="/logo/search.svg" alt="Search Icon" className={styles.icon} />
                </button>
            </div>
        </div>
    );
};
