import styled from "styled-components";
import colors from "../../utils/colors";
import Text from "../Text";

export default function EmailCopy({ email }) {
    return (
        <Container $border={colors.primary}>
            <Wrapper>
                <EmailField>
                    <Text size={18} weight={500} color={colors.white}>
                        {email}
                    </Text>
                </EmailField>
                <CopyButton $color={colors.primary}></CopyButton>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    height: 80px;
    width: 100%;
    border: 4px solid ${({ $border }) => $border};
    border-radius: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-flow: row;
`;

const EmailField = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`;

const CopyButton = styled.a`
    height: 80px;
    width: 80px;
    background: ${({ $color }) => $color};
    border-radius: 10px;
`;
