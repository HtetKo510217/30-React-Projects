import React, { useEffect } from 'react'
import Blog from './Blog'
import { ThemeContext, themes } from './context/theme-context'
import './style.css'
export default function LightAndDarkModeApp() {
    const [theme, setTheme] = React.useState(themes.light);
    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    }
    useEffect(() => {
        document.body.classList.add(theme);
        return () => {
            document.body.classList.remove(theme);
        }
    }, [theme])

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        <Blog />
    </ThemeContext.Provider>
  )
}
