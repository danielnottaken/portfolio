import styled from "styled-components";
import { SectionTitle } from "../../Components";
import { SvgArrowRight } from "../../Svg";
import colors from "../../utils/colors";

export default function Education({}) {
    return (<Wrapper>
        <SectionTitle title={content.title} color={colors.accent3} />
        <SvgArrowRight fill={colors.accent3} />
    </Wrapper>)
}
const Wrapper = styled.div``;

const content = {
    title: "Education"
}