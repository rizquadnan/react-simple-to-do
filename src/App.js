import { Route, Switch } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";
import TodoListPage from "./pages/TodoList";
import AddTodoPage from "./pages/AddTodo";
import TodayTodos from "./pages/TodayTodos";

function App() {
  return (
    <DefaultLayout>
      <Switch>
        <Route path="/" exact>
          <TodoListPage />
        </Route>
        <Route path="/new-todo">
          <AddTodoPage />
        </Route>
        <Route path="/today">
          <TodayTodos />
        </Route>
      </Switch>
    </DefaultLayout>
  );
}

export default App;
