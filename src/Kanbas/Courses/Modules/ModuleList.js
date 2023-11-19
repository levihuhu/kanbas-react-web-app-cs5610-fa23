import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";







function ModuleList() {
  const { courseId } = useParams();
  const [module, setModule] = useState({});
  const [modules, setModules] = useState([]);
 
  
  const dispatch = useDispatch();
  
  const addModule = async () => {
    const newModule = await client.addModule(courseId,module);
    setModules([newModule, ...modules]);
   
  };
 
  const fetchModules = async () => {
    const modules = await client.fetchModulesForCourse(courseId);
    setModules(modules);
  };

  const deleteModule = async (moduleId) => {
    await client.deleteModule(moduleId);
    setModules(modules.filter((module) => module._id !== moduleId));
  }
  const updateModule = async () => {
    await client.updateModule(module);
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  }


 useEffect
  (() => {
    fetchModules();
  }, []);








  return (



    <div className="module-list-container">
       
       <li className="module-list-item">
   
       <input
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
          className="form-control"
          placeholder="Module Name"
        />
     <button 
               onClick={addModule}
               className="btn btn-primary"

     >Add</button>

     <button 
              onClick={updateModule}
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
            

                onClick={() => deleteModule(module._id)}
                >
            
                 Delete
                </button>
            <button className="module-edit-button"
               onClick={() => setModule(module)}>
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

