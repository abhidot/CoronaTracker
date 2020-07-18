import React from 'react'
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h1>Causes</h1>
            <ul>
                <li>spreads primarily when people are in close contact. </li>
                <li>The virus spreads by respiratory droplets released when someone with the virus coughs, sneezes or talks.</li>
                <li>It can also spread if a person touches a surface with the virus on it and then touches his or her mouth, nose or eyes, although this isn't considered to be a main way it spreads.</li>
            </ul>
        </div>
    )
}

export default About
