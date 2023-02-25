import styled from "styled-components"
import Text from "../Text"

export default function SectionTitle({ title, color }) {
    return (<Wrapper>
        <Text size={48} weight={700} color={color}>{title}</Text>
        <SeparationLine $borderColor={color} />
    </Wrapper>)
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
`
const SeparationLine = styled.div`
    flex-grow: 1;
    height: 16px;
    margin-left: 24px;
    border-bottom: 1px ${({ $borderColor }) => $borderColor} solid;
`