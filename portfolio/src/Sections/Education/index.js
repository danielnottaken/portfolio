import styled from "styled-components";
import { Margin, SectionItem, SectionTitle, Text } from "../../Components";
import { SvgArrowRight } from "../../Svg";
import colors from "../../utils/colors";

export default function Education({}) {
    return (
        <Wrapper>
            <SectionTitle title={content.title} color={colors.accent3} />
            <Margin mb={20} />
            {content.items.map((item, index) => (
                <SectionWrapper key={index}>
                    <SectionItem
                        location={item.location}
                        Date={item.Date}
                        color={colors.accent3}
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
            <Text size={18} weight={400} color={colors.accent3}>
                {text.slice(0, text.indexOf(" ", 15) + 1)}
            </Text>
            {text.slice(text.indexOf(" ", 15) + 1)}
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
            HiddenBody: () => (
                <>
                    <HiddenBodyText
                        color={colors.white}
                        text="During the course of my Bachelor's in Information Technologies, I gained extensive knowledge in various areas of software development. The program was heavily project-based and practical, allowing me to develop a range of skills applicable to real-world situations."
                    />
                    <HiddenBodyText
                        color={colors.white}
                        text="I received comprehensive instruction in basic programming and object-oriented programming, as well as the fundamentals of software architecture and engineering. A major focus of the program was web programming, with an emphasis on current industry standards and best practices. I also gained valuable experience in human-computer interaction and accessibility, ensuring that the software I create is user-friendly and inclusive."
                    />
                    <HiddenBodyText
                        color={colors.white}
                        text="In addition to technical skills, I received training in security and technical English, enabling me to communicate complex technical concepts clearly and concisely. Through hands-on projects and collaborative work, I gained practical experience and learned to work effectively as part of a team."
                    />
                </>
            ),
        },
        {
            location: "UA - University of Aveiro",
            Date: () => (
                <Text size={24} weight={300} color={colors.white}>
                    Oct 2017 -{" "}
                    <Text size={24} weight={400} color={colors.accent3}>
                        Unfinished
                    </Text>
                </Text>
            ),
            title: "INFORMATICS ENGINEERING - MASTER’S",
            Body: () => <></>,
            HiddenBody: () => (
                <>
                    <HiddenBodyText
                        color={colors.white}
                        text="During this period, I pursued a Master's degree in Informatics engineering, where I studied advanced topics such as algorithm theory of information, information retrieval, and large-scale computing. The program included courses in data science, information visualization, and web semantics, with a focus on multimodal interaction and multi-platform application technologies. The curriculum also emphasized practical projects, allowing me to gain hands-on experience with complex algorithms and data mining techniques. While I did not complete the degree, the knowledge and skills I gained have been invaluable in my professional pursuits."
                    />
                </>
            ),
        },
    ],
};
