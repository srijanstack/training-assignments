
import { Navigate } from "react-router-dom";

function AuthRoute({user, children}){
    if(user){
        return <Navigate to='/' />
    }
    return children;
}

export default AuthRoute;