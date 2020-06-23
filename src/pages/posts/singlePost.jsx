import React, { Component, Fragment } from 'react';
import { Avatar, Bookmark, CoverPhoto, Title, Like, CommentForm, Comments, NumberOfComment } from '../../components';
import photo from './img/post.png';
import styles from './singlePost.module.css'
import { Link } from 'react-router-dom';


export class SinglePost extends Component {
    
    state = {
        avater : {},
        coverPhoto: photo,
        title: 'This is first blog This is first blog ',
        excerpt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium totam maxime hic possimus? Vitae, perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium totam maxime hic possimus? Vitae, perspiciatis.'
    }

    render() {
        const { coverPhoto, title, excerpt } = this.state;
        return (
            <Fragment>
                <div className="row">
                    <div className={`col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 ${styles.mt_30}`}>
                        <div className="position-relative">
                            <div className={`mb-4 ${styles.title}`}>
                                <Title title={title} />
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <Avatar 
                                    name={'nazmul'}
                                    published={'June 20, 2020'}
                                />
                                <Bookmark />
                            </div>
                            <CoverPhoto coverPhoto={coverPhoto}/>
                            <p className="mt-2 mb-4">{ excerpt }</p>

                            {/* Tags */}
                            <ul className={styles.tags}>
                                <li><Link to="">Javascript</Link></li>
                                <li><Link to="">PHP</Link></li>
                                <li><Link to="">CSS</Link></li>
                            </ul>
                            {/* End tags */}

                            <hr/>
                            <div className={`mt-4 mb-4 ${styles.cardFooter}`}>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <Like />
                                    <NumberOfComment />
                                </div>
                            </div>
                            <div className="card p-4">
                                <CommentForm />
                            </div>
                            <Comments />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
