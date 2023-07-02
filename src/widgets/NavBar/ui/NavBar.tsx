import React from 'react';
import {AppLink, classNames} from "shared";
import {AppLinkTheme} from "shared/ui/AppLink/types";
import cls from './NavBar.module.scss'

export interface NavBarPropsModel {
    className?: string
}

export const NavBar = (props: NavBarPropsModel) => {
    return (
        <div className={classNames(cls.Navbar, {}, [props.className])}>
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    Main Page
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    About Page
                </AppLink>
            </div>
        </div>
    );
};
