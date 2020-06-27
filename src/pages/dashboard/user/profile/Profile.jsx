import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MyProfile } from '../../../../components';
import styles from './profile.module.css';


export class Profile extends Component {
    render() {
        return (
            <div className="row">
                <div className={`col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-5 position-relative ${styles.mtMobile}`}>
                    <Link to='/dashboard/profile/edit' className={styles.btnEditProfile}>Edit Profile</Link>
                    <MyProfile />
                </div>
            </div>
        )
    }
}
