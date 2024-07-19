import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
