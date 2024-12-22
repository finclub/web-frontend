import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Signup from './pages/authentication/Signup'
import Visitors from './pages/visitors/Visitors'
// import Dashboard from './pages/dashboard/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route>
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/visitors" element={<Visitors />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route
              path="/invoice/:modelId"
              element={
                <Protected>
                  <Invoice />
                </Protected>
              }
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
