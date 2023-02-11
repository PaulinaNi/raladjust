import './App.css';
import {useState } from 'react'
import ListOfCounts from './components/listOfCounts/listOfCounts.component';

function App() {
  const [countsList, setCountsList] = useState()

  //connect database to load list of counts - for now pre-made array
  const dataFromDatabase = [
    {
      id: 1,
      warehouse: '55',
      type: 'Cycle',
      by: 'PN',
      data: '01/02/2022',
      status: 'in progress'
    },
    {
      id: 2,
      warehouse: '06',
      type: 'Cycle',
      by: 'KN',
      data: '01/02/2022',
      status: 'in progress'

    },
    {
      id: 3,
      warehouse: '08',
      type: 'Misc 1',
      by: 'PN',
      data: '01/02/2022',
      status: 'Completed'
    }
  ]
  

  const loadDataBtn = () => setCountsList(dataFromDatabase)





  return (
    <div className="App">
      <button onClick={loadDataBtn}>Load Data</button>
      <ListOfCounts counts={countsList} />
    </div>
  );
}

export default App;
