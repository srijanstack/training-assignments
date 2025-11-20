import { useContext } from "react";
import { AlertContext, CartContext, UserContext } from "./Contexts";

const withProvider = (provider) => (IncomingComponent) => (props) => {
  const allContext = useContext(provider);
  return <IncomingComponent {...props} {...allContext} />;
};

export default withProvider;
export const withAlert = withProvider(AlertContext);
export const withUser = withProvider(UserContext);
export const withCart = withProvider(CartContext);