import React from 'react';
import './styles/index.scss'
import {useTheme, AppRouter} from "app";
import {NavBar} from "widgets";
import {classNames} from "shared";



export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <AppRouter/>
        </div>
    );
};
