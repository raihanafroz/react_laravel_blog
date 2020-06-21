import React, { Component } from 'react';
import { Avatar, Like, CommentForm } from '../'
import styles from './comment.module.css'

export class Comments extends Component {
    state ={
        replyForm: true
    }

    replyBtnClick = () =>{
        this.setState({
            replyForm: false
        })
    }

    render() {
        return (
            <div className="card p-4 mt-4 mb-4">
                <div className="mb-2">
                    <Avatar
                        name={"Nazmul"}
                    />
                </div>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, maiores tenetur, rerum illo ipsa accusantium porro distinctio cupiditate officiis inventore impedit a. Voluptatum ipsam adipisci nesciunt temporibus reiciendis voluptate eos!</p>
                <hr/>
                <div className="d-flex align-items-center">
                    <button onClick={this.replyBtnClick} className={styles.btnsubmit} style={{marginTop: 0, marginRight: "10px"}}>Reply</button>
                    <Like />
                </div>
                <div className={`ml-lg-5 mt-4 ${this.state.replyForm ? styles.replyForm : "" }`}>
                    <CommentForm />
                </div>
            </div>
        )
    }
}
