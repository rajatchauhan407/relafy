"use client"
import { createContext, useContext } from "react";
import theme from '../theme/theme'

const ThemeContext = createContext();
const useTheme = () => {
    return useContext(ThemeContext);
  }

const ThemeProvider = ({children}) => {
    return (
        <ThemeContext.Provider value={{ theme:theme}}>
          {children}
        </ThemeContext.Provider>
      );
}

export default ThemeProvider;
export { useTheme };