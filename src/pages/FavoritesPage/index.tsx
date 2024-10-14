import React from 'react';
import { Header } from '../../components/Header/index';
import {Footer} from '../../components/Footer/index'
import styles from './MainPage.module.css'

const FavoritesPage: React.FC = () => {
    return (
        <div className={styles.FavoritesPage}>
            <Header />

           <Footer />
        </div>
    );
};

export default FavoritesPage;
