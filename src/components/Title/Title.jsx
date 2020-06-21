import React from 'react'
import { Link } from 'react-router-dom';
import styles from './title.module.css';


export function Title({ title }) {
    return (
        <React.Fragment>
            <Link to="/" className={styles.title}>{ title }</Link>
        </React.Fragment>
    )
}
