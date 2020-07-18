import React from 'react';
import styles from './Symptoms.module.css';
const Symptoms = () => {
    return (
        <div className={styles.symptoms}>
            <h1>Symptoms</h1>
            <ul>
                <li><span>Trouble breathing</span></li>
                <li><span>Persistent chest pain or pressure</span></li>
                <li><span>Inability to stay awake</span></li>
                <li><span>New confusion</span></li>
                <li><span>Blue lips or face</span></li>
            </ul>
        </div>
    )
}

export default Symptoms
