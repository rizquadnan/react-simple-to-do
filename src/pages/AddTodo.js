import { useHistory } from 'react-router-dom';

import { databaseRef } from '../index';

import TodoForm from '../components/TodoForm';

function AddTodoPage() {
  const history = useHistory();

  function onAddTodo(todo) {
    const newKey = databaseRef.child('todo').push().key;

    databaseRef.update({
      [`/todos/${newKey}`]: todo 
    }).then(() => {
      history.replace('/list')
    })
  }

  return (
    <div>
      <h1>Add New Todo</h1>
      <TodoForm onSubmit={onAddTodo}/>
    </div>
  );
}

export default AddTodoPage;