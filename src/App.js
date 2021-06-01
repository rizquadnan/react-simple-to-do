import { Route, Switch } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";

import LoginPage from "./pages/Login";
import AllTodoPage from "./pages/AllTodo";
import AddTodoPage from "./pages/AddTodo";
import EditTodoPage from "./pages/EditTodo";

function App() {
  return (
    <div>
      <Switch>
        <DefaultLayout>
          <Route path="/" exact>
            <AllTodoPage />
          </Route>
          <Route path="/new-todo">
            <AddTodoPage />
          </Route>
          <Route path="/edit-todo/:id">
            <EditTodoPage />
          </Route>
        </DefaultLayout>
      </Switch>
    </div>
  );
}

export default App;
