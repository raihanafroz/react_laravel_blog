import React, {Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Search, Avatar } from '../../components';
import { connect } from 'react-redux';
import styles from './navbar.module.css';

class Navbar extends Component {
    state={
        isToggleOn: true,
        isDropDown: true
    }

    clickMenu = () =>{
        this.setState( state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    closeMenu = () =>{
        this.setState({ isToggleOn: true, isDropDown: true })
    }

    dropDown = () =>{
        this.setState( state => ({
            isDropDown: !state.isDropDown
        }))
    }

    render() {
        console.log(this.props)
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
                        {!this.props.isLoggedIn?
                            <ul className={`${this.state.isToggleOn === true ? styles.mainMenu : ''} ${styles.mobileMenu} navbar-nav ml-lg-auto`}>
                                <li className={`nav-item ${styles.navItem}`}>
                                    <Link onClick={this.closeMenu} className={`${styles.navLink} nav-link`} to="/login">Login</Link>
                                </li>
                                <li className={`nav-item ${styles.navItem}`}>
                                    <Link onClick={this.closeMenu} className={`${styles.navLink} nav-link`} to="/register">Register</Link>
                                </li>
                            </ul>
                        : 
                            <ul className={`${this.state.isToggleOn === true ? styles.mainMenu : ''} ${styles.mobileMenu} navbar-nav ml-lg-auto`}>
                                <li className={`${styles.navLink}`}>
                                    <button onClick={this.dropDown}>
                                        <Avatar
                                            height="40px"
                                            width="40px"
                                            // name={}
                                        />
                                    </button>
                                    <ul className={`${styles.dropDownHidden} ${this.state.isDropDown ? '' : styles.dropDown }`}>
                                        <li><Link onClick={this.closeMenu} to='/dashboard/profile'>My profile</Link></li>
                                        <li><Link onClick={this.closeMenu} to='/'>Setting</Link></li>
                                        <li><Link onClick={this.closeMenu} to='/'>Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        }
                </nav>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return state.auth
}

export default connect(mapStateToProps)(Navbar);