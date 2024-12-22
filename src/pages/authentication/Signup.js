import { useState } from 'react'
import './Signup.css'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    role: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // You would typically handle the POST request here
    console.log('Form Data Submitted:', formData)
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <label>
                Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
                Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
          pattern="[0-9]{10}"
          title="Phone number must be 10 digits"
        />
      </label>
      <label>
                Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
                Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
                Role:
        <select name="role" value={formData.role} onChange={handleInputChange} required>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="branch_manager">Branch Manager</option>
        </select>
      </label>
      <button type="submit">Register</button>
    </form>
  )
}

export default Signup
