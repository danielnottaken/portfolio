import styled from "styled-components";
import { SectionItem, SectionTitle, Text } from "../../Components";
import { SvgArrowRight } from "../../Svg";
import colors from "../../utils/colors";

export default function Education({}) {
    return (
        <Wrapper>
            <SectionTitle title={content.title} color={colors.accent3} />
            {content.items.map((item, index) => (
                <SectionItem
                    key={index}
                    location={item.location}
                    Date={item.Date}
                    color={colors.accent3}
                    Body={item.Body}
                    title={item.title}
                />
            ))}
        </Wrapper>
    );
}
const Wrapper = styled.div``;
const DateText = ({ text, color }) => (
    <Text size={24} weight={300} color={color}>
        {text}
    </Text>
);

const content = {
    title: "Education",
    items: [
        {
            location: "ESTGA - University of Aveiro",
            Date: () => (
                <DateText color={colors.white} text="Sep 2014 - Sep 2017" />
            ),
            title: "INFORMATION TECHNOLOGIES - BACHELOR’S",
            Body: () => <></>,
        },
    ],
};
