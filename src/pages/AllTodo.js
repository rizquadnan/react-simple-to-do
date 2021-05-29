import { useState, useEffect } from 'react';

import baseUrl from '../api/baseUrl';
import TodoList from '../components/TodoList';

function AllTodoPage () {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
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

    <TodoList todos={todos} />
  </div>)
};

export default AllTodoPage;