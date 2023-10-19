import ModuleList from "../Modules/ModuleList";
import './index.css';


import Sidebar from './Sidebar';

function Home() {
  return (
    <div className="row">
      <div className="col-8">
        <h2>Home</h2>
        <ModuleList />
      </div> 

      <div className="col-4">
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
