import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {

const { courseId } = useParams();
const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
return (
  <div>

<div class="d-flex justify-content-end align-items-end">
  <button class="btn btn-primary me-2">import</button>
  <select class="btn btn-primary me-2" >
    <option>export</option>
    <option>unpublish</option>
  </select>
</div>


<table width = "100%">
    <tr>
        <td>student names<br />
            <input title = "type the name " 
            placeholder=" search students "/>
        </td>
        <td>assignments names<br />
            <input placeholder="search assignments "/>
        </td>       
    </tr>
</table>
<button class="btn btn-primary me-2">Apply Filter</button>
    <h1>Grades</h1>
    <div className="table-responsive">
  <table className="table table-bordered table-hover">
    <thead className="bg-light">
      <tr>
        <th>Student Name</th>
        {assignments.map((assignment) => (
          <th key={assignment._id}>{assignment.title}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {enrollments.map((enrollment) => {
        const user = db.users.find((user) => user._id === enrollment.user);
        return (
          <tr key={enrollment._id}>
            <td>{user.firstName} {user.lastName}</td>
            {assignments.map((assignment) => {
              const grade = db.grades.find(
                (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
              );
              return (
                <td key={assignment._id}>
                  {grade?.grade || ""}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

    
  

</div>);
}
export default Grades;