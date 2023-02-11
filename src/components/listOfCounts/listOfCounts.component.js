import './listOfCounts.style.css'

export default function ListOfCounts(props) {

 console.log(props.counts)

 const count = {
  
 }

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
    {props.counts &&
     props.counts.map(count => {
    (  <tr>
       <th>{count.id}</th>
       <th>55</th>
       <th>cycle</th>
       <th>pn</th>
       <th>5/06/2023</th>
       <th>Completed</th>
      </tr>)
     })}

   </tbody>
  </table>
 )
}