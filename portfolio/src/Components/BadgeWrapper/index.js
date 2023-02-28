import styled from "styled-components";

export default function BadgeWrapper({ children }) {
    return (
        <Wrapper>
            {children.map((item, index) => (
                <BadgeMargin key={index}>{item}</BadgeMargin>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    margin: 0px -4px;
`;

const BadgeMargin = styled.div`
    margin: 0px 4px;
`;
