import classes from "./TodoItem.module.css";

import Button from "../components/Button";

function TodoItem(props) {
  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <span className={classes.title}>{props.title}</span>
        {props.description && (
          <small className={classes.description}>
            {props.description}
          </small>
        )}
      </div>

      <div className={classes.actions}>
        <Button onClick={props.onEdit}>Edit</Button>
        <Button onClick={props.onDelete}>Done</Button>
      </div>
    </div>
  );
}

export default TodoItem;
