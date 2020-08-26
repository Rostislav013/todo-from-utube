import React from "react";
interface IContextProps {
  removeTodo: (id: number) => void;
}
const Context = React.createContext({} as IContextProps);

export default Context;
