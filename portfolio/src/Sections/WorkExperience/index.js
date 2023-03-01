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

export default function WorkExperience({}) {
    return (
        <Wrapper>
            <SectionTitle title={content.title} color={colors.accent2} />
            <Margin mb={20} />
            {content.items.map((item, index) => (
                <SectionWrapper key={index}>
                    <SectionItem
                        location={item.location}
                        Date={item.Date}
                        color={colors.accent2}
                        Body={item.Body}
                        title={item.title}
                        HiddenBody={item.HiddenBody}
                    />
                    <Margin mb={24} />
                </SectionWrapper>
            ))}
        </Wrapper>
    );
}
const Wrapper = styled.div``;
const SectionWrapper = styled.div``;
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
                <>
                    <BadgeWrapper>
                        <Badge
                            borderColor={colors.accent2}
                            label="HTML"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="CSS"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="JEE"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="REST"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="Ember.js"
                            textColor={colors.accent2}
                        />
                    </BadgeWrapper>
                    <Margin mb={8} />
                    <BadgeWrapper>
                        <Badge
                            borderColor={colors.white}
                            label="Scrum"
                            textColor={colors.white}
                        />
                        <Badge
                            borderColor={colors.white}
                            label="Git"
                            textColor={colors.white}
                        />
                    </BadgeWrapper>
                </>
            ),
            HiddenBody: () => (
                <HiddenBodyText
                    color={colors.white}
                    text="During my internship at LVS Universal, I took on the role of a full-stack developer, responsible for designing and developing a platform for animal shelter management. As the sole developer on the project, I designed the database architecture and built both the front-end and back-end of the application. While I received occasional guidance and support from the senior developers, I was primarily responsible for the development and implementation of the project."
                />
            ),
        },
        {
            location: "Crucial Compliance, Lda",
            Date: () => (
                <DateText color={colors.white} text="Jun 2021 - Nov 2021" />
            ),
            title: "FULL-STACK DEVELOPER",
            Body: () => (
                <>
                    <BadgeWrapper>
                        <Badge
                            borderColor={colors.accent2}
                            label="HTML"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="CSS"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="Javascript"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="PHP"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="Symfony"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="Twig"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="Sql"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="PostgeSql"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="RESTful APIs"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="AWS S3"
                            textColor={colors.accent2}
                        />
                    </BadgeWrapper>
                    <Margin mb={8} />
                    <BadgeWrapper>
                        <Badge
                            borderColor={colors.white}
                            label="Scrum"
                            textColor={colors.white}
                        />
                        <Badge
                            borderColor={colors.white}
                            label="Kanban"
                            textColor={colors.white}
                        />
                        <Badge
                            borderColor={colors.white}
                            label="CI/CD"
                            textColor={colors.white}
                        />
                        <Badge
                            borderColor={colors.white}
                            label="Git"
                            textColor={colors.white}
                        />
                    </BadgeWrapper>
                </>
            ),
            HiddenBody: () => (
                <>
                    <HiddenBodyText
                        color={colors.white}
                        text="At Crucial Compliance, I worked as a full-stack developer as part of a team that varied in size from 3 to 7 members during my tenure. As a developer, my primary responsibilities involved implementing new features and bug fixing. Specifically, I added various features to existing projects, such as notification commands to run with cron, client API implementation, new graphs for data analysis, and CRUD functionality and PDF exportation for reports."
                    />
                    <HiddenBodyText
                        color={colors.white}
                        text="My main project at Crucial Compliance was a data analysis dashboard with reporting capabilities. As part of this project, I was responsible for designing and implementing new features, ensuring the application remained stable and scalable, and fixing any bugs that arose. Throughout my time at Crucial Compliance, I was consistently praised for my ability to deliver high-quality work within tight deadlines."
                    />
                </>
            ),
        },
        {
            location: "Sinal Principal, Lda",
            Date: () => (
                <DateText color={colors.white} text="Nov 2021 - Nov 2022" />
            ),
            title: "FULL-STACK DEVELOPER",
            Body: () => (
                <>
                    <BadgeWrapper>
                        <Badge
                            borderColor={colors.accent2}
                            label="HTML"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="CSS"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="Javascript"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="React.js"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="React Native"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="Expo"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="Next.js"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="Node.js"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="GraphQl"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="PostgeSql"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="AWS S3"
                            textColor={colors.accent2}
                        />
                        <Badge
                            borderColor={colors.accent2}
                            label="Digital Ocean"
                            textColor={colors.accent2}
                        />
                    </BadgeWrapper>
                    <Margin mb={8} />
                    <BadgeWrapper>
                        <Badge
                            borderColor={colors.white}
                            label="Kanban"
                            textColor={colors.white}
                        />
                        <Badge
                            borderColor={colors.white}
                            label="CI/CD"
                            textColor={colors.white}
                        />
                        <Badge
                            borderColor={colors.white}
                            label="Git"
                            textColor={colors.white}
                        />
                    </BadgeWrapper>
                </>
            ),
            HiddenBody: () => (
                <>
                    <HiddenBodyText
                        color={colors.white}
                        text="During my time as a Fullstack Developer at Sinal Principal, I was part of a dynamic and agile team of two members, working closely together to deliver outstanding projects. My role encompassed a range of tasks, including designing the architecture of applications, building frontend prototypes from set designs, developing applications with backoffice access, building mobile apps, implementing new features on existing projects, and resolving any issues that arose during the development process. I was able to effectively communicate my ideas and collaborate with my team members to achieve the best possible results."
                    />
                    <HiddenBodyText
                        color={colors.white}
                        text="We always sought to use the latest cutting-edge technology and keep up with industry trends, ensuring that the projects we worked on were of the highest quality. I also enjoyed collaborating with team members, sharing knowledge and ideas, to create innovative solutions that met our clients' needs. Working in a dynamic environment, I was able to constantly challenge myself and grow my skills."
                    />
                </>
            ),
        },
    ],
};
