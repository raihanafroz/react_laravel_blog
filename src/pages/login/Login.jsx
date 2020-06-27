import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import styles from './login.module.css'
import { Link } from 'react-router-dom';

export class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={
                            Yup.object().shape({
                                email: Yup.string()
                                    .email('Invalid email')
                                    .required('Email is required'),
                                password: Yup.string()
                                    .min(6, 'Password should be minimum 6 characters')
                                    .required('Email is required')
                            })
                        }
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {
                            ({ errors, touched }) =>(
                                <div className="card p-4 mt-5">
                                    <h4 className="mb-4 text-center">Login</h4>
                                    <Form>
                                        <div className={styles.fieldGroup}>
                                            <Field type="text" name="email" className={styles.field} placeholder="Email"/>
                                            {errors.email && touched.email ? ( <div className="text-danger">{errors.email}</div> ) : null}
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <Field type="password" name="password" className={styles.field} placeholder="Password"/>
                                            {errors.password && touched.password ? ( <div className="text-danger">{errors.password}</div> ) : null}
                                        </div>
                                        <Link to="/forgot" style={{marginBottom: "10px", display: "block"}}>Forgot password?</Link>
                                        <div className={`d-flex ${styles.btnWrapper}`}>
                                            <p>Create account <Link to="/register">Register</Link></p>
                                            <button type="submit" className={styles.btnsubmit}>Login</button>
                                        </div>
                                    </Form>
                                </div>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
