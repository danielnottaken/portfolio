import styled from "styled-components";
import colors from "../../utils/colors";
import Bar from "./Bar";
import Square from "./Square";
import Wheel from "./Wheel";

export default function Loading({ type }) {
    switch (type) {
        case "wheel":
            return <Wheel />;
        case "bar":
            return <Bar />;
        case "square":
            return <Square />;
        default:
            return <Wheel />;
    }
}
