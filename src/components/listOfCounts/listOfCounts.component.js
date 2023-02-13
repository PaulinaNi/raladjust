import { Link } from 'react-router-dom'
import './listOfCounts.style.css'

export default function ListOfCounts(props) {
  const { counts } = props
  return (
    <table className='listOfCounts-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Warehouse</th>
          <th>Type</th>
          <th>By</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* when data is load show count list */}
        {counts && counts.map(count => {
          return (
            <tr key={count._id}>
              <td>
                <Link to={`/count/${count._id}`}>
                  {count._id}
                </Link>
              </td>
              <td>{count.warehouse}</td>
              <td>{count.type}</td>
              <td>{count.by}</td>
              <td>{count.data}</td>
              <td>{count.status}</td>
            </tr>)
        })}

      </tbody>
    </table>
  )
}