import './Visitors.css';

const Visitors = () => {
  // Sample Data
  const enquiries = [
    {
      id: 1,
      name: 'Abhishek S',
      phone: '9206831360',
      gender: 'Male',
      interested_sport: 'Gym',
      enquiry_date: '24-Jul-2024',
      expected_join: '24-Jul-2024',
      lead_type: 'Hot',
      status: 'Enquiry',
      last_updated: '24-Jul-2024',
      remarks: 'Enquiry Created',
    },
    {
      id: 2,
      name: 'Dhruv',
      phone: '9619511098',
      gender: 'Male',
      interested_sport: 'Yoga',
      enquiry_date: '24-Jul-2024',
      expected_join: '24-Jul-2024',
      lead_type: 'Hot',
      status: 'Enquiry',
      last_updated: '24-Jul-2024',
      remarks: 'Enquiry Created',
    },
    // Add more data here...
  ];

  return (
    <div className="container">
      <h1 className="title">Enquiry Management</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <input type="text" placeholder="Search..." className="search-box" />
        <select className="filter">
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select className="filter">
          <option value="">Type</option>
          <option value="Hot">Hot</option>
          <option value="Cold">Cold</option>
        </select>
        <select className="filter">
          <option value="">Status</option>
          <option value="Enquiry">Enquiry</option>
          <option value="Follow-up">Follow-up</option>
        </select>
        <button className="btn apply">Apply</button>
        <button className="btn clear">Clear</button>
      </div>

      {/* Table Section */}
      <table className="enquiry-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone No</th>
            <th>Gender</th>
            <th>Interested Sport</th>
            <th>Enq Date</th>
            <th>Expected Join</th>
            <th>Lead Type</th>
            <th>Enq Status</th>
            <th>Last Updated</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.id}>
              <td>{enquiry.name}</td>
              <td>{enquiry.phone}</td>
              <td>{enquiry.gender}</td>
              <td>{enquiry.interested_sport}</td>
              <td>{enquiry.enquiry_date}</td>
              <td>{enquiry.expected_join}</td>
              <td>{enquiry.lead_type}</td>
              <td>{enquiry.status}</td>
              <td>{enquiry.last_updated}</td>
              <td>{enquiry.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Visitors;
