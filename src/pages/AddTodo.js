import { useHistory } from 'react-router-dom';

import baseUrl from '../api/baseUrl';
import TodoForm from '../components/TodoForm';

function AddTodoPage() {
  const history = useHistory();

  function onAddTodo(todo) {
    fetch(
      `${baseUrl}/todos.json`,
      {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });;
  }

  return (
    <div>
      <h1>Add New Todo</h1>
      <TodoForm onSubmit={onAddTodo}/>
    </div>
  );
}

export default AddTodoPage;