import './CenterContainer.css'

const CenterContainer = ({ isSidebarOpen }) => {
  return (
    <div className={isSidebarOpen ? 'center-container wide' : 'center-container'}>
            Main Content Area - Adjusts based on the sidebar state
    </div>
  )
}

export default CenterContainer
