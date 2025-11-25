import { UserContext } from "../Contexts/Contexts";
import {  useState, useEffect } from "react";
import Loading from "../UI/Loading";
import axios from "axios";

function UserProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://r5ftltl6sj.execute-api.us-east-1.amazonaws.com/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Login first", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (loading) {
    return (
      <>
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
          <Loading />
        </div>
      </>
    );
  }

  return(<>
          <UserContext.Provider value={{ user, setUser }}>
            {children}
          </UserContext.Provider>
  </>);
}

export default UserProvider;