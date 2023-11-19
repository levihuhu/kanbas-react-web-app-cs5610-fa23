import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Button } from 'bootstrap';
function WorkingWithArrays(){
    const API_BASE = process.env.REACT_APP_API_BASE;
;



    const API = `${API_BASE}/a5/todos`;
    //"http://localhost:4000/a5/todos";
    
   

    const[id,setId] = useState(1);
    const[title,setTitle] = useState("NodeJS Assignment");
    const[todos,setToDos] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    console.log(typeof todos);
    
    const fetchTdosPromise =()=>{
        const promise = axios.get(API);
        console.log(promise);
        promise.then(response=>{
            console.log("hello",response.data);
            setToDos(response.data);
        });

    };
    const updateTitle = async (id, title) => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setToDos(response.data);
        console.log("hello jj",response.data);
      };

    const fetchTdosAsync = async()=>{
        const response = await axios.get("http://localhost:4000/a5/todos/create");
        console.log("hello2",response.data[0]);
         setToDos(response.data);
         console.log("hello3",todos);
    };

    const createTodo = async()=>{
        const response = await axios.get(`${API}/create`);
        setToDos(response.data);
    };


   
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setToDos([...todos, response.data]);
      };
   
    
    
     



      const deleteTodo = async (id) => {
        try {
          const response = await axios.delete(
            `${API}/${id}`);
          setToDos(todos.filter((t) => t.id !== id));
        } catch (error) {
          console.log(error);
          setErrorMessage(error.response.data.message);
        }
      };
    
   
    
   
    







    useEffect(()=>{
        // fetchTdosPromise();
        fetchTdosAsync();
    },[]);



        const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });
      const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
      };

      const updateTodo = async () => {
      
    
        try {
          const response = await axios.put(
            `${API}/${todo.id}`, todo);
          setToDos(todos.map((t) => (
            t.id === todo.id ? todo : t)));
          setTodo({});
        } catch (error) {
          console.log(error);
          setErrorMessage(error.response.data.message);
        }
        };

    
    
    
    return(
        <div>
            <h1>working With Arrays</h1>
           
            <h3>todos from server</h3>
       

       

          
          
            <input 
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />


             <input value={todo.id}
               onChange={(e) => setTodo({
                ...todo,   id: e.target.value === '' ? null : parseInt(e.target.value) })}
            />

              <input value={todo.title}
               onChange={(e) => setTodo({
                ...todo, title: e.target.value })}
            />

            <textarea
                onChange={(e) => setTodo({ ...todo,
                description: e.target.value })}
                value={todo.description} type="text"
            />
            <br/>
            <input
                onChange={(e) => setTodo({
                ...todo, due: e.target.value })}
                value={todo.due} type="date"
            />
            <br/>
      
            <label>
                <input
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.checked })}
                value={todo.completed} type="checkbox"
                />
                Completed
            </label>
            <br/>

            
            <button style = {{backgroundColor:"pink",color:"white"}} onClick={postTodo}>Post Todo</button>
            <br/>
            <button style = {{backgroundColor:"orange",color:"white"}} onClick={updateTodo}>
                Update Title
            </button>
            <br/>
            
            <button style = {{backgroundColor:"green",color:"white"}} onClick={createTodo}>Create Todo</button>
              <br/>
           
    
         {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
       
         
      )}


            <ul className="list-group">
                { todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                     <button
                        onClick={() => fetchTodoById(todo.id)}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                    </button>

                   
                   
                    <button
                    className="btn btn-danger float-end"
                    onClick={() => deleteTodo(todo.id)}
                    >
                    Delete
                    </button>

            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
                   
                    {todo.title}
                    
                </li>
                ))}
            </ul>

            <h3>extra credit</h3>


        <input
            value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
         />
    
        <input
            
            onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
            type="checkbox"
        />

        <a
            href={`${API}/${todo.id}/completed/${todo.completed}`}
            className="btn btn-primary me-2" >
            Update completed Status
        </a>






       
            <input
            value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
         />
    
        <input
            value={todo.description}
            onChange={(e) => setTodo({
            ...todo, description: e.target.value })}
            className="form-control mb-2"
            type="text"
        />

        <a
            href={`${API}/${todo.id}/description/${todo.description}`}
            className="btn btn-primary me-2" >
            Update description 
        </a>





        <input
            value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
         />
    
        <input
            value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}
            className="form-control mb-2"
            type="text"
        />
        <h3>Updating an Item in an Array</h3>

        <a
            href={`${API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary me-2" >
            Update Title to {todo.title}
        </a>




            <input
                value={todo.id}
                onChange={(e) => setTodo({
                ...todo, id: e.target.value })}
                className="form-control mb-2"
                type="number"
            />

            <h3>Deleting from an Array</h3>

            <a href={`${API}/${todo.id}/delete`}
                className="btn btn-primary me-2">
                Delete Todo with ID = {todo.id}
            </a>



            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`}
                className="btn btn-primary me-2">
                Create Todo
            </a>

             
            <h3>Filtering Array Items</h3>
           
            <a href={`${API}/?completed=true`}
                className="btn btn-primary me-2" >
                Get Completed Todos
            </a>






            <h2>update title</h2>
            <input
            className="form-control"
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <a href={`${API}/${id}/title/${title}`} className="btn btn-primary">update todo</a>

             




            <h2>fetch item by id</h2>
            <input
            className="form-control"
            value = {id}
            onChange={(e) => setId(e.target.value)}
            />
            <a href={`${API}/${id}`} className="btn btn-primary">fetch todo</a>

            <h2>fetch array</h2>
            <a href = {API}
               className="btn btn-primary">
                fetch todos
                </a>
        </div>
    );
}
export default WorkingWithArrays;