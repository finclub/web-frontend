import { useNavigate } from 'react-router-dom'
import { navList } from '../data/navList'
import './sidebar.css'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <aside id="sidebar" className="sidebar">
      <ul>
        {navList.map((nav) => (
          <li
            key={nav._id}
            role="button"
            tabIndex={nav._id}
            onClick={() => navigate(nav.path)}
            onKeyUp={(event) => event.key === 'Enter' && navigate(nav.path)}
          >
            <span className="nav-items">
              <img alt={nav.name} className="icon-image" src={nav.icon} />
              <span className="text">{nav.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
