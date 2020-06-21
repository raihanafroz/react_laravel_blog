import React from 'react'
import styles from './title.module.css';


export function Title({ title }) {
    return (
        <React.Fragment>
            <h3 className={styles.title}>{ title }</h3>
        </React.Fragment>
    )
}
