import styled from "styled-components";

export default styled.span`
    font-size: ${({ size }) => size}px;
    font-weight: ${({ weight }) => weight};
    color: ${({ color }) => color};
`;
