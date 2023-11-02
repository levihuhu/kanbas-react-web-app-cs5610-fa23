import ModuleList from "./ModuleList";
import "./index.css";
import{FcCheckmark} from "react-icons/fc";
function Modules() {
  return (
    <div>

<div className="toolbar">

    <button className="btn">Collapse All</button>
    <button className="btn">View Progress</button>
    <select className="btn-select">
  
      <option>Publish All</option>

      <option>Publish All Items And Modules</option>

        <option>Unpublish</option>
    </select>
    <button className="btn btn-red">+ Module</button>
</div>

      <h2>Modules</h2>
      <ModuleList />
    </div>
  );
}
export default Modules;