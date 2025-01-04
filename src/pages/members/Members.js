import Stats from '../../components/Stats.js'
import Table from '../../components/Table.js'
import { members } from '../../columnDefinations/membersCol.js'
import dataJSON from '../../data/data.json'
import MembersHeader from './MembersHeader.js'

const Members = () => {
  return (
    <>
      <section className="container">
        <Stats />
        <MembersHeader />
        <Table columnDef={members} dataJSON={dataJSON} />
      </section>
    </>
  )
}

export default Members
