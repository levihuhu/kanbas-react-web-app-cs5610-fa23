import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Labs from './Labs';  
import Kanbas from './Kanbas';
import HelloWorld from './Labs/a3/HelloWorld.js';
import { HashRouter,Link, Route,Routes,Navigate } from 'react-router-dom';
import StateManagement from './Lectures/StateManagement';
import Project from "./Project";




function App() {
 return (


    
<HashRouter>
    <div>
       
        
        <Routes>
            <Route path="/" element={<Navigate to="project"/>} /> 
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/HelloWorld" element={<HelloWorld />} />
            <Route path="/Lectures/*" element={<StateManagement/>} />
            <Route path="/project/*" element={<Project />} />
        </Routes>
    </div>
</HashRouter>


 
  
 );


}

export default App;
