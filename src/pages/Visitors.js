import Stats from '../components/Stats'
import TopNavBar from '../components/TopNavBar'
import './Visitors.css'
import BasicTable from '../components/Table'

const Visitors = () => {
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
      <section className="container">
        <Stats />
        {/* Table Section */}
        <div className="">
          <BasicTable />
        </div>
      </section>
    </>
  )
}

export default Visitors
