import { Route, Switch } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";

import LoginPage from "./pages/Login";
import AllTodoPage from "./pages/AllTodo";
import AddTodoPage from "./pages/AddTodo";
import EditTodoPage from "./pages/EditTodo";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <DefaultLayout>
        <Route path="/list" redirectTo="/">
          <AllTodoPage />
        </Route>
        <Route path="/new" redirectTo="/">
          <AddTodoPage />
        </Route>
        <Route path="/edit/:id" redirectTo="/">
          <EditTodoPage />
        </Route>
      </DefaultLayout>
    </Switch>
  );
}

export default App;
