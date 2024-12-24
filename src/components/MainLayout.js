import Header from './Header'
import './mainLayout.css'
import PageTitle from './PageTitle'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <PageTitle page={'Page Title'} />
        {/* <Dashboard /> */}
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
