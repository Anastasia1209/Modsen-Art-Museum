import React from 'react';
import { Header } from '../../components/Header/index';
import {Footer} from '../../components/Footer/index'
import styles from './MainPage.module.css'
import { SearchBar } from '../../components/SearchBar';
import PaintList from '../../components/PaintList';

const MainPage: React.FC = () => {
    return (
        <div className={styles.MainPage}>
            <Header />

            <div className={styles.content}>
                <p>Let&rsquo;s Find Some <span className={styles.highlight}>Art</span> <br /> Here!</p>
            </div>
            <SearchBar/>
            <PaintList/>
           <Footer />
        </div> 
    );
};

export default MainPage;
