import styled from "styled-components";
import {
    Badge,
    BadgeWrapper,
    Margin,
    SectionItem,
    SectionTitle,
    Text,
} from "../../Components";
import colors from "../../utils/colors";

export default function Skills({}) {
    return (
        <Wrapper>
            <SectionTitle title={content.title} color={colors.accent1} />
            <Text size={36} weight={600} color={colors.white}>
                {content.main.title}
            </Text>
            <BadgeWrapper>
                {content.main.items.map((item, index) => (
                    <Badge
                        key={index}
                        label={item.label}
                        percentage={item.percentage}
                        borderColor={colors.accent1}
                        backgroundColor={colors.accent1}
                        textColor={colors.white}
                    />
                ))}
            </BadgeWrapper>
            <Text size={36} weight={600} color={colors.white}>
                {content.soft.title}
            </Text>
            <BadgeWrapper>
                {content.soft.items.map((item, index) => (
                    <Badge
                        key={index}
                        label={item.label}
                        percentage={item.percentage}
                        borderColor={colors.accent1}
                        backgroundColor={colors.accent1}
                        textColor={colors.white}
                    />
                ))}
            </BadgeWrapper>
            <Text size={36} weight={600} color={colors.white}>
                {content.language.title}
            </Text>
            {content.language.items.map((item, index) => (
                <Row key={index}>
                    <Text size={16} weight={600} color={colors.accent1}>{`${item.name}:`}</Text>
                    <Margin mr={4} />
                    <Text size={16} weight={600} color={colors.white}>{item.proficiency}</Text>
                </Row>
            ))}
        </Wrapper>
    );
}
const Wrapper = styled.div``;

const Row = styled.div`
    display: flex;
    fle-flow: row;
`;

const content = {
    title: "Skills",
    main: {
        title: "Main",
        items: [
            {
                label: "HTML",
                percentage: 78,
            },
            {
                label: "CSS",
                percentage: 71,
            },
            {
                label: "Javascript",
                percentage: 80,
            },
            {
                label: "Node.js",
                percentage: 60,
            },
            {
                label: "React.js",
                percentage: 84,
            },
            {
                label: "PHP",
                percentage: 67,
            },
            {
                label: "Symfony",
                percentage: 65,
            },
        ],
    },
    soft: {
        title: "Soft",
        items: [
            {
                label: "Communication",
                percentage: 60,
            },
            {
                label: "Adaptability",
                percentage: 89,
            },
            {
                label: "Collaboration",
                percentage: 80,
            },
            {
                label: "Creativity",
                percentage: 90,
            },
            {
                label: "Time management",
                percentage: 70,
            },
            {
                label: "Leadership",
                percentage: 35,
            },
            {
                label: "Emotional intelligence",
                percentage: 79,
            },
            ,
            {
                label: "Attention to detail",
                percentage: 86,
            },
            ,
            {
                label: "Critical thinking",
                percentage: 82,
            },
        ],
    },
    language: {
        title: "Language",
        items: [
            {
                name: "Portuguese",
                proficiency: "Native",
            },
            {
                name: "English",
                proficiency: "Fluent",
            },
        ],
    },
};
