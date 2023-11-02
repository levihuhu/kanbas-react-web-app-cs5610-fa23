import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import AssignmentEditor1 from "./AssignmentEditor.js";
import { deleteAssignment, updateAssignment, setAssignment } from "../assignmentsReducer";
import { useSelector, useDispatch } from "react-redux"; 

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const originalAssignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const [localAssignment, setLocalAssignment] = useState(originalAssignment);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    dispatch(updateAssignment(localAssignment)); // Update the Redux store with the modified assignment
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <AssignmentEditor1/>
      <h2>Assignment Name</h2>
      <input 
        type="text"
        value={localAssignment?.title || ''}
        onChange={e => setLocalAssignment(prev => ({ ...prev, title: e.target.value }))}
        className="form-control mb-2" 
      />

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
