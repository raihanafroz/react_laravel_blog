import React, { Component } from 'react'
import { GoComment } from "react-icons/go";
import styles from './numberofcomment.module.css';

export class NumberOfComment extends Component {
    render() {
        return (
            <div className={`d-flex align-items-center ${styles.likeWrapper}`}>
                <GoComment
                    className={styles.like}
                />
                <p className="mb-0 ml-1">10</p>
            </div>
        )
    }
}
