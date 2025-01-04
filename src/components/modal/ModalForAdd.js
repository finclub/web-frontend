import { useState } from 'react'
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

function ModalForAdd({ isOpen, onClose, title }) {
  const [activeView, setActiveView] = useState('search')

  const handleSearchResults = (results) => {
    if (results.length > 0) {
      setActiveView('result')
    } else {
      setActiveView('notFound')
    }
  }

  const renderContent = () => {
    switch (activeView) {
    case 'search':
      return <SearchVisMemForm onSearchResults={handleSearchResults} />
    case 'result':
      return <div>result view</div>
    case 'notFound':
      return (
        <div className={styles.notFoundPanel}>
          <button
            className="button"
            onClick={() => setActiveView('addMember')}
          >
              Add Member
          </button>
          <button
            className="button"
            onClick={() => setActiveView('addVisitor')}
          >
              Add Visitor
          </button>
        </div>
      )
    case 'addMember':
      return <AddMemberForm />
    case 'addVisitor':
      return <AddVisitorForm />
    default:
      return null
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <ModalHeader title={title} onClose={onClose} />
        <ModalContent>
          {activeView === 'result' ||
            (activeView === 'notFound' && (
              <SearchVisMemForm onSearchResults={handleSearchResults} />
            ))}

          {renderContent()}
        </ModalContent>
        <ModalFooter>
          {/* Footer content or leave empty if not needed */}
        </ModalFooter>
      </div>
    </div>
  )
}
export default ModalForAdd
