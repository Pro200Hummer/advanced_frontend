/**
 * ClassNames
 * @param { string } cls - base classname
 * @param { Record<string, boolean|string> } modes - mapping of modes to either boolean or string for dynamic classnames
 * @param { string[] } additional - additional classes to add
 * @returns { string }
 */
export function classNames(
    cls: string,
    modes: Record<string, boolean | string> = {},
    additional: Array<string> = []
): string {
    const classNamesByModes = Object.entries(modes)
        .filter(([className, value]) => !!value)
        .map(([className, value]) => className)

    return [
        cls,
        ...additional.filter(Boolean),
        ...classNamesByModes
    ]
        .join(' ')
}
