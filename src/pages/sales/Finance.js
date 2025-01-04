import TopNavBar from '../../components/TopNavBar'

const Finance = () => {
  const tabs = [
    {
      id: 1,
      name: 'Invoice',
      path: '/finances/invoices'
    },
    {
      id: 2,
      name: 'Dues',
      path: '/finances/dues'
    },
    {
      id: 3,
      name: 'Revenue',
      path: '/finances/revenue'
    }
  ]

  return (
    <>
      <TopNavBar tabs={tabs} />
      <div>Finance</div>
    </>
  )
}

export default Finance
