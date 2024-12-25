import TopNavBar from '../components/TopNavBar'

const Revenue = () => {
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
      <h1>revenue</h1>
    </>
  )
}

export default Revenue
