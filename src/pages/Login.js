import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/list')
  }, [history]);

  return (
    <div>Ini login page</div>
  )
}

export default LoginPage;