import './Sidebar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? '>' : '<'}
      </button>
      <nav>
        <ul>
          <li>
            <span className="icon">📊</span>
            <span className="text">Dashboard</span>
          </li>
          <li>
            <span className="icon">👥</span>
            <span className="text">Visitors</span>
          </li>
          <li>
            <span className="icon">👤</span>
            <span className="text">Members</span>
          </li>
          <li>
            <span className="icon">🏠</span>
            <span className="text">Home</span>
          </li>
          <li>
            <span className="icon">ℹ️</span>
            <span className="text">About</span>
          </li>
          <li>
            <span className="icon">🛠️</span>
            <span className="text">Services</span>
          </li>
          <li>
            <span className="icon">📞</span>
            <span className="text">Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
