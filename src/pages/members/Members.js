import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Stats from '../../components/Stats.js'
import Table from '../../components/Table.js'
import { members } from '../../columnDefinations/membersCol.js'
import MembersHeader from './MembersHeader.js'

const Members = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true // Flag to check component mount status
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/members')
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
        <MembersHeader />
      </section>
    )
  }

  if (error) {
    return (
      <section className="container">
        <MembersHeader />
        <p>Error loading data: {error.message}</p>
      </section>
    )
  }

  return (
    <>
      <section className="container">
        {/* <Stats /> */}
        <MembersHeader />
        <Table columnDef={members} dataJSON={data} />
      </section>
    </>
  )
}

export default Members
