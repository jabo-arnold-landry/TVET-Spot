import { createContext, useState } from "react";
export const roleContext = createContext();
export default function MyContextProvider({ children }) {
  const [role, setRole] = useState("students");
  return (
    <roleContext.Provider value={{ role, setRole }}>
      {children}
    </roleContext.Provider>
  );
}
