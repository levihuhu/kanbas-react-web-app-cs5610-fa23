import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import db from "../../Database";
import "./index.css";
import AssignmentNav from "./AssignmentNav";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
 

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteAssignmentId, setDeleteAssignmentId] = useState(null);

  const handleDeleteClick = (assignmentId) => {
    setShowDeleteDialog(true);
    setDeleteAssignmentId(assignmentId);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteAssignment(deleteAssignmentId));
    setShowDeleteDialog(false);
    setDeleteAssignmentId(null); // Clear the assignment ID after deleting
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
    setDeleteAssignmentId(null); // Clear the assignment ID if action is canceled
  };
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  
  
  

  return (
    <div className="assignment-detail">
      <h2>Assignments for course {courseId}</h2>
      <AssignmentNav />
      <div className="list-group-assignment">
        {courseAssignments.map((assignment) => (
          <div key={assignment._id} className="list-group-item-assignment">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
              <span className="check-icon">✓</span>
              <div className="assignment-details">
                <span>{assignment.title}</span>
                <span className="subtitle">Multiple Modules | Due {assignment.dueDate} | {assignment.points} pts</span>
              </div>
            </Link>
            <button onClick={() => handleDeleteClick(assignment._id)}>Delete</button>
          </div>
        ))}
      </div>

      {showDeleteDialog && (
        <div className="delete-dialog">
          <p>Are you sure you want to delete this assignment?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}

export default Assignments;
