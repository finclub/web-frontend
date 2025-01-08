// src\pages\authentication\login\Login.js
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './Login.module.css'
import loginImage from '../../../assets/icons/login-page-image.png'

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
})

const initialValues = {
  email: '',
  password: ''
}

const Login = () => {
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })

      if (!response.ok) {
        throw new Error('Failed to login')
      }

      const data = await response.json()
      console.log('Login successful:', data)

      setShowPopup(true)

      // Save the authentication token or session info
      localStorage.setItem('authToken', data.data.token)

      setTimeout(() => {
        setShowPopup(false)
        navigate('/app/dashboard') // Redirect to dashboard
      }, 800)
    } catch (error) {
      console.error('Error during login:', error)
      alert('Login failed. Please check your credentials.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div>
          <img src={loginImage} alt="Login" className={styles.image} />
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className={styles.formContainer}>
                <div className={styles.formTitle}>
                  <h1>LOGIN</h1>
                </div>
                <div className={styles.form}>
                  <div className={styles.row}>
                    <div>
                      <label htmlFor="email">Email *</label>
                      <div className={styles.inputForm}>
                        <Field name="email" type="email" placeholder="Enter your email" className={styles.input} />
                        <ErrorMessage name="email" component="span" className={styles.error} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div>
                      <label htmlFor="password">Password *</label>
                      <div className={styles.inputForm}>
                        <Field
                          name="password"
                          type="password"
                          placeholder="Enter your password"
                          className={styles.input}
                        />
                        <ErrorMessage name="password" component="span" className={styles.error} />
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', marginTop: '20px' }}>
                    <button type="submit" className={styles.buttonSubmit}>
                                            Login
                    </button>
                  </div>

                  <div style={{ textAlign: 'right', marginTop: '20px' }}>
                    <p>
                                            Not a member? <Link to="/register">Register</Link>
                    </p>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>

      {showPopup && (
        <div className={styles.notification}>
          <p>Login Successful!</p>
        </div>
      )}
    </div>
  )
}

export default Login
