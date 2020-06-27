import React, { Component } from 'react';
import { Avatar } from '../'
import styles from './myprofile.module.css';

export class MyProfile extends Component {
    render() {
        return (
            <Avatar
                name={"Nazmul"}
                height={"80px"}
                width={"80px"}
                bio={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum, neque ac sodales lacinia, quam nunc venenatis ipsum, non convallis quam erat ut mi. Nam ornare sit amet massa ut accumsan. Integer a tincidunt nisi, ac maximus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. '}
            />
        )
    }
}
