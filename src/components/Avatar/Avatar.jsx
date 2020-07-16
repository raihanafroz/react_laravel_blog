import React from 'react';
import styles from './avatar.module.css';
import avatarIcon from './avatar.png'

export function Avatar({ avatar, name, published, height, width, bio }) {
    return (
        <div className={`d-flex avatar-wrapper ${!bio ? `` : `${styles.avatarWrapperBioMobile}`}`}>
            <div className={styles.avatar} style={{ height: height ? height : '', width: width ? width : '' }}>
                <img src={ !avatar ? avatarIcon : avatar } alt="Profile picter"/>
            </div>
            <div className={`${!bio ? 'ml-2' : `ml-3 ${styles.avatarWrapperBioMobileMt}`}`}>
                <p className={`${styles.name}`}>{ name }</p>
                <p className={styles.published}>{ published }</p>
                <p className={`mt-3`}>{ bio }</p>
            </div>
        </div>
    )
}
