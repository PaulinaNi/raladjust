import './countCard.style.css'
import { useParams } from "react-router-dom"

import Card from "../../components/card.component/card.component"

export default function CountCard(props) {
 const { id } = useParams()

 // searching results for a specific count
 const counts = props.countsList.filter(el => el._id === parseInt(id))


 return (
  <div>
   <table className='countCard-table'>
    <thead>
     <tr>
      <th>Bin</th>
      <th>SKU</th>
      <th>Physical</th>
      <th>Pickface</th>
      <th>Overflow</th>
      <th>Total Count</th>
      <th>Difference</th>
     </tr>
    </thead>
    <tbody>
     {counts[0].countdata.map(count => <Card key={count.sku} count={count} />)}
    </tbody>
   </table>
  </div>
 )
}