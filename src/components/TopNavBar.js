import { NavLink } from 'react-router-dom'
import styles from './topNavBar.module.css'

function TopNavBar({ tabs }) {
  return (
    <nav role="navigation" className={styles.pageNav}>
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
