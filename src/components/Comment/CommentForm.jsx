import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Avatar } from '../'
import * as Yup from "yup";
import styles from './comment.module.css'

export class CommentForm extends Component {
    render() {
        return (
            <div>
                <div className="mb-3">
                    <Avatar
                        name={"Nazmul"}
                    />
                </div>
                <Formik
                    initialValues={{
                        body: '',
                    }}
                    validationSchema={
                        Yup.object().shape({
                            body: Yup.string()
                                .required('Comment is required'),
                        })
                    }
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {
                        ({ errors, touched }) =>(
                            <Form>
                                <Field name="body" as="textarea" className={styles.body} rows={3}/>
                                {errors.body && touched.body ? ( <div className="text-danger">{errors.body}</div> ) : null}
                                <button type="submit" className={styles.btnsubmit}>Post</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}
