import { Navigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'

const useAuth = () => {
  const token = localStorage.getItem('authToken')
  if (!token) {
    return false
  }

  try {
    // Decode the token and check if it's expired
    const decodedToken = jwtDecode(token)
    const currentTime = Date.now() / 1000 // Convert to seconds
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('authToken') // Remove expired token
      return false
    }

    return true // Token is valid
  } catch (error) {
    console.error('Invalid token:', error)
    localStorage.removeItem('authToken') // Clean up invalid token
    return false
  }
}

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useAuth()
  return isAuthenticated ? children : <Navigate to="/auth/login" />
}

export default PrivateRoute
