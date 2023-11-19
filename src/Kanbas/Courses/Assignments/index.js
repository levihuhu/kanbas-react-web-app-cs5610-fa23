import React, { useState ,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import "./index.css";
import AssignmentNav from "./AssignmentNav";

import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
 
 
  const [assignment, setAssignment] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteAssignmentId, setDeleteAssignmentId] = useState(null);

  const handleDeleteClick = (assignmentId) => {
    setShowDeleteDialog(true);
    setDeleteAssignmentId(assignmentId);
  };

  const handleConfirmDelete = () => {
    deleteAssignment(deleteAssignmentId);
    setShowDeleteDialog(false);
    setDeleteAssignmentId(null); // Clear the assignment ID after deleting
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
    setDeleteAssignmentId(null); // Clear the assignment ID if action is canceled
  };


  

  const addAssignment
   = async () => {
    const newAssignment = await client.addAssignment(courseId,assignment);
    setAssignments([newAssignment, ...assignments]);
   
  };
 
  const fetchAssignment= async () => {
    const assignments = await client.fetchAssignmentsForCourse(courseId); 
    setAssignments(assignments);
  };


  const updateAssignment = async () => {
    await client.updateAssignment(assignment);
    setAssignments(assignments.map((a) => (a._id === assignment._id ? assignment : a)));
  }
   
  const deleteAssignment = async (assignmentId) => {
    await client.deleteAssignment(assignmentId);
    setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
  }

 useEffect
  (() => {
    fetchAssignment();
  }, []);

  
  

  return (
    <div className="assignment-detail">
      <h2>Assignments for course {courseId}</h2>



      <AssignmentNav />


      <div className="module-list-container">
       
       <li className="module-list-item">
   
       <input
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className="form-control"
          placeholder="Assignment Name"
        />
     <button 
               onClick={addAssignment}
               className="btn btn-primary"

     >Add</button>

     <button 
              onClick={updateAssignment}
      className="module-add-button">
                Update
        </button>

</li>



     {showDeleteDialog && (
        <div className="delete-dialog">
          <p>Are you sure you want to delete this assignment?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}

      <div className="list-group-assignment">
        {assignments.map((assignment) => (
          <div key={assignment._id} className="list-group-item-assignment">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
              
              <div className="assignment-details">
              <span><span className="check-icon">✓</span> {assignment.title}</span>
                <span className="subtitle">Multiple Modules | Due {assignment.dueDate} | {assignment.points} pts</span>
              </div>
            </Link>
            <div style={{ display: 'flex' }}>
  
          
            <button style={{ marginLeft: '1000px' }} onClick={() => handleDeleteClick(assignment._id)} style={{ marginRight: "-5px" }}>Delete</button>
            <button style={{ marginLeft: '10px' }} className="module-edit-button" onClick={() => setAssignment(assignment)}>Edit</button>
            </div>

          </div>
        ))}
      </div>

   
    </div>
    </div>
  );
}

export default Assignments;
