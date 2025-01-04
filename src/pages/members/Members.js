import Stats from '../../components/Stats.js'
import Table from '../../components/Table.js'
import { members } from '../../columnDefinations/membersCol.js'
import dataJSON from '../../data/data.json'
import MembersHeader from './MembersHeader.js'

const Members = () => {
  const columnDef = members

  return (
    <>
      <section className="container">
        <Stats />
        <MembersHeader />
        <Table columnDef={columnDef} dataJSON={dataJSON} />
      </section>
    </>
  )
}

export default Members
