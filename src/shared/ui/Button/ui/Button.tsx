import {ButtonHTMLAttributes, FC} from "react";
import cls from './Button.module.scss'
import {classNames} from "shared";
import {ButtonTheme} from "../types";

export interface ButtonPropsModel extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<ButtonPropsModel> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        ...restProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [cls[theme], className])}
            {...restProps}
        >
            {children}
        </button>
    );
};
