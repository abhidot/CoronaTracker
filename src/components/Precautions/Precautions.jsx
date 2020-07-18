import React from 'react';
import styles from './Precautions.module.css';

const Precautions = () => {
    return (
        <div>
            <div className={styles.precautions}>
            <h1>Precautions</h1>
            <div className={styles.content}>
                <img src="../../images/precautions.gif" alt="image"></img>
                <ol>
                    <li><span>STAY</span> home</li>
                    <li><span>KEEP</span> a safe distance</li>
                    <li><span>WASH</span> hands often</li>
                    <li><span>COVER</span> your cough</li>
                    <li><span>SICK?</span> Call the helpline</li>
                </ol>
            </div>
        </div>
        </div>
    )
}

export default Precautions
