import { useState } from 'react'
import styles from './searchVisMemForm.module.css'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  phoneNo: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
    .required('Required')
})

const initialValues = {
  phoneNo: ''
}

const SearchVisMemForm = ({ onSearchResults }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true)

    try {
      // const res = await axios.get(
      //   `http://localhost:8000/visitorsByPhoneNo${values}`
      // )

      const res = await axios.get('http://localhost:8000/visitorsByPhoneNo')
      const results = res.data || []
      onSearchResults(results)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.searchModal}>
          <div className={styles.inputForm}>
            <Field name="phoneNo">
              {({ field, form }) => (
                <input
                  {...field}
                  type="search"
                  placeholder="Enter phone number..."
                  className={`${styles.input} ${
                    form.touched.phoneNo &&
                    form.errors.phoneNo &&
                    styles.errorInput
                  }`}
                />
              )}
            </Field>
            <ErrorMessage
              name="phoneNo"
              component="span"
              className={styles.error}
            />
          </div>
          <button
            className="button"
            type="submit"
            disabled={loading}
            style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default SearchVisMemForm
