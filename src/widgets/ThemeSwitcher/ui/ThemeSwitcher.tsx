import {useTheme} from "app";
import ToggleThemeSvg from 'shared/assets/icons/toggleTheme.svg'
import {Button, classNames} from "shared";
import cls from './ThemeSwitcher.module.scss'
import {ButtonTheme} from "shared/ui/Button/types";

export interface ThemeSwitcherPropsModel {
    className?: string
}


export const ThemeSwitcher = (props: ThemeSwitcherPropsModel) => {
    const {toggleTheme} = useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [props.className])}
            onClick={toggleTheme}
        >
            <ToggleThemeSvg />
        </Button>
    );
};
