import React, { Component } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import styles from './like.module.css';

export class Like extends Component {
    render() {
        return (
            <div className={`d-flex align-items-center ${styles.likeWrapper}`}>
                <IoMdHeartEmpty
                    className={styles.like}
                />
                <p className="mb-0 ml-1">10</p>
            </div>
        )
    }
}
