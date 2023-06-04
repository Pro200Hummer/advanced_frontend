export function classNames(
    cls: string,
    modes: Record<string, boolean | string>,
    additional: Array<string>
): string {
    const classNamesByModes = Object.entries(modes)
        .filter(([className, value]) => !!value)
        .map(([className, value]) => className)

    return [
        cls,
        ...additional,
        ...classNamesByModes
    ]
        .join(' ')
}
