import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import styles from './addVisMemform.module.css'

const visitorValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  age: Yup.number()
    .min(18, 'Must be at least 18 years old')
    .required('Age is required'),
  phoneNumber: Yup.string()
    .matches(
      /\d{3}-\d{3}-\d{4}/,
      'Phone number must be in the format XXX-XXX-XXXX'
    )
    .required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required')
})

const AddVisitorForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    email: ''
  }

  const handleSubmit = (values) => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={visitorValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={styles.formContainer}>
          <Field
            name="firstName"
            placeholder="First Name"
            className={styles.input}
          />
          {errors.firstName && touched.firstName ? (
            <div className={styles.error}>{errors.firstName}</div>
          ) : null}

          <Field
            name="lastName"
            placeholder="Last Name"
            className={styles.input}
          />
          {errors.lastName && touched.lastName ? (
            <div className={styles.error}>{errors.lastName}</div>
          ) : null}

          <Field
            name="age"
            type="number"
            placeholder="Age"
            className={styles.input}
          />
          {errors.age && touched.age ? (
            <div className={styles.error}>{errors.age}</div>
          ) : null}

          <Field
            name="phoneNumber"
            placeholder="Phone Number"
            className={styles.input}
          />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div className={styles.error}>{errors.phoneNumber}</div>
          ) : null}

          <Field
            name="email"
            type="email"
            placeholder="Email"
            className={styles.input}
          />
          {errors.email && touched.email ? (
            <div className={styles.error}>{errors.email}</div>
          ) : null}

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default AddVisitorForm
