import styled from "styled-components";
import { Badge, Container, Margin } from "./Components";
import { AboutMe, Bio, Education } from "./Sections";
import colors from "./utils/colors";

function App() {
    return (
        <Background $color={colors.background}>
            <Wrapper>
                <Row>
                    <Container backgroundColor={colors.secundary}>
                        <Bio />
                    </Container>
                    <Margin mr={20} />
                    <Container backgroundColor={colors.secundary}>
                        <AboutMe />
                        <Education />
                    </Container>
                </Row>
            </Wrapper>
        </Background>
    );
}

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ $color }) => $color};
`;

const Wrapper = styled.div`
    padding: 40px;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
`;

export default App;
