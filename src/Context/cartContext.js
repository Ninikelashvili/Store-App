import { createContext, useReducer, useContext } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext();
const DispatchContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <CartContext.Provider value={state}>{children}</CartContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const useDispatch = () => useContext(DispatchContext);
