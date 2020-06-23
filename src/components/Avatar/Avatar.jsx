import React from 'react';
import styles from './avatar.module.css';
import avatarIcon from './avatar.png'

export function Avatar({ avatar, name, published, height, width }) {
    return (
        <div className="d-flex align-items-center avatar-wrapper">
            <div className={styles.avatar} style={{ height: height ? height : '', width: width ? width : '' }}>
                <img src={ !avatar ? avatarIcon : avatar } alt="Profile picter"/>
            </div>
            <div className="ml-2">
                <p className={`${styles.name}`}>{ name }</p>
                <p className={styles.published}>{ published }</p>
            </div>
        </div>
    )
}
