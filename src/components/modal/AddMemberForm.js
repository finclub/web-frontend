import React from 'react'
import styles from './addVisMemform.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
    .required('Required'),
  dob: Yup.date().required('Required'),
  reference: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

const initialValues = {
  name: '',
  mobile: '',
  dob: '',
  reference: '',
  gender: '',
  email: '',
  password: ''
}

const AddMemberForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={styles.form}>
            <div className={styles.row}>
              <div>
                <label htmlFor="name">Name *</label>
                <div className={styles.inputForm}>
                  <Field name="name">
                    {({ field, form }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="Name"
                        className={`${styles.input} ${
                          form.touched.name &&
                          form.errors.name &&
                          styles.errorInput
                        }`}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={styles.error}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mobile">Mobile *</label>
                <div className={styles.inputForm}>
                  <Field name="mobile">
                    {({ field, form }) => (
                      <input
                        {...field}
                        type="tel"
                        placeholder="Enter your Mobile Number"
                        className={`${styles.input} ${
                          form.touched.mobile &&
                          form.errors.mobile &&
                          styles.errorInput
                        }`}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="mobile"
                    component="span"
                    className={styles.error}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="gender">Gender *</label>
                <div className={styles.inputForm}>
                  <Field name="gender">
                    {({ field, form }) => (
                      <select
                        {...field}
                        className={`${styles.input} ${
                          form.touched.gender && form.errors.gender
                            ? styles.errorInput
                            : field.value === '' && styles.Placeholder
                        }`}
                      >
                        <option defaultValue="" disabled>
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    )}
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="span"
                    className={styles.error}
                  />
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div>
                <label htmlFor="reference">Reference *</label>
                <div className={styles.inputForm}>
                  <Field name="reference">
                    {({ field, form }) => (
                      <select
                        {...field}
                        className={`${styles.input} ${
                          form.touched.reference &&
                          form.errors.reference &&
                          styles.errorInput
                        }`}
                      >
                        <option value="">Select Reference</option>
                        <option value="walkIn">Walk-in</option>
                        <option value="reference">Reference</option>
                        <option value="promotion">Promotion</option>
                      </select>
                    )}
                  </Field>
                  <ErrorMessage
                    name="reference"
                    component="span"
                    className={styles.error}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <div className={styles.inputForm}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className={styles.input}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dob">Date of Birth</label>
                <div className={styles.inputForm}>
                  <Field name="dob" type="date" className={styles.input} />
                </div>
              </div>
            </div>
            {/* Additional UI components commented out can be similarly updated */}
            <div className={styles.separator}>
              <hr className={styles.line} />
              <span>Plan details</span>
              <hr className={styles.line} />
            </div>

            <div className={styles.separator}>
              <hr className={styles.line} />
              <span>Address</span>
              <hr className={styles.line} />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default AddMemberForm
