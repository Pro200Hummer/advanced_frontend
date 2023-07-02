import React from 'react';
import './styles/index.scss'
import {useTheme, AppRouter} from "app";
import {classNames} from "shared";
import {NavBar} from "widgets/NavBar";


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <AppRouter/>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    );
};
