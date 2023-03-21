import styled from "styled-components";
import { EmailCopy, Loading, Margin, Text } from "../../Components";
import { SvgGitHub, SvgLinkedIn, SvgMail } from "../../Svg";
import colors from "../../utils/colors";

export default function Bio({}) {
    return (
        <Wrapper>
            <ProfilePicture src="/images/pfp.jpg" alt="Profile Picture" />
            <Right>
                <Text size={64} weigth={700} color={colors.white} noWrap>
                    {content.name}
                </Text>
                <Text size={48} weigth={700} color={colors.primary} noWrap>
                    {content.job}
                </Text>
                <Margin mb={40} />
                <Row>
                    <Margin mr={40} />
                    <SvgLinkedIn
                        background={colors.white}
                        fill={colors.secundary}
                    />
                    <SvgGitHub
                        background={colors.white}
                        fill={colors.secundary}
                    />
                    <SvgMail
                        background={colors.secundary}
                        fill={colors.white}
                    />
                    <Margin ml={40} />
                </Row>
                <Margin mb={40} />
                <EmailCopy email={content.email} />
            </Right>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    @media (max-width: 1366px) {
        flex-flow: row;
        justify-content: space-between;
    }
`;

const Right = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    @media (max-width: 1366px) {
        width: 100%;
        align-items: start;
        margin-left: 24px;
    }
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
`;

const ProfilePicture = styled.img`
    width: 360px;
    heigth: 360px;
    border-radius: 50%;
`;

const content = {
    name: "Daniel Madaíl",
    email: "danielbmadail@gmail.com",
    job: "Full-stack Developer",
};
