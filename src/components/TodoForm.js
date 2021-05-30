import { useState, useEffect } from 'react';

import Button from './Button';
import classes from './TodoForm.module.css';

function TodoForm(props) {
  const [form, setFormData] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    setFormData({
      title: props.title,
      description: props.description,
    })
  }, [props.title, props.description]);

  function onInput(value, type) {
    setFormData({
      ...form,
      [`${type}`]: value
    })
  }

  function submitHandler(event) {
    event.preventDefault();

    props.onSubmit(form);
  }

  const buttonLabel = props.isEdit ? 'Edit Todo' : 'Add Todo'

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" required id="title" value={form.title} onChange={(e)=> onInput(e.target.value, 'title')} />
      </div>

      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea type="text" required id="description" value={form.description} rows="5" onChange={(e)=> onInput(e.target.value, 'description')} />
      </div>

      <div className={classes.actions}>
        <Button>{buttonLabel}</Button>
      </div>
    </form>
  )
}

export default TodoForm;