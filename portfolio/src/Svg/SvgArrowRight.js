import * as React from "react"

function SvgArrowRight({fill, ...props}) {
  return (
    <svg
      width={50}
      height={81}
      viewBox="0 0 50 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 9.368C0 1.4 9.588-2.637 15.288 2.928l32 31.249A9 9 0 0150 40.616v.265a9 9 0 01-2.747 6.473l-32 30.912C9.54 83.784 0 79.736 0 71.793V9.368z"
        fill={fill}
      />
    </svg>
  )
}

export default SvgArrowRight
