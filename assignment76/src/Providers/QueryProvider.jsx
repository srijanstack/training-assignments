import { useSearchParams } from "react-router-dom";
import { QueryContext } from "../Contexts/Contexts";

function QueryProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  let { query } = params;

  query = query || "";

  function handleQuery(value) {
    setSearchParams({ ...params, page: 1, query: value }, { replace: false });
  }

  return (
    <>
      <QueryContext.Provider value={{ query, handleQuery }}>
        {children}
      </QueryContext.Provider>
    </>
  );
}

export default QueryProvider;
