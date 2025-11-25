import { useState } from "react";
import { QueryContext } from "../Contexts/Contexts";

function QueryProvider({children}){
      const [query, setQuery] = useState("");

      return(<>
      <QueryContext.Provider value={{query, setQuery}}>
        {children}
      </QueryContext.Provider>
      </>);
}

export default QueryProvider;