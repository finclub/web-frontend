import { useState } from 'react'
import Modal from '../../components/modal/AddModal'

const AddVisitor = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  return (
    <>
      <div>
        <button onClick={handleOpen}>Add Visitor</button>
        <Modal isOpen={modalOpen} onClose={handleClose} />
      </div>
    </>
  )
}

export default AddVisitor
