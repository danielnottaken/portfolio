import styled from "styled-components";
import {
    Badge,
    BadgeWrapper,
    SectionItem,
    SectionTitle,
    Text,
} from "../../Components";
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
                    HiddenBody={item.HiddenBody}
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
const HiddenBodyText = ({ text, color }) => (
    <Text size={18} weight={300} color={color}>
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
        {
            location: "Sinal Principal, Lda",
            Date: () => (
                <DateText color={colors.white} text="Nov 2021 - Nov 2021" />
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
            HiddenBody: () => (
                <>
                    <HiddenBodyText text="During my time as a Fullstack Developer at Sinal Principal, I was part of a dynamic and agile team of two members, working closely together to deliver outstanding projects. My role encompassed a range of tasks, including designing the architecture of applications, building frontend prototypes from set designs, developing applications with backoffice access, building mobile apps, implementing new features on existing projects, and resolving any issues that arose during the development process. I was able to effectively communicate my ideas and collaborate with my team members to achieve the best possible results." />
                    <HiddenBodyText text="We always sought to use the latest cutting-edge technology and keep up with industry trends, ensuring that the projects we worked on were of the highest quality. I also enjoyed collaborating with team members, sharing knowledge and ideas, to create innovative solutions that met our clients' needs. Working in a dynamic environment, I was able to constantly challenge myself and grow my skills." />
                </>
            ),
        },
    ],
};
