import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';






function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="module-list-container">
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
              </div>
            </div>
          ))
      }
    </div>
  );
}
  
  export default ModuleList;

