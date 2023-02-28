import styled from "styled-components";
import { Badge, BadgeWrapper, SectionItem, SectionTitle, Text } from "../../Components";
import colors from "../../utils/colors";

export default function WorkExperience({}) {
    return (
        <Wrapper>
            <SectionTitle title={content.title} color={colors.accent2} />
            {content.items.map((item, index) => (
                <SectionItem
                    key={index}
                    location={item.location}
                    Date={item.Date}
                    color={colors.accent2}
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
    title: "Work Experience",
    items: [
        {
            location: "LVS Universal, Lda",
            Date: () => (
                <DateText color={colors.white} text="Mar 2017 - Jul 2017" />
            ),
            title: "FULL-STACK DEVELOPER INTERN",
            Body: () => (
                <BadgeWrapper>
                    <Badge
                        borderColor={colors.accent2}
                        label="Ember.js"
                        textColor={colors.accent2}
                    />
                    <Badge
                        borderColor={colors.accent2}
                        label="JEE"
                        textColor={colors.accent2}
                    />
                </BadgeWrapper>
            ),
        },
    ],
};
