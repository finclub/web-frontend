// src\pages\authentication\registration\Registration.js
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './Registration.module.css'

// Validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Full Name is required'),
    phone_number: Yup.string()
        .required('Phone Number is required')
        .matches(/^[0-9]{10}$/, 'Phone Number must be 10 digits'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
})

const initialValues = {
    name: '',
    phone_number: '',
    email: '',
    password: '',
}

const Register = () => {
    const [showPopup, setShowPopup] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                throw new Error('Failed to register')
            }

            const data = await response.json()
            console.log('Registration successful:', data)

            setShowPopup(true)

            setTimeout(() => {
                setShowPopup(false)
                navigate('/dashboard')
            }, 2000)
        } catch (error) {
            console.error('Error during registration:', error)
            alert('Registration failed. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className={styles.body}>


            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className={styles.formContainer}>
                        <div className={styles.formTitle}>
                            <h1>REGISTRATION FORM</h1>
                        </div>
                        <div className={styles.form}>
                            <div className={styles.row}>
                                <div>
                                    <label htmlFor="name">Full Name *</label>
                                    <div className={styles.inputForm}>
                                        <Field name="name">
                                            {({ field, form }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    className={`${styles.input} ${form.touched.name && form.errors.name && styles.errorInput
                                                        }`}
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name="name" component="span" className={styles.error} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone_number">Phone Number *</label>
                                    <div className={styles.inputForm}>
                                        <Field name="phone_number">
                                            {({ field, form }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Enter your phone number"
                                                    className={`${styles.input} ${form.touched.phone_number &&
                                                        form.errors.phone_number &&
                                                        styles.errorInput
                                                        }`}
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name="phone_number" component="span" className={styles.error} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div>
                                    <label htmlFor="email">Email *</label>
                                    <div className={styles.inputForm}>
                                        <Field name="email" type="email" placeholder="Enter your email" className={styles.input} />
                                        <ErrorMessage name="email" component="span" className={styles.error} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password">Password *</label>
                                    <div className={styles.inputForm}>
                                        <Field
                                            name="password"
                                            type="password"
                                            placeholder="Create a password"
                                            className={styles.input}
                                        />
                                        <ErrorMessage name="password" component="span" className={styles.error} />
                                    </div>
                                </div>
                            </div>


                            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                                <button type="submit" className={styles.buttonSubmit}>
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>

            {showPopup && (
                <div className={styles.notification}>
                    <p>Registration Successful!</p>
                </div>
            )}
        </div>
    )
}

export default Register
