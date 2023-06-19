import {PropsWithChildren, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "../context/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light

export const ThemeProvider = (props: PropsWithChildren<ThemeContextProps>) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const themeProps: ThemeContextProps = useMemo(() => {
        return {
            theme,
            setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={themeProps}>
            {props.children}
        </ThemeContext.Provider>
    )
}
