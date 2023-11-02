import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor/index.js";
import AssignmentEditor1 from "./Assignments/AssignmentEditor/AssignmentEditor.js";
import Grades from "./Grades";
import  "./index.css";

import{IoReorderThree} from "react-icons/io5";

function Courses({courses}) {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [empty, kanbas,  id, screen] = pathname.split("/");
  const course = courses.find((course) => course._id === courseId);

  return (
    <div>
     
     <h3 className="breadcrumb-style">
    <IoReorderThree/>
    <span  className="course-number">CS{course.number}</span>
    <span className="separator">></span>
    <span className="screen">{screen}</span>
   </h3>

      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
             <Route
              path="Assignments/:courseId"
              element={<AssignmentEditor1/>}
            />
           
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;
