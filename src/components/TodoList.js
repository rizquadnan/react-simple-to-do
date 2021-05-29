import TodoItem from './TodoItem.js';

function TodoList(props) {
  return (<div>
    <ul>
      {props.todos.map((todo) => {
        return (
          <TodoItem key={todo.id} title={todo.title} description={todo.description} />
        )
      })}
    </ul>
  </div>)
}

export default TodoList;