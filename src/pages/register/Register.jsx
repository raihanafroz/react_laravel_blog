import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import styles from './register.module.css';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  margin: 0 auto;
  border-color: #D0021B;
  div{
      background-color: #D0021B;
  }
`;

class Register extends Component {
    render() {
        // console.log()
         return (
            <div className="row">
                <ToastContainer autoClose={3000} />
                <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-md-3">
                    <PulseLoader
                        css={override}
                        size={10}
                        color={"#123abc"}
                        loading={this.props.loading}
                    />
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
                        onSubmit={ (values,  { resetForm }) => {
                            this.props.dispatch({
                                type: 'user/REGISTER',
                                payload: values
                            })
                            resetForm()
                        }}
                    >
                        {
                            ({ errors, touched, values, dirty, isSubmitting, handleChange }) =>(
                                <div className="card p-4 mt-5">
                                    <h4 className="mb-4 text-center">Register</h4>
                                    <Form>
                                        <div className={styles.fieldGroup}>
                                            <Field 
                                                type="text"
                                                name="name"
                                                className={`${errors.name && touched.name ? styles.isInvalid : ""} ${styles.field}`}
                                                placeholder="Name"
                                            />
                                            {errors.name && touched.name ? ( <div className="text-danger">{errors.name}</div> ) : null}
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <Field type="text" name="email" className={`${errors.email && touched.email ? styles.isInvalid : ""} ${styles.field}`} placeholder="Email"/>
                                            {errors.email && touched.email ? ( <div className="text-danger">{errors.email}</div> ) : null}
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <Field type="password" name="password" className={`${errors.password && touched.password ? styles.isInvalid : ""} ${styles.field}`} placeholder="Password"/>
                                            {errors.password && touched.password ? ( <div className="text-danger">{errors.password}</div> ) : null}
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <Field type="password" name="confirm_password" className={`${errors.confirm_password && touched.confirm_password ? styles.isInvalid : ""} ${styles.field}`} placeholder="Confirm Password"/>
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

const mapStateToProps = (state) =>{
    return state.auth
}

export default connect(mapStateToProps)(Register);