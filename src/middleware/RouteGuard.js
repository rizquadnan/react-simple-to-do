import { auth } from '../index';

import { useContext, useState, useEffect } from 'react';
import UserContext from '../store/userContext';

import { useHistory } from 'react-router-dom';

function RouteGuard(props) {
  const history = useHistory();
  const userCtx = useContext(UserContext);
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    console.log(userCtx.isSignedIn());
  }, [])

  if (isSignedIn) {
    return (
      <div>{props.children}</div>
    )
  } else {
    history.replace('/')
    return <div></div>
  }
}

export default RouteGuard;