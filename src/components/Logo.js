import './logo.css'

const Logo = () => {
  const handleToggleSidebar = () => {
    console.log(123)
    document.body.classList.toggle('toggle-sidebar')
  }

  return (
    <>
      <div className="logo">
        <i onClick={handleToggleSidebar} className="toggle-sidebar-btn">
          ☰
        </i>
      </div>
    </>
  )
}

export default Logo
