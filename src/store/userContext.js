import { createContext, useState, useEffect } from 'react';
import { auth } from '../index';

const User = createContext({
  uid: '',
  displayName: '',
  isSignedIn: () => {}
})

export function UserContextProvider(props) {
  const [displayName, setDisplayName] = useState('')
  const [uid, setUserId] = useState('');
  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(user => {
      if (!user) return;

      const { displayName, uid } = user;
      setDisplayName(displayName);
      setUserId(uid);
    });
    return () => unregisterAuthObserver(); 
  }, []);

  const context = {
    userId: uid,
    displayName,
    isSignedIn: () => !!uid
  };

  console.log(context);
  return (
    <User.Provider value={context}>
      {props.children}
    </User.Provider>
  );
}

export default User;