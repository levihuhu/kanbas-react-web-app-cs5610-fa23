import React,{useState} from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import * as client from "./client";
import { useEffect } from 'react';
function UserDetails(){
 const navigate = useNavigate();
 const[user,setUser] = useState(null);
   const{id} = useParams();
    const fetchUser = async()=>{
         const user = await client.findUserById(id);
         setUser(user);
    };
    const updateUser = async()=>{
        const status = await client.updateUser(id,user);
    };
    const deleteUser = async(id)=>{
        const status = await client.deleteUser(id);
        navigate("/project/users");
    }
    useEffect(()=>{
        fetchUser();
    },[]);
    return(
        <div>
            <h1> user details</h1>
            {
                user && (
                    <div>
                        <p>username:{user.username}</p>
                        <p>usereamil:{user.email}</p>
                        <p>
                        firstName:
                         <input
                           type='text'
                            className="form-control"
                            onChange={(e)=>setUser({...user,firstName:e.target.value})}
                            value={user.firstName}
                         />  
                          
                        </p>
                        <p>lastName:{user.lastName}</p>
                        <button className="btn btn-primary" onClick={updateUser}>update</button>
                        <button className="btn btn-danger" onClick={()=>deleteUser(user._id)}>delete</button>
                    </div>
                )

            }

        </div>
    )
}
export default UserDetails;