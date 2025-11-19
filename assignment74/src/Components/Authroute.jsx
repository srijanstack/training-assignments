import { Navigate } from "react-router-dom";
import withUser from "./WithUser";

function AuthRoute({ user, children }) {
  if (user === null) {
    return children;
  }
  return <Navigate to="/" />;
}

export default withUser(AuthRoute);
