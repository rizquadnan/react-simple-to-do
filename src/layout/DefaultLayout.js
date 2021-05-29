  
import Header from '../components/Header.js';
import classes from './DefaultLayout.module.css';

function Default(props) {
  return (
    <div>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Default;