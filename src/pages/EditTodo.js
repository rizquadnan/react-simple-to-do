import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { auth, databaseRef } from '../api/firebase';
import TodoForm from "../components/TodoForm";

function TodayTodosPage() {
  const history = useHistory();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setIsLoading(true);
      const user = auth.currentUser;
      
      databaseRef.child(`users/${user.uid}/todos/${id}`).get().then((snapshot) => {
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
    const user = auth.currentUser;
    
    databaseRef.update({
      [`users/${user.uid}/todos/${id}`]: todo
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
