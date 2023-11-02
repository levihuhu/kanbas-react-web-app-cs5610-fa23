import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  



  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Published Courses ({courses.length})</h2>
      </div>

      <input value={course.name} className="form-control" 
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

      <input value={course.number} className="form-control" 
        onChange={(e) => setCourse({ ...course, number: e.target.value }) } />

      <input value={course.startDate} className="form-control" type="date" 
         onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>

      <input value={course.endDate} className="form-control" type="date" 
          onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

      <button className="add-btn " onClick={addNewCourse} >
        Add
      </button>
      <button  className = "update-btn" onClick={updateCourse} >
        Update
      </button>

      

      <div className="Dashboard-list-group">
        {courses.map((course) => (
          <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="Dashboard-list-group-item">   
            {course.name}
            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

