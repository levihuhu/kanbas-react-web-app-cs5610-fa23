import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate,Link,useParams } from "react-router-dom";
function Account() {
  const { id } = useParams(); 
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };




  useEffect(() => {
    if (id) {
        findUserById(id);
      } else {
        fetchAccount();
      }
  
  }, []);

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div >
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
               <input value={account.username}
            onChange={(e) => setAccount({ ...account,
                username: e.target.value })}/>
          <input value={account.firstName}
           placeholder="First Name"
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input value={account.lastName}
            placeholder="Last Name"
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input value={account.dob}
            placeholder="Date of Birth"
            type="date"
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <br/>
          <button className="btn btn-primary" onClick={save}>
             Save
          </button>

        <button  className="btn btn-danger" onClick={signout}>
            Signout
        </button>

          <br/>
            
          <Link to="/project/admin/users" style={{backgroundColor:"yellowgreen"}} className="btn btn-primary">
             Users
           </Link>
        
        </div>
      )}
    </div>
  );
}
export default Account;