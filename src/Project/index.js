import Home from "./home";
import Signin from "./users/signin";
import Signup from "./signup";
import Profile from "./profile";
import Search from "./search";
import Details from "./details";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Account from "./users/account.js";
import UserList from "./users/list";

import store from "./store";
import { Provider } from "react-redux";
import Navigation from "./nav";
import UserDetails from "./users/details";


function Project() {
  const [key, setKey] = useState("home");

  return (
    <Provider store={store}>
   
        <div className="container-fluid">
          <h1>Project</h1>
         
          
          <div className="row">
            <div className="col-2">
              <Navigation />
            </div>

            <div className="col-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />

                <Route path="/signup" element={<Signup />} />
                <Route path="/account" element={<Account />} />
                <Route path="/account/:id" element={<Account />} />

                <Route path="/search" element={<Search />} />
                <Route path="/search/:search" element={<Search />} />
                <Route path="/details/:albumId" element={<Details />} />
                <Route path="/admin/users" element={<UserList />} />
              

     

                <Route path="/users/:id" element={<UserDetails />} />
               
              </Routes>
            </div>

          </div>
        </div>
    
    </Provider>
  );
}

export default Project;