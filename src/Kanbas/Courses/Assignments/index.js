import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

    return (
        <div className="assignment-detail">
          <h2>Assignments for course {courseId}</h2>
          <div className=" list-group">
            {courseAssignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item">
                <span className="check-icon">✓</span>
                <div className="assignment-details">
                  <span>{assignment.title}</span>
                  <span className="subtitle">Multiple Modules | Due {assignment.dueDate} | {assignment.points} pts</span>
                </div>
                <span className="menu-icon">:</span>
              </Link>
            ))}
          </div>
          
        </div>
      );
}
export default Assignments;