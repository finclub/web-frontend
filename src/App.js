import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import Visitors from './pages/visitors/Visitors'
import Members from './pages/Members'
import Finance from './pages/Finance'
import Profile from './pages/Profile'
// import Login from './pages/Login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="visitors" element={<Visitors />} />
            <Route path="members" element={<Members />} />
            <Route path="finance" element={<Finance />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
