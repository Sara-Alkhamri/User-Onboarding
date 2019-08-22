import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';
import { restElement } from '@babel/types';

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

                <label className="checkbox">Agree to Terms of Service
                <Field name="terms" type="checkbox" checked={values.terms} />
                <span className="checkmark" />
                {touched.terms && errors.terms && (
                    <p className="error">{errors.terms}</p>
                )}
                </label>

                <button type="submit">
                </button>
            </Form>
            
            {users.map(user => (
                <p key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.role}</p>
                <p>{user.email}</p>
                </p>
            ))}
                    

        </div>
        
    )

}


const formikHOC = withFormik ({
    mapPropsToValues({ name, role, email, password, terms }) {
        return {
            name: name || "",
            role: role || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
        .required("What's you name?"),

        role: Yup.string()
        .required("What's your role?"),

        email: Yup.string()
        .required("What's your email?"),

        password: Yup.string()
        .required("Password Required"),

        terms: Yup.bool()
        .oneOf([true], 'Must Agree to Terms of Service')
    }),

    handleSubmit(values, {setStatus, resetForm}) {
        axios
            .post("https://reqres.in/api/users/", values)
            .then(response => {
                console.log("handelSubmit: then: response: ", response);
                setStatus(response.data);
                restElement();
            })
            .catch (error => console.log("handelSubmit: then: error: ", error))
    }
        
})

const NewFormWithFormik = formikHOC(NewForm);





export default NewFormWithFormik;