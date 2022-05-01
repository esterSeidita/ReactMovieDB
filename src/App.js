import 'normalize.css';
import "./App.css";

import {useEffect, useState} from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddMovie from './pages/AddMovie';
import UpdateMovie from './pages/UpdateMovie';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [currentPage, setCurrentPage] = useState("CardList");
  const [updateCardId, setUpdateCardId] = useState();

  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes>
            <Route index element={<Home setUpdateCardId={setUpdateCardId}/>}></Route>
            <Route path="ReactMovieDB" element={<Home setUpdateCardId={setUpdateCardId}/>}></Route>
            <Route path="AddMovie" element={<AddMovie/>}></Route>
            <Route path="UpdateMovie" element={<UpdateMovie/>}></Route>
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
