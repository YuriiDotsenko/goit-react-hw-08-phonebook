import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLogedIn = useSelector(authSelectors.getAuthStatus);
  return (
    <Route {...routeProps}>
      {isLogedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
