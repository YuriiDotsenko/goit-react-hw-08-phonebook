import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLogedIn = useSelector(authSelectors.getAuthStatus);
  const shouldRedirect = restricted && isLogedIn;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
