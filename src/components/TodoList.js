import TodoItem from './TodoItem.js';

function TodoList(props) {
  function onClickDelete(id) {
    props.onDelete(id);
  }

  function onClickEdit(id) {
    props.onEdit(id);
  }

  return (<div>
    <ul>
      {props.todos.map((todo) => {
        return (
          <TodoItem key={todo.id} title={todo.title} description={todo.description} onEdit={() => onClickEdit(todo.id)} onDelete={() => onClickDelete(todo.id)} />
        )
      })}
    </ul>
  </div>)
}

export default TodoList;