import { useState } from 'react'
import ModalForAdd from '../../components/modal/ModalForAdd.js'

const AddVisitor = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  return (
    <>
      <div>
        <button onClick={handleOpen}>Add Visitor</button>
        <ModalForAdd isOpen={modalOpen} onClose={handleClose} />
      </div>
    </>
  )
}

export default AddVisitor
