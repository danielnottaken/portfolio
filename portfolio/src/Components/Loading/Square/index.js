import styled from "styled-components";
import colors from "../../../utils/colors";

export default function Square() {
    return (
        <Container>
            <LoadingSquare $backgroundColor={colors.white} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const LoadingSquare = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    animation: spin 2s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
        0%, 100% {
            border-radius: 0px;
            opacity: 80%;
        }
        50% {
            border-radius: 10px;
            opacity: 80%;
        }
    }
`;