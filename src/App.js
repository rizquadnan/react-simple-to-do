import { Route, Switch } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";
import AllTodoPage from "./pages/AllTodo";
import AddTodoPage from "./pages/AddTodo";
import EditTodoPage from "./pages/EditTodo";

function App() {
  return (
    <DefaultLayout>
      <Switch>
        <Route path="/" exact>
          <AllTodoPage />
        </Route>
        <Route path="/new-todo">
          <AddTodoPage />
        </Route>
        <Route path="/edit-todo">
          <EditTodoPage />
        </Route>
      </Switch>
    </DefaultLayout>
  );
}

export default App;
