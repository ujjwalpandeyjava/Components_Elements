import { Route, Redirect } from "react-router-dom";

const AuthGuardedRoute = ({ component: Component, auth, ...rest }) => (
	<Route {...rest} render={(props) => (auth === true ? <Component {...props} /> : <Redirect to='/' />)} />
)

export default AuthGuardedRoute;