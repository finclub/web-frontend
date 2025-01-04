import { useState } from 'react'
import styles from './modal.module.css'

// ModalHeader Component
function ModalHeader({ title, onClose }) {
  return (
    <div className={styles.modalHeader}>
      <div className={styles.modalImage}>
        <i style={{ width: '25px', height: '25px' }} className="user-icon" />
      </div>

      <div>{title}</div>
      <span className={styles.close} onClick={onClose}>
        <i className="cross-icon" style={{ height: '30px', width: '30px' }} />
      </span>
    </div>
  )
}

// ModalContent Component
function ModalContent({ children }) {
  return <div className={styles.modalContent}>{children}</div>
}

// ModalFooter Component
function ModalFooter({ onSubmit }) {
  return (
    <div className={styles.modalFooter}>
      <button onClick={onSubmit}>Save</button>
    </div>
  )
}

// Main Modal Component
function Modal({ isOpen, onClose, title }) {
  const [visitor, setVisitor] = useState({
    name: '',
    gender: '',
    dob: '',
    address: ''
  })

  const handleChange = (e) => {
    setVisitor({
      ...visitor,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(visitor)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <ModalHeader title={title} onClose={onClose} />
        <ModalContent>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={visitor.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={visitor.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={visitor.dob}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={visitor.address}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </label>
        </ModalContent>
        <ModalFooter onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default Modal
