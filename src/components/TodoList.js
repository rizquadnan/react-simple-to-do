import TodoItem from './TodoItem.js';

function TodoList(props) {
  function onClickDelete(id) {
    props.onDelete(id);
  }

  return (<div>
    <ul>
      {props.todos.map((todo) => {
        return (
          <TodoItem key={todo.id} title={todo.title} description={todo.description} onEdit={props.onEdit} onDelete={() => onClickDelete(todo.id)} />
        )
      })}
    </ul>
  </div>)
}

export default TodoList;