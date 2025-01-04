import { useState } from 'react'
import ModalForAdd from '../../components/modal/ModalForAdd.js'

const VisitorsHeader = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  const title = 'Add Visitor'

  return (
    <>
      <div className="table-header">
        <button
          className="minimal-button"
          style={{ gridColumn: '1', justifySelf: 'start' }}
        >
          Visitors
        </button>
        <button
          className="minimal-button"
          style={{ gridColumn: '2', justifySelf: 'start' }}
        >
          Trials
        </button>
        <button
          className="minimal-button"
          onClick={handleOpenModal}
          style={{ gridColumn: '3', justifySelf: 'end' }}
        >
          Add Visitor
        </button>
        {modalOpen && (
          <ModalForAdd
            isOpen={modalOpen}
            onClose={handleCloseModal}
            title={title}
          />
        )}
      </div>
    </>
  )
}

export default VisitorsHeader
