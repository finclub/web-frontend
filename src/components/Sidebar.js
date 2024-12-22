import { useNavigate } from 'react-router-dom'
import memberIcon from '../assets/icons/member1.png'
import './sidebar.css'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <aside id="sidebar" className="sidebar">
      <ul>
        <li
          role="button"
          tabIndex={0}
          onClick={() => navigate('/dashboard')}
          onKeyUp={(event) => event.key === 'Enter' && navigate('/dashboard')}
        >
          <span className="icon">📊</span>
          <span className="text">Dashboard</span>
        </li>
        <li
          role="button"
          tabIndex={0}
          onClick={() => navigate('/visitors')}
          onKeyUp={(event) => event.key === 'Enter' && navigate('/visitors')}
        >
          <span className="icon">👥</span>
          <span className="text">Visitors</span>
        </li>
        <li
          role="button"
          tabIndex={0}
          onClick={() => navigate('/members')}
          onKeyUp={(event) => event.key === 'Enter' && navigate('/members')}
        >
          <span className="icon">
            <img
              width="20px"
              alt="Members Icon"
              className="icon-image" // Updated class for better CSS targeting
              src={memberIcon}
            />
          </span>
          <span className="text">Members</span>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
