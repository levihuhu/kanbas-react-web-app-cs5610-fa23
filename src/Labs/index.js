import{Routes,Route,Link,useLocation,Navigate} from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";


function Labs() {
  const { pathname } = useLocation();
  return (
    <div className="container">
      <h1>Labs</h1>
      
      <div className = "nav nav-pills">
        <Link to = "/Labs/a3"
        className = {`nav-link ${pathname.includes("a3")? "active" : ""} `} 
        >Assignment 3
        </Link>
        <br/>
        <Link to = "/Labs/a4"
        className = {`nav-link ${pathname.includes("a4")? "active":""} `} >Assignment 4</Link>
        <br/>
        <Link className = {`nav-link ${pathname.includes("a5")? "active":""} `} 
        to = "/Labs/a5">Assignment 5</Link>
        <br/>
      </div>

       
       <Routes>
         <Route path="/"element={<Navigate to="a3"/>} /> 
          <Route path="/a3/*"element={<Assignment3/>} /> 
          <Route path="a4" element={<Assignment4/>} />
          <Route path="a5" element={<Assignment5/>} />
       </Routes>

    </div>
  );
}
export default Labs;