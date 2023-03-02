import * as React from "react";

function SvgMail({ background, fill, ...props }) {
    return (
        <svg
            width={64}
            height={56}
            viewBox="0 0 128 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x={2}
                y={2}
                width={124}
                height={98}
                rx={3}
                fill={background}
                stroke={fill}
                strokeWidth={4}
            />
            <path
                d="M121.785 98.315c.601.638.148 1.685-.728 1.685H6.943c-.876 0-1.329-1.047-.728-1.685l57.057-60.623a1 1 0 011.456 0l57.057 60.623z"
                fill={background}
                stroke={fill}
                strokeWidth={4}
            />
            <path
                d="M5.805 3.654A1 1 0 016.56 2h114.878c.856 0 1.317 1.006.756 1.654L64.756 70.068a1 1 0 01-1.512 0L5.804 3.654z"
                fill={background}
                stroke={fill}
                strokeWidth={4}
            />
        </svg>
    );
}

export default SvgMail;
