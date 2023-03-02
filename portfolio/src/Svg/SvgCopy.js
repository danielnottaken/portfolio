import * as React from "react";

function SvgCopy({ background, fill, fill2, props }) {
    return (
        <svg
            width={32}
            height={32}
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M39 5a4 4 0 014-4h58.988c1.033 0 2.026.4 2.771 1.114l11.034 10.593 10.095 10.534A3.998 3.998 0 01127 26.01V111a4 4 0 01-4 4H43a4 4 0 01-4-4V5z"
                fill={background}
                stroke={fill}
                strokeWidth={6}
            />
            <path
                d="M115.793 13.707L125.086 23H109a4 4 0 01-4-4V2.914l10.793 10.793z"
                fill={fill}
                stroke={fill}
                strokeWidth={6}
            />
            <rect x={51} y={31} width={64} height={8} rx={2} fill={fill2} />
            <rect x={51} y={95} width={53} height={8} rx={2} fill={fill2} />
            <rect x={51} y={79} width={64} height={8} rx={2} fill={fill2} />
            <rect x={51} y={63} width={64} height={8} rx={2} fill={fill2} />
            <rect x={51} y={47} width={64} height={8} rx={2} fill={fill2} />
            <path
                d="M1 17a4 4 0 014-4h58.988a4 4 0 012.77 1.114l11.035 10.593 10.095 10.534A4 4 0 0189 38.01V123a4 4 0 01-4 4H5a4 4 0 01-4-4V17z"
                fill={background}
                stroke={fill}
                strokeWidth={6}
            />
            <path
                d="M77.793 25.707L87.086 35H71a4 4 0 01-4-4V14.914l10.793 10.793z"
                fill={fill}
                stroke={fill}
                strokeWidth={6}
            />
            <rect x={13} y={43} width={64} height={8} rx={2} fill={fill2} />
            <rect x={13} y={107} width={53} height={8} rx={2} fill={fill2} />
            <rect x={13} y={91} width={64} height={8} rx={2} fill={fill2} />
            <rect x={13} y={75} width={64} height={8} rx={2} fill={fill2} />
            <rect x={13} y={59} width={64} height={8} rx={2} fill={fill2} />
        </svg>
    );
}

export default SvgCopy;
