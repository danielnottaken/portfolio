import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-grow: 1;
    flex-flow: column;
    padding: 16px 24px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 25px;
`