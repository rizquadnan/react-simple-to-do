import classes from './TodoItem.module.css';

function TodoItem(props) {
  return (
    <div className={classes.container}>
      <span className={classes.title}>{ props.title }</span>
      { props.description && <small className={classes.description}>{ props.description }</small>}
    </div>
  )
}

export default TodoItem;