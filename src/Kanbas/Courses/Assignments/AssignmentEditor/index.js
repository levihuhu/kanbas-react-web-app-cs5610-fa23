import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import AssignmentEditor1 from "./AssignmentEditor.js";
import { deleteAssignment, updateAssignment, setAssignment } from "../assignmentsReducer";
import { useSelector, useDispatch } from "react-redux"; 
import * as client from "../client";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const originalAssignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const addAssignment
   = async () => {
    const newAssignment = await client.addAssignment(courseId,assignment);
    setAssignments([newAssignment, ...assignments]);
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
   
  };

  const [localAssignment, setLocalAssignment] = useState(originalAssignment);

 
  const navigate = useNavigate();
  const handleSave = () => {
    dispatch(updateAssignment(localAssignment)); // Update the Redux store with the modified assignment
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const [assignment, setAssignment] = useState({});
  const [assignments, setAssignments] = useState([]);

  return (
    <div>
      <AssignmentEditor1/>
      <h2>Assignment Name</h2>
      <input
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className="form-control"
          placeholder="Assignment Name"
        />

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={addAssignment} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
