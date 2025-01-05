import { useState, useMemo } from 'react'
import styles from './modalForAdd.module.css'
import SearchVisMemForm from './SearchVisMemForm'
import AddMemberForm from './AddMemberForm'
import AddVisitorForm from './AddVisitorForm'

// ModalHeader Component
function ModalHeader({ title, onClose }) {
  return (
    <div className={styles.modalHeader}>
      <div className={styles.modalImage}>
        <i style={{ fontSize: '20px' }} className="user-icon" />
      </div>

      <div>{title}</div>
      <span className={styles.close} onClick={onClose}>
        <i className="cross-icon" style={{ height: '30px', width: '25px' }} />
      </span>
    </div>
  )
}

// ModalContent Component
function ModalContent({ children }) {
  return <div className={styles.modalContent}>{children}</div>
}

// ModalFooter Component
function ModalFooter({ children }) {
  return <div className={styles.modalFooter}>{children}</div>
}

function ModalForAdd({ isOpen, onClose }) {
  const [activeView, setActiveView] = useState('searchForm')

  const handleSearchResults = (results) => {
    setActiveView(results.length > 0 ? 'searchResults' : 'searchNotFound')
  }

  const viewComponents = {
    searchForm: <SearchVisMemForm onSearchResults={handleSearchResults} />,
    searchResults: <div>result view</div>,
    searchNotFound: (
      <>
        <SearchVisMemForm onSearchResults={handleSearchResults} />
        <div className={styles.notFoundPanel}>
          <button
            className="button"
            onClick={() => setActiveView('memberAddForm')}
          >
            Add Member
          </button>
          <button
            className="button"
            onClick={() => setActiveView('visitorAddForm')}
          >
            Add Visitor
          </button>
        </div>
      </>
    ),
    memberAddForm: <AddMemberForm />,
    visitorAddForm: <AddVisitorForm />
  }

  const modalTitles = {
    searchForm: 'Search',
    searchResults: 'Found',
    searchNotFound: 'No data Found',
    memberAddForm: 'Member',
    visitorAddForm: 'Visitor'
  }

  const modalTitle = useMemo(
    () => modalTitles[activeView] || 'Modal',
    [activeView]
  )

  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <ModalHeader title={modalTitle} onClose={onClose} />
        <ModalContent>{viewComponents[activeView] || null}</ModalContent>
        <ModalFooter>
          {/* Footer content or leave empty if not needed */}
        </ModalFooter>
      </div>
    </div>
  )
}
export default ModalForAdd
