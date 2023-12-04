import React from "react";
import { Link , NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import "./nav.css";
function Navigation() {
  const { currentUser } = useSelector((state) => state.userReducer);
  return (
    <>
      <div className="list-group">
        <NavLink to="/project/" className="list-group-item" activeClassName="active-link">
          Home
        </NavLink>
        {!currentUser && (
          <>
            <NavLink to="/project/signin" className="list-group-item" activeClassName="active-link">
                Signin
            </NavLink>
            <NavLink to="/project/signup" className="list-group-item" activeClassName="active-link">
              Signup
            </NavLink>
          </>
        )}
  
          <NavLink to="/project/account" className="list-group-item" activeClassName="active-link">
            Account
          </NavLink>

          
        
       
        <NavLink to="/project/users" className="list-group-item" activeClassName="active-link">
          Users
        </NavLink>

        <NavLink to="/project/search" className="list-group-item" activeClassName="active-link">
          Search
          </NavLink>
        {/* <Link to="/project/details" className="list-group-item">
        Details
      </Link> */}
      </div>
    </>
  );
}

export default Navigation;