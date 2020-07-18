import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.content}>
                <h1 className={styles.heading}>COVID-19</h1>
                <h4 className={styles.subHeading}>A Threat to Entire MANKIND...</h4>
            </div>
            {/* <img className={styles.image} src="https://images.unsplash.com/photo-1590292804913-a6174c36ecf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" ></img> */}
        </div>
    )
}

export default Home;
