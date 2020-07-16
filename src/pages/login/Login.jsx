import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';
import { css } from "@emotion/core";
import { Redirect } from 'react-router-dom'
import PulseLoader from "react-spinners/PulseLoader";
import styles from './login.module.css';

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


class Login extends Component {
    render() {
        const { isLoggedIn, loading } = this.props
        if(isLoggedIn){
            return <Redirect to="/" />
        } else{
        return (
            <div className="row">
                <ToastContainer autoClose={3000} />
                <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                    <PulseLoader
                        css={override}
                        size={10}
                        color={"#123abc"}
                        loading={this.props.loading}
                    />
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
                        onSubmit={ (values,  { resetForm }) => {
                            this.props.dispatch({
                                type: 'user/LOGIN',
                                payload: values
                            })
                            if(loading){
                                resetForm()
                            }
                        }}
                    >
                        {
                            ({ errors, touched, values, isSubmitting }) =>(
                                <div className="card p-4 mt-5">
                                    <h4 className="mb-4 text-center">Login</h4>
                                    <Form>
                                        <div className={styles.fieldGroup}>
                                            <Field type="text" name="email" className={styles.field} value={values.email} placeholder="Email"/>
                                            {errors.email && touched.email ? ( <div className="text-danger">{errors.email}</div> ) : null}
                                        </div>
                                        <div className={styles.fieldGroup}>
                                            <Field type="password" name="password" className={styles.field} placeholder="Password"/>
                                            {errors.password && touched.password ? ( <div className="text-danger">{errors.password}</div> ) : null}
                                        </div>
                                        <Link to="/forgot" style={{marginBottom: "10px", display: "block"}}>Forgot password?</Link>
                                        <div className={`d-flex ${styles.btnWrapper}`}>
                                            <p>Create account <Link to="/register">Register</Link></p>
                                            <button type="submit" className={styles.btnsubmit} disabled={isSubmitting}>Login</button>
                                        </div>
                                    </Form>
                                </div>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )}
    }
}

const mapStateToProps = (state) =>{
    return state.auth
}

export default connect(mapStateToProps)(Login);