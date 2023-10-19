import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Labs from './Labs';  
import Kanbas from './Kanbas';
import HelloWorld from './Labs/a3/HelloWorld.js';
import { HashRouter,Link, Route,Routes,Navigate } from 'react-router-dom';
import StateManagement from './Lectures/StateManagement';




function App() {
 return (


    
<HashRouter>
    <div>
       
        
        <Routes>
            <Route path="/" element={<Navigate to="Kanbas"/>} /> 
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/HelloWorld" element={<HelloWorld />} />
            <Route path="/Lectures/*" element={<StateManagement/>} />
        </Routes>
    </div>
</HashRouter>


 
  
 );


}

export default App;
