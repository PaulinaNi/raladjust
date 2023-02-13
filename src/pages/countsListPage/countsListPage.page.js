import ListOfCounts from '../../components/listOfCounts/listOfCounts.component'

export default function CountsListPage(props) {

 const { countsList } = props
 
 return (
  <main>
   <ListOfCounts counts={countsList} />
  </main>
 )
}