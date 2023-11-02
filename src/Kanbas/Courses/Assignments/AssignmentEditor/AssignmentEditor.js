import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  addAssignment ,
  deleteAssignment,
  updateAssignment,
 setAssignment,
} from "../assignmentsReducer";
import "./index.css";

function AssignmentEditor1() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [availableFromDate, setAvailableFromDate] = useState('');
    const [availableUntilDate, setAvailableUntilDate] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { courseId } = useParams();


    const handleSubmit = () => {
        const newAssignment = {
          
            title,
            description,
            dueDate,
            availableFromDate,
            availableUntilDate,
            course:courseId,
            _id: new Date().getTime().toString()  // Assigning a unique ID for each assignment
        };

        dispatch(addAssignment(newAssignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);

    };
    const handleCancel = () => {
        // Navigate back to the Assignments screen without adding the new assignment
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="container">
            <div>
                <label className="label">Assignment Name:</label>
                 <input className="input"type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
                <label className="label">Description:</label>
                <textarea className="input"value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div>
                <label className="label">Due Date:</label>
                <input className="input"type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </div>

            <div>
                <label className="label">Available From:</label>
                <input className="input"type="date" value={availableFromDate} onChange={(e) => setAvailableFromDate(e.target.value)} />
            </div>

            <div>
                <label className="label">Available Until:</label>
                <input className="input" type="date" value={availableUntilDate} onChange={(e) => setAvailableUntilDate(e.target.value)} />
            </div>

            <button onClick={handleSubmit}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default AssignmentEditor1;

