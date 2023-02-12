import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//imports for Routes on website
import CountsListPage from './pages/countsListPage/countsListPage.page';
import CountCard from './pages/countCard/countCard.page';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" exact element={<CountsListPage />} />
          <Route path="/count:id" element={<CountCard card={{ id: 1 }} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
