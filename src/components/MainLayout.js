import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import './mainLayout.css'

const MainLayout = () => {
  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      document.body.classList.remove('toggle-sidebar')
    }
  }

  return (
    <>
      <Header />
      <Sidebar />
      <main id="main" className="main" onTouchEnd={closeSidebar}>
        {/* <PageTitle page={'Page Title'} /> */}
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
