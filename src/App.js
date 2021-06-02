import { Route, Switch } from "react-router-dom";
import { useContext } from "react";

import DefaultLayout from "./layout/DefaultLayout";
import UserContext from './store/userContext';

import LoginPage from "./pages/Login";
import AllTodoPage from "./pages/AllTodo";
import AddTodoPage from "./pages/AddTodo";
import EditTodoPage from "./pages/EditTodo";

function App() {
  const userCtx = useContext(UserContext);
  if (userCtx.isSignedIn()) {
    return (
      <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
        <DefaultLayout>
          <Route path="/list">
            <AllTodoPage />
          </Route>
          <Route path="/new">
            <AddTodoPage />
          </Route>
          <Route path="/edit/:id">
            <EditTodoPage />
          </Route>
        </DefaultLayout>
      </Switch>
    )
  }
  else return (
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
      </Switch>
  );
}

export default App;
