import { useContext } from "react";
import { AlertContext, CartContext, UserContext, QueryContext } from "../../Contexts/Contexts";

const withProvider = (provider) => (IncomingComponent) => (props) => {
  const allContext = useContext(provider);
  return <IncomingComponent {...props} {...allContext} />;
};

export default withProvider;
export const withAlert = withProvider(AlertContext);
export const withUser = withProvider(UserContext);
export const withCart = withProvider(CartContext);
export const withQuery = withProvider(QueryContext);