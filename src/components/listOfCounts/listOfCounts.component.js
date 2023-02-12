import './listOfCounts.style.css'

export default function ListOfCounts(props) {

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
        {props.counts && props.counts.map(count => {
          return (
            <tr key={count.id}>
              <th><a href={`/count:${count.id}`}>{count.id}</a></th>
              <th>{count.warehouse}</th>
              <th>{count.type}</th>
              <th>{count.by}</th>
              <th>{count.data}</th>
              <th>{count.status}</th>
            </tr>)
        })}

      </tbody>
    </table>
  )
}