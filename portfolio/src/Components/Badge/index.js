import styled from "styled-components";
import Text from "../Text";

export default function Badge({
    label,
    textColor,
    borderColor,
    backgroundColor,
    percentage = undefined,
}) {
    return (
        <Container
            $borderColor={borderColor}
            $backgroundColor={!percentage && backgroundColor}
        >
            {!!percentage && (
                <PercentageBar
                    $percentage={percentage}
                    $backgroundColor={backgroundColor}
                />
            )}
            <Text size={14} weight={400} color={textColor}>{label}</Text>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 100px;
    height: 24px;

    border: 1px ${({ $borderColor }) => $borderColor} solid;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const PercentageBar = styled.div`
    z-index: -1;
    position: absolute;
    border-radius: 5px;
    left: 1px;
    top: 1px;
    width: ${({ $percentage }) => ($percentage / 102) * 100}px;
    height: 22px;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
`;
