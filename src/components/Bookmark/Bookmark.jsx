import React, { Component } from 'react'
import { BsBookmark } from "react-icons/bs";
import styles from './bookmark.module.css';

export class Bookmark extends Component {
    render() {
        return (
            <div>
                <BsBookmark
                    className={styles.bookmark}
                />
            </div>
        )
    }
}
