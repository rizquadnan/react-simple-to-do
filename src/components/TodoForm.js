import { useRef } from 'react';

import Button from './Button';
import classes from './TodoForm.module.css';

function TodoForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const todoData = {
      title: enteredTitle,
      description: enteredDescription,
    };

    props.onAddTodo(todoData);
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" required id="title" ref={titleInputRef}/>
      </div>

      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea type="text" required id="description" rows="5" ref={descriptionInputRef}/>
      </div>

      <div className={classes.actions}>
        <Button>Add Todo</Button>
      </div>
    </form>
  )
}

export default TodoForm;