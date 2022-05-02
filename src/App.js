import 'normalize.css';
import "./App.css";
import {useEffect, useState} from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddMovie from './pages/AddMovie';
import UpdateMovie from './pages/UpdateMovie';
import Home from './pages/Home';
import Alert from './components/Alert';

function App() {
  const [updateCardId, setUpdateCardId] = useState();
  const [alertData, setAlertData] = useState({content:"", response:"", display:false});

  return (
    <div className="App">
      <Router>
          <Header/>
          {alertData.display && <Alert content={alertData.content} response={alertData.response}/>}
          <Routes>
            <Route index element={<Home  setAlertData={setAlertData} setUpdateCardId={setUpdateCardId}/>}></Route>
            <Route path="ReactMovieDB" element={<Home setUpdateCardId={setUpdateCardId}/>}></Route>
            <Route path="AddMovie" element={<AddMovie setAlertData={setAlertData} />}></Route>
            <Route path="UpdateMovie" element={<UpdateMovie setAlertData={setAlertData} updateCardId={updateCardId}/>}></Route>
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
