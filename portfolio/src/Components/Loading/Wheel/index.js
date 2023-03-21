import styled from "styled-components";
import colors from "../../../utils/colors";

export default function Wheel() {
    return (
        <Container>
            <LoadingWheel $backgroundColor={colors.white} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const LoadingWheel = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border-top: 3px solid ${({ $backgroundColor }) => $backgroundColor};
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;