import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../context/ThemeContext";
import {useContext} from "react";

interface UseThemeReturn {
    theme?: Theme,
    toggleTheme: () => void
}

export function useTheme(): UseThemeReturn {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
