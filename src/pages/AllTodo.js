import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { databaseRef, auth } from "../api/firebase";

import TodoList from "../components/TodoList";

function AllTodoPage() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadTodos() {
    setIsLoading(true);
    const currentUser = auth.currentUser;
    const data = await databaseRef
      .child(`users/${currentUser.uid}`)
      .get();

    if (data.exists()) {
      const todosResponse = data.val().todos;
      if (todosResponse) {
        setTodos(formatResponseTodos(todosResponse));
      }
    } else {
      await createUser(currentUser);
    }

    setIsLoading(false);
  }

  function formatResponseTodos(response) {
    const todos = [];

    for (const key in response) {
      const meetup = {
        id: key,
        ...response[key],
      };

      todos.push(meetup);
    }

    return todos;
  }

  async function createUser({ uid }) {
    await databaseRef.update({
      [`/users/${uid}`]: { todos: "" },
    });
  }

  async function onDelete(id) {
    setIsLoading(true);

    const user = auth.currentUser;

    await databaseRef
      .child(`users/${user.uid}/todos/${id}`)
      .remove();
    await loadTodos();
  }

  function onEdit(id) {
    history.replace(`/edit/${id}`);
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>Your to do list</h1>

      {todos.length > 0 && (
        <TodoList
          todos={todos}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}

      {todos.length === 0 && <p>There is no to do</p>}
    </div>
  );
}

export default AllTodoPage;
