import { Badge, Container } from "./Components";
import { AboutMe } from "./Sections";
import colors from "./utils/colors";

function App() {
    return (
        <>
            <Badge
                label="React"
                borderColor={colors.accent1}
                backgroundColor={colors.accent1}
                percentage={75}
            />
            <Container backgroundColor={colors.secundary}>
                <AboutMe />
            </Container>
        </>
    );
}

export default App;
