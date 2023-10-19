import { subtract } from "./math";  
import add from './math.js';

console.log(add(1, 2));
function renderTodos(todos){
    document.write('<ul>');
    todos.forEach(function(todo){
        document.write('<li>' + todo + '</li>');
    });
    document.write('</ul>');
}
const todos = ['Learn HTML', 'Learn CSS', 'Learn JS'];
renderTodos(todos);
const todos2 =['fiona','Inn','Nan'];
renderTodos(todos2);