import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css"

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    {courses.map((course, index) => (
        <div className="col">
            
            <div className="card custom-card">
                <div className="card-body">
                    <h5 className="card-title">CS{course.number}</h5>

                    <p className="card-text">
                        CS{course.number}.{course._id}.{course.startDate.split('-')[0]}<br />
                        {course.startDate.split('-')[0]}. Fall {course.startDate.split('-')[1]}-{course.endDate.split('-')[1]} Semester Full Term
                    </p>

                    <Link
                        key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="btn btn-primary"
                    >
                        {course.name}
                    </Link>
                </div>
            </div>
        </div>
    ))}
</div>



      
    </div>
  );
}

export default Dashboard;

