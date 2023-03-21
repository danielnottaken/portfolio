import styled from "styled-components";
import colors from "../../../utils/colors";

export default function Bar() {
    return (
        <Container>
            <LoadingBar $backgroundColor={colors.white} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const LoadingBar = styled.div`
    height: 10px;
    border-radius: 4px;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    animation: changeWidth 3s linear infinite;

    @keyframes changeWidth {
        0%, 100% {
            width: 10px;
            opacity: 80%;
        }
        50% {
            width: 200px;
            opacity: 60%;
        }
    }
`;