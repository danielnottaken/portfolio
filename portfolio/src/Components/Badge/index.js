import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Text from "../Text";

export default function Badge({
    label,
    textColor,
    borderColor,
    backgroundColor,
    percentage = undefined,
}) {
    const [componentWidth, setComponentWidth] = useState(0);
    const componentRef = useRef(null);

    useEffect(() => {
        if (componentRef.current) {
            setComponentWidth(componentRef.current.offsetWidth);
        }
    }, []);

    return (
        <Container
            ref={componentRef}
            $borderColor={borderColor}
            $backgroundColor={!percentage && backgroundColor}
        >
            {!!percentage && (
                <PercentageBar
                    $percentageWidth={(percentage / 100) * componentWidth}
                    $backgroundColor={backgroundColor}
                />
            )}
            <FrontText size={14} weight={400} color={textColor}>
                {label}
            </FrontText>
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
    min-width: 100px;
    height: 24px;
    padding: 0px 8px;

    border: 1px ${({ $borderColor }) => $borderColor} solid;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const PercentageBar = styled.div`
    position: absolute;
    border-radius: 3px;
    left: 2px;
    top: 2px;
    width: ${({ $percentageWidth }) => $percentageWidth}px;
    height: 20px;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const FrontText = styled(Text)`
    z-index: 1;
`;
