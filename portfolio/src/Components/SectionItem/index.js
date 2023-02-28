import styled from "styled-components";
import { SvgArrowRight } from "../../Svg";
import colors from "../../utils/colors";
import Button from "../Button";
import Margin from "../Margin";
import Text from "../Text";

export default function SectionItem({ location, title, Date, Body, color }) {
    return (
        <Wrapper>
            <SvgArrowRight fill={color} />
            <Margin mr={16} />
            <TextBody>
                <TextBodyHeader>
                    <Text size={24} weight={600} color={colors.white}>
                        {location}
                    </Text>
                    <Date />
                </TextBodyHeader>
                <Text size={36} weight={600} color={color}>
                    {title}
                </Text>
                <Button
                    $borderColor={color}
                    $backgroundColor="transparent"
                    $height={24}
                    $width={100}
                >
                    <Text size={14} weight={400} color={color}>
                        Read more
                    </Text>
                </Button>
                <Body />
            </TextBody>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: row;
    width: 100%;
`;

const TextBody = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
`;

const TextBodyHeader = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
`;