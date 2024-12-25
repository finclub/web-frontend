import { NavLink } from 'react-router-dom'
import './topNavBar.css'

function TopNavBar({ tabs }) {
  return (
    <nav role="navigation" className="page-nav">
      {tabs?.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.path}
          className={({ isActive }) => (isActive ? 'router-link-active' : '')}
        >
          <span>{tab.name}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default TopNavBar
