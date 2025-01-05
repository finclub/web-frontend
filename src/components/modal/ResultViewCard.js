import React from 'react'
import styles from './resultViewCard.module.css'

const ResultViewCard = ({ searchResults }) => {
  return (
    <>
      {searchResults.map((result) => (
        <div key={result.id} className={styles.card}>
          <img
            src={result.profileImage}
            alt="Profile"
            className={styles.image}
          />
          <div className={styles.content}>
            <h2>{result.fullName}</h2>
            <p>
              <strong>Gender:</strong> {result.gender}
            </p>
            <p>
              <strong>Date of Birth:</strong> {result.dob}
            </p>
            <p>
              <strong>Phone:</strong> {result.phoneNo}
            </p>
            <p>
              <strong>Email:</strong> {result.email}
            </p>
            <p>
              <strong>Registration Date:</strong> {result.registration_date}
            </p>
            <p>
              <strong>Last Plan Expiry Date:</strong>{' '}
              {result.last_plan_expiry_date}
            </p>
            <p>
              <strong>Status:</strong> {result.status ? 'Active' : 'Inactive'}
            </p>
            <p>
              <strong>Assigned To:</strong> {result.assigned_to}
            </p>
            <p>
              <strong>Created By:</strong> {result.created_by}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default ResultViewCard
