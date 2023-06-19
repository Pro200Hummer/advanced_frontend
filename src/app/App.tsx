import React from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme, AppRouter} from "app";
import {classNames} from "shared";


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <div>
                <Link to={'/'}>Main Page</Link>
                <Link to={'/about'}>About Page</Link>
            </div>
            <AppRouter/>
        </div>
    );
};
