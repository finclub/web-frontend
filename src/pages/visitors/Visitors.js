// import Stats from '../components/Stats'
import TopNavBar from '../../components/TopNavBar.js'
import Table from '../../components/Table.js'
import { visitors } from '../../columnDefinations/visitorsCol.js'
import VisitorsHeader from './VisitorsHeader.js'
import dataJSON from '../../data/data.json'

const Visitors = () => {
  const columnDef = visitors

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
      {/* <TopNavBar tabs={tabs} /> */}
      <section className="container">
        {/* <Stats /> */}
        <VisitorsHeader />
        <Table columnDef={columnDef} dataJSON={dataJSON} />
      </section>
    </>
  )
}

export default Visitors
