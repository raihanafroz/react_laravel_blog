import React, { Component, Fragment } from 'react';
import { Avatar } from '../';
import { IoIosCamera } from "react-icons/io";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import styles from './myprofile.module.css';

export class EditProfile extends Component {
    render() {
        return (
            <Fragment>
                <Formik
                    initialValues={{
                        name: ''
                    }}
                    validationSchema={
                        Yup.object().shape({
                            name: Yup.string()
                                .required('Name is required'),
                        })
                    }
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {
                        ({ errors, touched }) =>(
                            <Form className="d-flex fex flex-column align-items-center">
                                <div className="mb-3">
                                    <Avatar
                                        height={"80px"}
                                        width={"80px"}
                                    />
                                    <div>
                                        <label htmlFor="profile-pic" className={styles.camera}>
                                            <IoIosCamera className={styles.cameraIcon} />
                                        </label>
                                        <Field type="file" name="avatar" id="profile-pic" className={styles.fileUpload} />
                                    </div>
                                </div>
                                <div className="mt-3 w-100">
                                    <div className={styles.fieldGroup}>
                                        <Field type="text" name="name" className={styles.field} placeholder="Name"/>
                                        {errors.name && touched.name ? ( <div className="text-danger">{errors.name}</div> ) : null}
                                    </div>
                                    <div className={styles.fieldGroup}>
                                        <Field name="bio" as="textarea" placeholder="Bio" className={styles.field} rows={3}/>
                                    </div>
                                    <button type="submit" className={styles.btnsubmit}>Update</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </Fragment>
        )
    }
}
