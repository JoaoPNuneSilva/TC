import logo from './logo.svg';
import './App.css';

//1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login.js';
import CreateAnAccount from './pages/CreateAnAccount.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/CreateAnAccount" element={<CreateAnAccount/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
