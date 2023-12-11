type IconProps = {
    name: string
    width?: number
    height?: number
}

const Icon = ({
    name,
    height,
    width
}: IconProps) => {
    return (
        <svg
            width={width ?? 24}
            height={height ?? 24}
            strokeWidth={16}
        >
            <use href={`/icons.svg#${name}`} />
        </svg>
    )
}

export default Icon
