import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Bookmark, CoverPhoto, Title, Like, NumberOfComment } from '../../components';
import photo from './img/post.png';
import styles from './post.module.css'


export class Posts extends Component {
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
                    <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-4 ${styles.mt_30}`}>
                        <div className="card position-relative h-100 p-3">
                            <div className="d-flex justify-content-between">
                                <Avatar 
                                    name={'nazmul'}
                                />
                                <Bookmark />
                            </div>
                            <Link to="/">
                                <CoverPhoto coverPhoto={coverPhoto}/>
                            </Link>
                            <Title title={title} />
                            <p className="mt-2 mb-1">{ `${excerpt.substring(0, 100)}....` }<Link to="/">Read more</Link></p>
                            <hr/>
                            <div className={styles.cardFooter}>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <Like />
                                    <NumberOfComment />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-4 ${styles.mt_30}`}>
                        <div className="card position-relative h-100 p-3">
                            <div className="d-flex justify-content-between">
                                <Avatar 
                                    name={'nazmul'}
                                />
                                <Bookmark />
                            </div>
                            <Link to="/">
                                <CoverPhoto coverPhoto={coverPhoto}/>
                            </Link>
                            <Title title={title} />
                            <p className="mt-2 mb-1">{ `${excerpt.substring(0, 100)}....` }<Link to="/">Read more</Link></p>
                            <hr/>
                            <div className={styles.cardFooter}>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <Like />
                                    <NumberOfComment />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-4 ${styles.mt_30}`}>
                        <div className="card position-relative h-100 p-3">
                            <div className="d-flex justify-content-between">
                                <Avatar 
                                    name={'nazmul'}
                                />
                                <Bookmark />
                            </div>
                            <Link to="/">
                                <CoverPhoto coverPhoto={coverPhoto}/>
                            </Link>
                            <Title title={title} />
                            <p className="mt-2 mb-1">{ `${excerpt.substring(0, 100)}....` }<Link to="/">Read more</Link></p>
                            <hr/>
                            <div className={styles.cardFooter}>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <Like />
                                    <NumberOfComment />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-6 col-lg-6 col-xl-4 ${styles.mt_30}`}>
                        <div className="card position-relative h-100 p-3">
                            <div className="d-flex justify-content-between">
                                <Avatar 
                                    name={'nazmul'}
                                />
                                <Bookmark />
                            </div>
                            <Link to="/">
                                <CoverPhoto coverPhoto={coverPhoto}/>
                            </Link>
                            <Title title={title} />
                            <p className="mt-2 mb-1">{ `${excerpt.substring(0, 100)}....` }<Link to="/">Read more</Link></p>
                            <hr/>
                            <div className={styles.cardFooter}>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <Like />
                                    <NumberOfComment />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
