import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import Visitors from './pages/visitors/Visitors'
import AddVisitor from './pages/visitors/AddVisitor'
import Members from './pages/members/Members'
// import Finance from './pages/Finance'
import Revenue from './pages/sales/Revenue'
import Profile from './pages/Profile'
// import Modal from './components/Modal'
// import Login from './pages/Login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/visitors" element={<Visitors />} />
            <Route path="/visitors/new/:visitorId" element={<AddVisitor />} />

            <Route path="/members" element={<Members />} />
            {/* <Route path="/plans" element={<Modal />} /> */}
            <Route path="/sales/invoices" element={<Revenue />} />
            <Route path="/sales/dues" element={<Revenue />} />
            <Route path="/sales/revenue" element={<Revenue />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
