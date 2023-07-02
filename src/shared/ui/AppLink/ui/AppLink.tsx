import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared";
import cls from './AppLink.module.scss'
import {AppLinkTheme} from "../types";

export interface AppLinkPropsModel extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkPropsModel> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...restProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [cls[theme], props.className])}
            {...restProps}
        >
            {children}
        </Link>
    );
};
