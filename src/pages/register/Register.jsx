import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './register.module.css';

class Register extends Component {


    render() {
         return (
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-md-3">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirm_password: '',
                            gender: '',
                        }}
                        validationSchema={
                            Yup.object().shape({
                                name: Yup.string()
                                    .required('Name is required'),
                                email: Yup.string()
                                    .email('Invalid email')
                                    .required('Email is required'),
                                password: Yup.string()
                                    .min(6, 'Password should be minimum 6 characters')
                                    .required('Password is required'),
                                confirm_password: Yup.string()
                                .required('Password is required')
                                .min(6, 'Password should be minimum 6 characters')
                                .oneOf(
                                    [Yup.ref("password")],
                                    "Both password need to be the same"
                                  ),
                                gender: Yup.string().required('Gender is required')
                            })
                        }
                        onSubmit={ values => {
                            this.props.dispatch({
                                type: 'user/REGISTER',
                                payload: values
                            })
                        }}
                    >
                        {
                            ({ errors, touched, values, dirty, isSubmitting, handleChange }) =>(
                                <div className="card p-4 mt-5">
                                    <h4 className="mb-4 text-center">Register</h4>
                                    <Form>
                                        <div className={styles.fieldGroup}>
                                            <Field type="text" name="name" className={styles.field} placeholder="Name"/>
                                            {errors.name && touched.name ? ( <div className="text-danger">{errors.name}</div> ) : null}
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <Field type="text" name="email" className={styles.field} placeholder="Email"/>
                                            {errors.email && touched.email ? ( <div className="text-danger">{errors.email}</div> ) : null}
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <Field type="password" name="password" className={styles.field} placeholder="Password"/>
                                            {errors.password && touched.password ? ( <div className="text-danger">{errors.password}</div> ) : null}
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <Field type="password" name="confirm_password" className={styles.field} placeholder="Confirm Password"/>
                                            {errors.confirm_password && touched.confirm_password ? ( <div className="text-danger">{errors.confirm_password}</div> ) : null}
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

export default connect()(Register);