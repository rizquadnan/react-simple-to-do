import TodoList from '../components/TodoList';
  
const DUMMY_DATA = [
  {
    id: 't1',
    title: 'Buy some groceries',
    description:
      'Important! Mom needs it urgently',
  },
  {
    id: 't2',
    title: 'Do homework',
    description:
      '',
  },
  {
    id: 't3',
    title: 'Do homework',
    description:
      '',
  },
  {
    id: 't4',
    title: 'Do homework',
    description:
      '',
  },
  {
    id: 't5',
    title: 'Do homework',
    description:
      '',
  },
];

function AllTodoPage () {
  return (<div>
    <h1>Your to do list</h1>

    <TodoList todos={DUMMY_DATA} />
  </div>)
};

export default AllTodoPage;