import MovieChart from './components/MovieChart';
import ChartStyle from './components/ChartStyle.css';
import Fetch from './components/Fetch';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

function App() {

  return (
    <>
      <h1 className="boxTitle">박스오피스</h1>
      <Routes>
        <Route path="/" element={<MovieChart />} />
        <Route path="/MovieDetail/:mvCd" element={<MovieDetail />} />
      </Routes>
    </>
  )
}

export default App;

