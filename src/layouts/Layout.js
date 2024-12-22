import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import CenterContainer from '../components/CenterContainer'

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <div className="app">
      <TopNav />
      {/* <div className="content-area"> */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* <CenterContainer isSidebarOpen={isSidebarOpen} /> */}
      {/* </div> */}
    </div>
  )
}

export default App
