const TodoItem = ({title = "undefineded", done = true,todo = {
    title: "undefined",
    done: true,
    status: "undefined"
    }
}) => {
    return (
    <>
        {todo && <li className="list-group-item">
            <input type="checkbox" defaultChecked={todo.done}/>
            {todo.title}

        </li>}
    </>
    );
    };
export default TodoItem;