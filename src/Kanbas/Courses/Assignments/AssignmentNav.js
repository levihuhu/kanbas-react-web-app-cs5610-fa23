import React from 'react';
import {  redirect } from 'react-router-dom';
import { Link, useParams } from "react-router-dom";

function AssignmentNav() {
  const { courseId } = useParams();
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
     
      
      <input type="text" placeholder="Search for Assignment" />
      
      {/* +Group button (assuming you also want to make this a link in the future) */}
      <button style={{ marginLeft: '10px', backgroundColor: 'grey' }}>
        + Group
      </button>
      
      {/* +Assignment button that navigates to AssignmentEditor */}
      <button style={{ marginLeft: '10px',backgroundColor: 'red' ,color:'white' }}>
        <Link 
         to={`/Kanbas/Courses/${courseId}/Assignments/${courseId}`}
        
        style={{color: 'white'}}>+ Assignment</Link>
      </button>
    </div>
  );
}


export default AssignmentNav;
