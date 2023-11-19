import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    title: "NodeJS Assignment",   });



    const API_BASE = process.env.REACT_APP_API_BASE;
    ;
    
    
    
       
  const URL = `${API_BASE}/a5/assignment`;
  //"http://localhost:4000/a5/assignment";
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
  return (
    <div>
      <h2>Working With Objects</h2>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2" type="text" />
      <button onClick={updateTitle}
              className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment}
              className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
    </div>
  );
}
export default WorkingWithObjects;

