import styled from "styled-components";
import { Margin, SectionTitle, Text } from "../../Components";
import colors from "../../utils/colors";

export default function AboutMe({}) {
    return (
        <Wrapper>
            <SectionTitle title={content.title} color={colors.primary} />
            <Margin mb={12} />
            <Text size={16} weight={400} color={colors.white}>
                {content.text1}
            </Text>
            <SubSection>
                <Text size={26} weight={700} color={colors.primary}>
                    {content.subSection1.title}
                </Text>
                <SubSectionTextWrapper>
                    <Text size={16} weight={400} color={colors.white}>
                        {content.subSection1.text}
                    </Text>
                </SubSectionTextWrapper>
            </SubSection>
            <SubSection>
                <Text size={26} weight={700} color={colors.primary}>
                    {content.subSection2.title}
                </Text>
                <SubSectionTextWrapper>
                    <Text size={16} weight={400} color={colors.white}>
                        {content.subSection2.text}
                    </Text>
                </SubSectionTextWrapper>
            </SubSection>
            <SubSection>
                <Text size={26} weight={700} color={colors.primary}>
                    {content.subSection3.title}
                </Text>
                <SubSectionTextWrapper>
                    <Text size={16} weight={400} color={colors.white}>
                        {content.subSection3.text}
                    </Text>
                </SubSectionTextWrapper>
            </SubSection>
        </Wrapper>
    );
}

const Wrapper = styled.div``;

const SubSection = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 24px 0px 12px 0px;
`;

const SubSectionTextWrapper = styled.div`
    max-width: 80%;
`;

const content = {
    title: "About Me",
    text1: "Hi, I'm Daniel, I’m 26 years old.",
    subSection1: {
        title: "Professional Summary",
        text: "I’m a full-stack developer with a bachelor's degree in Information Technologies. I have experience working on various projects and have gained proficiency in multiple programming languages and technologies. I'm a creative problem solver and enjoy finding solutions to complex technical challenges.",
    },
    subSection2: {
        title: "Career Goals",
        text: "My main goal is to continue working as a full-stack developer while also expanding my skill set and knowledge. I'm passionate about learning and enjoy keeping up with the latest industry trends and technologies. I'm adaptable and quickly learn new tools and technologies to deliver quality results.",
    },
    subSection3: {
        title: "Personal Interests",
        text: "Outside of work, I like to stay active by going to the gym, running, and wall climbing. I also enjoy gaming, watching movies and TV shows, listening to music, and spending time with friends. These hobbies help me stay balanced and refreshed, allowing me to bring my best self to work.",
    },
};
