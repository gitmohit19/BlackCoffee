import React from 'react';
import DataList from './components/DataList';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Piechart from './Chart/Piechart';
import Doughnutchart from './Chart/Doughnutchart';
import Linechart from './Chart/Linechart';
import BarChart from './Chart/Barchart';



function App() {
  return (
    <>
    <Router>
    <div className="App">
    <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/datalist' element={< DataList />}></Route>
            <Route exact path='/dashboard' element={< Dashboard />}></Route>
            <Route exact path='/barchart' element={< BarChart />}></Route>
            <Route exact path='/piechart' element={< Piechart />}></Route>
            <Route exact path='/doughnutchart' element={< Doughnutchart />}></Route>
            <Route exact path='/linechart' element={< Linechart />}></Route>


    </Routes>
    </div>
    
</Router>

</>
    );
}

export default App;
