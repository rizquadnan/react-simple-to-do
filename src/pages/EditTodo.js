import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import baseUrl from "../api/baseUrl";
import TodoForm from "../components/TodoForm";

function TodayTodosPage() {
  const history = useHistory();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}/todos/${id}.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setTodo(data);
      });
  }, [id]);

  function onEditTodo(todo) {
    setIsLoading(true);
    fetch(
      `${baseUrl}/todos/${id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(todo)
      }
    ).then(() => {
      setIsLoading(false);
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
      <h1>Edit New Todo</h1>
      <TodoForm
        onSubmit={onEditTodo}
        title={todo.title}
        description={todo.description}
        isEdit
      />
    </div>
  );
}

export default TodayTodosPage;
