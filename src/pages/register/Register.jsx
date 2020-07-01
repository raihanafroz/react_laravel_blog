import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import styles from './register.module.css';

export class Register extends Component {


    render() {
         return (
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-md-3">
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            passwordConfirm: '',
                            gender: '',
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
                                  ),
                                gender: Yup.string().required('Gender is required')
                            })
                        }
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {
                            ({ errors, touched, values, dirty, isSubmitting, handleChange, setFieldValue }) =>(
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
                                        <div className={styles.fieldGroup}>
                                            <div>
                                                <Field type="radio" name="gender" id="male" value="male" checked= { values.gender === "male" } onChange={handleChange}/>
                                                <label htmlFor="male" className="ml-2">Male</label>
                                            </div>
                                            <div>
                                                <Field type="radio" name="gender" id="female" value="female" checked= { values.gender === "female" } onChange={handleChange}/>
                                                <label htmlFor="female" className="ml-2">Female</label>
                                            </div>
                                            {errors.gender && touched.gender ? ( <div className="text-danger">{errors.gender}</div> ) : null}
                                        </div>
                                        <div className={`d-flex ${styles.btnWrapper}`}>
                                            <p>Have an account? <Link to='/login'>Login</Link></p>
                                            <button type="submit" className={styles.btnsubmit} disabled={isSubmitting}>Register</button>
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
