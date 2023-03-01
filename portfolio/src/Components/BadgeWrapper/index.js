import styled from "styled-components";

export default function BadgeWrapper({ children }) {
    return (
        <Wrapper>
            {!!children && children.length > 1 ? (
                children.map((item, index) => (
                    <BadgeMargin key={index}>{item}</BadgeMargin>
                ))
            ) : (
                <BadgeMargin>{children}</BadgeMargin>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    margin: -4px -4px;
`;

const BadgeMargin = styled.div`
    margin: 4px 4px;
`;
