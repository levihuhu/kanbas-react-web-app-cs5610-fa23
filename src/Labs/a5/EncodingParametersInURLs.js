import React, { useState,useEffect } from "react";
import axios from "axios";
function EncodingParametersInURLs() {
  const API_BASE = process.env.REACT_APP_API_BASE;
;
const LABS_URL = `${API_BASE}/a5`;


  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [result, setResult] = useState(0);
  const fetchSum = async (a, b) => {
    const response = await
      axios.get(`${LABS_URL}/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a, b) => {
    const response = await axios.get(
      `${LABS_URL}/subtract/${a}/${b}`);
    setResult(response.data);
  };
  
  const URL = `${LABS_URL}/assignment`;
  
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };

  const updateTitle = async () => {
    const response = await axios
      .get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);



  const[assignment,setAssignment] = useState(
    {
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    }



  );
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Working With Objects</h4>

        <h5>extra credit</h5>
        <input 
        onChange={(e) => setAssignment({...assignment, completed: e.target.checked})}
      
        type="checkbox" 
        checked={assignment.completed}
        />
        <br/>

        <a href={`${URL}/completed/${assignment.completed}`} className="btn btn-primary">
        Update Assignment Completed Status
       </a>
        <input
        onChange={(e) => setAssignment({...assignment,score:e.target.value})}
        className="form-control" type="number" value={assignment.score}/>
        <a href={`${URL}/score/${assignment.score}`} className="btn btn-primary">update Assignment score</a>
       


      <h2>Working With Objects</h2>
      <h3>Modifying Properties</h3>

      <input
        onChange={(e) => setAssignment({...assignment,title:e.target.value})}
        className="form-control" type="text" value={assignment.title}/>
          <button onClick={updateTitle}
              className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment}
              className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>


       

      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control" type="number" value={a}/>
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control" type="number" value={b}/>
        
        <input value={result}
        className="form-control mb-2" type="number" readOnly
      />
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)}
        className="btn btn-primary mb-2  w-100" >
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)}
        className="btn btn-danger me-2 w-100" >
        Fetch Substraction of {a} - {b}
      </button>



        <h3>Query Parameters</h3>
        <a
        href={`${LABS_URL}/caculator?a=${a}&b=${b}&operation=add`}
        className="btn btn-primary">
        Add {a} + {b}
        </a>
        <a
        href={`${LABS_URL}/caculator?a=${a}&b=${b}&operation=subtract`}
        className="btn btn-danger">
        Subtract {a} - {b}
        </a>



      <h3>Path Parameters</h3>
      <a
        href={`${LABS_URL}/add/${a}/${b}`}
        className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a
        href={`${LABS_URL}/subtract/${a}/${b}`}
        className="btn btn-danger">
        Substract {a} - {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;