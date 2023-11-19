import { React, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

import "./index.css";
import * as client from "../Courses/client";
function Dashboard() {
  
  const[courses,setCourses] = useState([]);
  const[course,setCourse] = useState([]); 

   const fetchCourses = async()=>{
    const courses = await client.fetchCourses();
    setCourses(courses);
   
  };
   const deleteCourse = async(id)=>{
   try{
    await client.deleteCourse(id);
    setCourses(courses.filter((course) => course._id !== id));
   }
    catch(error){
      console.log(error);
    }
  };

  const updateCourse = async()=>{
  try{await client.updateCourse(course);
  setCourses(courses.map((c) => (c._id === course._id ? course : c)));
  }
  catch(error){
    console.log(error);
  }
  }


  const addCourse = async()=>{
   const newCourse = await client.addCourse(course);
    setCourses([newCourse,...courses]);
  }

  
  useEffect(()=>{
    fetchCourses();
  }
  ,[]);


  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Published Courses ({courses.length})</h2>
      </div>

   
      <input  placeholder = "course name "value={course.name} className="form-control" 
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      
      <button className="add-btn " onClick={addCourse} >
        Add
      </button>
     <button className = "btn btn-success"onClick={updateCourse} >update</button>
      

  <div className="row">
    {courses.map((course) => (
      <div key={course._id} className="col-md-6 col-lg-4 mb-4">
        <div className="card text-center">
          <div className="card-header bg-success text-white">
            {/* This div can be used as a placeholder for a pure color picture. Adjust the height as needed. */}
            <div className="color-picture" style={{ height: '150px' }}></div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{course.name}</h5>
            <Link to={`/Kanbas/Courses/${course._id}`} className="btn " style={{ color: "yellow",backgroundColor :"green" }}>
            View Course
          </Link>
            {/* Additional content like course description */}
          </div>
          <div className="card-footer">
          
            <button onClick={() => setCourse(course)} className="btn btn-primary me-2">
              Edit
            </button>
            <button onClick={() => deleteCourse(course._id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>







    
  );
}

export default Dashboard;

