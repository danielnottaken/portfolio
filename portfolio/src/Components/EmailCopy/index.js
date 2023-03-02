import styled from "styled-components";
import { SvgCopy } from "../../Svg";
import colors from "../../utils/colors";
import Button from "../Button";
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
                <Button $backgroundColor={colors.primary} $borderColor={colors.primary} $height={80} $width={80}>
                    <SvgCopy
                        background={colors.primary}
                        fill={colors.white}
                        fill2={colors.white}
                    />
                </Button>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    height: 80px;
    width: 100%;
    border: 2px solid ${({ $border }) => $border};
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
