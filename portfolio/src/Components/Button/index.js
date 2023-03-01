import { Children, useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";

export default function Button({ children, ...props }) {
    const [gradient, setGradient] = useState("transparent");
    const [hoverGradient, setHoverGradient] = useState("");

    function handleMouseMove(event) {
        const button = event.target;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;
        const x = event.clientX - button.offsetLeft;
        const y = event.clientY - button.offsetTop;
        const xPercent = (x / buttonWidth) * 100;
        const yPercent = (y / buttonHeight) * 100;
        setHoverGradient(
            `radial-gradient(circle at ${xPercent}% ${yPercent}%, ${colors.white}, ${colors.secundary})`
        );
    }

    return (
        <CustonButton
            {...props}
        >
            {children}
        </CustonButton>
    );
}

const CustonButton = styled.button`
    border: 1px ${({ $borderColor }) => $borderColor} solid;
    background: ${({ $backgroundColor }) => $backgroundColor};
    border-radius: 5px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    white-space: nowrap;
    cursor: pointer;
`;
