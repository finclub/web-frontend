import './logo.css'
import menuIcon from '../assets/icons/menu.png'

const Logo = () => {
  const handleToggleSidebar = () => {
    console.log(123)
    document.body.classList.toggle('toggle-sidebar')
  }

  return (
    <>
      <div className="logo">
        <button onClick={handleToggleSidebar} className="toggle-sidebar-btn">
          <img src={menuIcon} alt="Menu" />
        </button>
      </div>
    </>
  )
}

export default Logo
