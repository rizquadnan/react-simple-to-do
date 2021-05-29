import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import baseUrl from '../api/baseUrl';
import TodoList from '../components/TodoList';

function AllTodoPage () {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  function loadTodos() {
    setIsLoading(true);
    fetch(
      `${baseUrl}/todos.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
      });
  }

  function onDelete(id) {
    setIsLoading(true);
    fetch(
      `${baseUrl}/todos/${id}.json`,
      {
        method: 'DELETE',
      }
    ).then(() => {
      loadTodos()
    });;
  }

  function onEdit() {
    history.replace('/edit-todo')
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