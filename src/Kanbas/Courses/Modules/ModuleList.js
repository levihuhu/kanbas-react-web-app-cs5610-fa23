import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";







function ModuleList() {
  const { courseId } = useParams();
  
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();






  return (
    <div className="module-list-container">
       
       <li className="module-list-item">
   
    <input 
        className="module-input"
        value={module.name}
       
        onChange={(e) =>
          dispatch(setModule({ ...module, name: e.target.value }))
        }
    />
    <textarea 
        className="module-textarea"
        value={module.description}
        onChange={(e) =>
          dispatch(setModule({ ...module, description: e.target.value }))
        }
    />
     <button 
               onClick={() => dispatch(addModule({ ...module, course: courseId }))}

     >Add</button>
     <button 
              onClick={() => dispatch(updateModule(module))}
      className="module-add-button">
                Update
        </button>

</li>


      
      
      
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index} className="module-item">
              <div className="module-icon">
                <i className="fa fa-file-text-o" aria-hidden="true"></i>
              </div>

              <div className="module-content">
              <h4 className="module-title">{module.name}</h4>
                <p className="module-description">{module.description}</p>
                
                
              </div>
               
              <div className="module-actions">
                <i className="fa fa-check-circle action-icon" aria-hidden="true"></i>
                <i className="fa fa-plus-circle action-icon" aria-hidden="true"></i>
                <i className="fa fa-ellipsis-h action-icon" aria-hidden="true"></i>
                <button className="module-delete-button"
            

            onClick={() => dispatch(deleteModule(module._id))}>
            
              Delete
            </button>
            <button className="module-edit-button"
               onClick={() => dispatch(setModule(module))}>

              Edit
            </button>


              </div>

            </div>
          ))
      }
    </div>
  );
}
  
  export default ModuleList;

