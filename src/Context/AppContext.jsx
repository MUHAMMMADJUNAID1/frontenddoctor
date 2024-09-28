import { createContext } from "react";
import { doctors } from "../assets/assets";
const cuurencySymbol = "$";

const defaultValu = {
  doctors,
  cuurencySymbol,
};
export const AppContext = createContext();
const AppContextProvider = (props) => {
  defaultValu;
  return (
    <AppContext.Provider value={defaultValu}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
