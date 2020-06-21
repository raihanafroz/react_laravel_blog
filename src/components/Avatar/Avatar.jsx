import React from 'react';
import styles from './avatar.module.css';
import avatarIcon from './avatar.png'

export function Avatar({ avatar, name }) {
    return (
        <div className="d-flex align-items-center avatar-wrapper">
            <div className={styles.avatar}>
                <img src={ !avatar ? avatarIcon : avatar } alt="Profile picter"/>
            </div>
            <div className="ml-2">
                <p className={`${styles.name}`}>{ name }</p>
                <p className={styles.published}>June 20, 2020</p>
            </div>
        </div>
    )
}
