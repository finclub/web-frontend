import { useState, useRef } from 'react'
import useOutsideClick from './useOutsideClick'
import styles from './actions.module.css'

const Actions = ({ row }) => {
  const [showOptions, setShowOptions] = useState(false)
  const actionRef = useRef(null)

  useOutsideClick(actionRef, () => {
    if (showOptions) setShowOptions(false)
  })

  const handleClick = () => {
    setShowOptions((prev) => !prev)
  }

  return (
    <div ref={actionRef} className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        <i className="action-icon" />
      </button>

      {showOptions && (
        <div className={styles.options}>
          <a href="#">Edit</a>
          <a href="#">Delete</a>
          <a href="#">View</a>
        </div>
      )}
    </div>
  )
}

export default Actions
