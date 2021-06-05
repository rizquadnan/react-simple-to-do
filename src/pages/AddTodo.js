import { useHistory } from 'react-router-dom';

import { auth, databaseRef } from '../api/firebase';

import TodoForm from '../components/TodoForm';

function AddTodoPage() {
  const history = useHistory();

  async function onAddTodo(todo) {
    const user = auth.currentUser;
    const newKey = databaseRef.child(`users/${user.uid}/todos`).push().key;

    await databaseRef.update({
      [`/users/${user.uid}/todos/${newKey}`]: todo 
    })

    history.replace('/list');
  }

  return (
    <div>
      <h1>Add New Todo</h1>
      <TodoForm onSubmit={onAddTodo}/>
    </div>
  );
}

export default AddTodoPage;