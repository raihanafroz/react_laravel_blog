import React from 'react';
import styles from './coverphoto.module.css';


export function CoverPhoto({coverPhoto}) {
    return (
        <div className={styles.coverPhoto}>
            <img className="mt-3 mb-3" src={coverPhoto} alt="Cover photo"/>
        </div>
    )
}
