import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Watch from './Components/Watch/Watch';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
    
<Navbar/>
<Routes>
<Route exact path='/' element={<Home/>}/>
<Route exact path="/watch" element={<Watch/>}/>
</Routes>
    </div>
  );
}

export default App;
