export default function Card(props) {
 const { bin, sku, physical, pickface, overflow } = props.count
 const totalCount = props.count.totalCount()
 const difference = props.count.difference()
 return (
  <tr>
   <td>{bin}</td>
   <td>{sku}</td>
   <td>{physical}</td>
   <td>{pickface}</td>
   <td>{overflow}</td>
   <td>{totalCount}</td>
   <td>{difference}</td>
  </tr>
 )
}