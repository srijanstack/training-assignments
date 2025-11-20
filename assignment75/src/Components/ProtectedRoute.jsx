import { Navigate } from "react-router-dom";
import { withUser } from "./WithPorvider";

function ProtectedRoute({user, children}){
    if(!user){
        return <Navigate to='/login'/>
    }
    return children;
}

export default withUser(ProtectedRoute);