import React, { createContext, useState } from 'react';
import { themeOptions } from '../theme/MainTheme'
export const ThemeContext = createContext();


const ThemeProvider = ({children}) => {

  const [themeBackground, setThemeBackground] = useState(themeOptions.articles);

  return ( 
    <ThemeContext.Provider value={{themeBackground, setThemeBackground}}>
      {children}
    </ThemeContext.Provider>
   );
}
 
export default ThemeProvider;