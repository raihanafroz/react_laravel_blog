import React, {Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Search } from '../../components/index';
import styles from './navbar.module.css';

export class Navbar extends Component {
    state={
        isToggleOn: true
    }

    clickMenu = () =>{
        this.setState( state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    closeMenu = () =>{
        this.setState({ isToggleOn: true })
    }

    render() {
        return (
            <Fragment>
                <nav className={`navbar navbar-expand-lg fixed-top ${styles.mianNavbar}`}>
                    <div className={styles.moblieNavGroup}>
                        <Link to="/">RAST</Link>
                        <Search/>
                        <button onClick={this.clickMenu} style={{fontSize: "30px"}} className={`ml-md-auto ${styles.mobileMenuBtn}`}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                    <ul className={`${this.state.isToggleOn === true ? styles.mainMenu : ''} ${styles.mobileMenu} navbar-nav ml-lg-auto`}>
                        <li className={`nav-item ${styles.navItem}`}>
                            <Link onClick={this.closeMenu} className={`${styles.navLink} nav-link`} to="/">Home</Link>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <Link onClick={this.closeMenu} className={`${styles.navLink} nav-link`} to="/about">About</Link>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <Link onClick={this.closeMenu} className={`${styles.navLink} nav-link`} to="/blog">Blog</Link>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <Link onClick={this.closeMenu} className={`${styles.navLink} nav-link`} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}
