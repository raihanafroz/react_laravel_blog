import React, { Component, Fragment } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './search.module.css';


export class Search extends Component {
    render() {
        return (
            <Fragment>
                <form className={`ml-sm-2 ml-md-4 form-inline my-2 my-lg-0 ${styles.searchForm}`}>
                    <input type="text" className= {`form-control mr-sm-2 ${styles.searchInput}`} placeholder="Search"/>
                    <button type="submit" className={styles.btnSearch} >
                        <AiOutlineSearch />
                    </button>
                </form>
            </Fragment>
        )
    }
}

