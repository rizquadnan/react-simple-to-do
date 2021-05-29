import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import baseUrl from "../api/baseUrl";
import TodoForm from "../components/TodoForm";

function TodayTodosPage() {
  const history = useHistory();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);

  function loadTodo() {
    setIsLoading(true);
    fetch(`${baseUrl}/todos/${id}.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setTodo(data);
      });
  }

  useEffect(() => {
    loadTodo();
  }, []);

  function onEditTodo(todo) {
    fetch(
      `${baseUrl}/todos/${id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(todo)
      }
    ).then(() => {
      console.log('berhasil');
      history.replace('/');
    })
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
      <h1>Add New Todo</h1>
      <TodoForm
        onSubmit={onEditTodo}
        title={todo.title}
        description={todo.description}
      />
    </div>
  );
}

export default TodayTodosPage;
