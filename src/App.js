import './App.css';
import Template from './components/Template';
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import "./style/index.css"
import Contract from './components/Contract';

function App() {
  return (
    <Router>
      <Template>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/ugovor/:brojUgovora' element={<Contract/>} />
          {/* <Route exact path='/articles' element={<Articles/>} /> */}
        </Routes>
      </Template>
    </Router>
  );
}

export default App;
