import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EditProfile } from '../../../../components';
import styles from './profile.module.css';


export class EditUserProfile extends Component {
    render() {
        return (
            <div className="row">
                <div className={`col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-5`}>
                    <EditProfile />
                </div>
            </div>
        )
    }
}
