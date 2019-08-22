import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';

const NewForm = ({errors, touched, values, status}) => {
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status]);

    return (
        <div>
            <h1>Please fill out the form below</h1>
            <Form className="form">
                <Field className="field" component="input" type="text" name="name" placeholder="Enter Name" />
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}

                <Field className="role" component="select" type="text" name="role">
                <option>Select Role</option>
                <option value="dev">Developer</option>
                <option value="ux">Designer</option>
                <option value="tl">Team Lead</option>
                </Field>
                {touched.role && errors.role && (
                    <p className="error">{errors.role}</p>
                )}

                <Field className="field" component="input" type="text" name="email" placeholder="Enter Email" />
                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}

                <Field className="field" component="input" type="password" name="password" placeholder="Enter Password" />
                {touched.password && errors.password && (
                    <p className="errors">{errors.password}</p>
                )}

                <label className="checkbox">Remember Me
                <Field name="remember" type="checkbox" checked={values.remember} />
                <span className="checkmark" />
                {touched.remember && errors.remember && (
                    <p className="error">{errors.remember}</p>
                )}
                </label>

                <button type="submit">
                </button>
            </Form>








        </div>
    )



}

export default NewForm;