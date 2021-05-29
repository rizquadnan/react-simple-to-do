
import { Route, Switch } from 'react-router-dom';

import TodoListPage from './pages/TodoList';
import AddTodoPage from './pages/AddTodo';
import TodayTodos from './pages/TodayTodos';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <TodoListPage />
        </Route>
        <Route path='/new-to-do'>
          <AddTodoPage />
        </Route>
        <Route path='/today'>
          <TodayTodos />
        </Route>
      </Switch>
  </div>
  );
}

export default App;
