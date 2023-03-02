import styled from "styled-components";

export default function Button({ children, ...props }) {
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
    border-radius: 15px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    white-space: nowrap;
    cursor: pointer;
    object-fit: cover;
`;
