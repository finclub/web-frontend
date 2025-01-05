import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '../../components/Table.js'
import { visitors } from '../../columnDefinations/visitorsCol.js'
import VisitorsHeader from './VisitorsHeader.js'

const Visitors = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true // Flag to check component mount status
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/visitors')
        if (isMounted) {
          setData(response.data)
          setLoading(false)
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching data:', error)
          setError(error)
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false // Cleanup function to prevent state update on unmounted component
    }
  }, [])

  if (loading) {
    return (
      <section className="container">
        <VisitorsHeader />
      </section>
    )
  }

  if (error) {
    return (
      <section className="container">
        <VisitorsHeader />
        <p>Error loading data: {error.message}</p>
      </section>
    )
  }

  return (
    <section className="container">
      <VisitorsHeader />
      <Table columnDef={visitors} dataJSON={data} />
    </section>
  )
}

export default Visitors
