import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Signup from './pages/authentication/Signup'
import Visitors from './pages/visitors/Visitors'
import Layout from './layouts/Layout'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {/* <Route path="/" element={<Home/>} /> */}
          {/* <Route path="/login" element={<Login/>} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />} />
          {/* <Route path="/car-details/:id" element= { <CarDetails/>} />
            <Route path="/car-configure/:id" element= { <CarConfigure />} />
            <Route
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
  )
}

export default App
