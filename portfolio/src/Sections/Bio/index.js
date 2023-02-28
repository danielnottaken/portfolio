import { useEffect, useState } from "react";
import styled from "styled-components";
import { EmailCopy, Margin, SectionTitle, Text } from "../../Components";
import colors from "../../utils/colors";

export default function Bio({}) {
    
    return (
        <Wrapper>
            <ProfilePicture
                src="/images/pfp.jpg"
                alt="Profile Picture"
            />
            <Text size={64} weigth={700} color={colors.white} noWrap>
                {content.name}
            </Text>
            <Text size={48} weigth={700} color={colors.primary} noWrap>
                {content.job}
            </Text>
            <EmailCopy email={content.email} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
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
