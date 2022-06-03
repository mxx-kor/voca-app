import Header from "./components/Header";
import DayList from "./components/Daylist";
import Day from "./components/Day";
import EmptyPage from "./components/EmptyPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />  
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
