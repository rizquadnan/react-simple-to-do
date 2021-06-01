import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { databaseRef } from '../index';

import TodoList from '../components/TodoList';

function AllTodoPage () {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  function loadTodos() {
    setIsLoading(true);
    databaseRef.child("todos").get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const todos = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          todos.push(meetup);
        }

        setIsLoading(false);
        setTodos(todos);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  function onDelete(id) {
    setIsLoading(true);
    
    databaseRef.child(`todos/${id}`).remove().then(() => {
      loadTodos()
    });;
  }

  function onEdit(id) {
    history.replace(`/edit/${id}`)
  }

  useEffect(() => {
    loadTodos()
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (<div>
    <h1>Your to do list</h1>

    <TodoList todos={todos} onEdit={onEdit} onDelete={onDelete} />
  </div>)
};

export default AllTodoPage;