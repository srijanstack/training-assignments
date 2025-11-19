import { useContext } from "react"
import { UserContext } from "../App";

function withUser(IncomingComponent){
    function OutGoingComponent(props){
        const {user, setUser} = useContext(UserContext);
        return(
            <IncomingComponent {...props} user={user} setUser={setUser} />
        )
    }
    return OutGoingComponent;
}

export default withUser;