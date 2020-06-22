import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import styles from './register.module.css'

export class Register extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-md-3">
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            passwordConfirm: ''
                        }}
                        validationSchema={
                            Yup.object().shape({
                                email: Yup.string()
                                    .email('Invalid email')
                                    .required('Email is required'),
                                password: Yup.string()
                                    .min(6, 'Password should be minimum 6 characters')
                                    .required('Password is required'),
                                passwordConfirm: Yup.string()
                                .required('Password is required')
                                .min(6, 'Password should be minimum 6 characters')
                                .oneOf(
                                    [Yup.ref("password")],
                                    "Both password need to be the same"
                                  )
                            })
                        }
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {
                            ({ errors, touched }) =>(
                                <div className="card p-4 mt-5">
                                    <h4 className="mb-4 text-center">Register</h4>
                                    <Form>
                                        <div className={styles.fieldGroup}>
                                            <Field type="text" name="email" className={styles.field} placeholder="Email"/>
                                            {errors.email && touched.email ? ( <div className="text-danger">{errors.email}</div> ) : null}
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <Field type="password" name="password" className={styles.field} placeholder="Password"/>
                                            {errors.password && touched.password ? ( <div className="text-danger">{errors.password}</div> ) : null}
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <Field type="password" name="passwordConfirm" className={styles.field} placeholder="Confirm Password"/>
                                            {errors.passwordConfirm && touched.passwordConfirm ? ( <div className="text-danger">{errors.passwordConfirm}</div> ) : null}
                                        </div>
                                        <button type="submit" className={styles.btnsubmit}>Register</button>
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
