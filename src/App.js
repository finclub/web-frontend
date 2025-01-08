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
import Registration from './pages/authentication/registration/Registration'
import Login from './pages/authentication/login/Login'
import LandingPage from './pages/landingpage/LandingPage'
import PrivateRoute from './components/authentication/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/register" element={<Registration />} />
        <Route path="/auth/login" element={<Login />} />

        {/* Private Routes */}
        <Route path="/app" element={ <PrivateRoute> <MainLayout /> </PrivateRoute> }>
          <Route index element={<Dashboard />} /> {/* Default route for /app */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="visitors" element={<Visitors />} />
          <Route path="visitors/new/:visitorId" element={<AddVisitor />} />
          <Route path="members" element={<Members />} />
          <Route path="sales/invoices" element={<Revenue />} />
          <Route path="sales/dues" element={<Revenue />} />
          <Route path="sales/revenue" element={<Revenue />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Catch-All for undefined routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
