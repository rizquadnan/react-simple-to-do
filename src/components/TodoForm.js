import classes from './TodoForm.module.css';

function TodoForm() {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" required id="title"/>
      </div>

      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea type="text" required id="description" rows="5"/>
      </div>

      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  )
}

export default TodoForm;