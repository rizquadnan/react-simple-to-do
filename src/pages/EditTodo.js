import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { databaseRef } from '../index';
import TodoForm from "../components/TodoForm";

function TodayTodosPage() {
  const history = useHistory();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    
      databaseRef.child(`todos/${id}`).get().then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
  
          setIsLoading(false);
          setTodo(data);
        } else {
          console.log("No data available");
        }
      });
  }, [id]);

  function onEditTodo(todo) {
    setIsLoading(true);
    databaseRef.update({
      [`/todos/${id}`]: todo
    })
    .then(() => {
      setIsLoading(false);
      history.replace('/list');
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
