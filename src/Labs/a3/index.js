import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

function Assignment3() {
    return (
        <div>
            <h2>Assignment3</h2>
            <TodoList />
            <hr/>
            <ul className="list-group">
                <TodoItem 
                todo = {{
                    title: "Learn React",
                    done: true, 
                    status: "In Progress"
                   
                }}
                />
                <TodoItem
                todo = {{
                    title: "Learn JSX",
                    done: false,
                    status: "Not Started"
                }}
                />
                <TodoItem 
                todo = {{
                    title: "Learn JavaScript",
                    done: true,
                    status: "In Progress"
                }}
                />
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                

            </ul>    
           
            <TodoItem/>
            <ConditionalOutput/>

            <Styles/>

            <Classes/>

            <PathParameters/>
            <JavaScript/>
        </div>
    );
}
export default Assignment3; 