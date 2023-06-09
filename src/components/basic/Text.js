import styled from "@emotion/styled";
import { color, layout, space, typography } from "styled-system";

const Text = styled.p`
    font-family: monospace;
    margin: 0;
    font-size: 13px;
    ${color}
    ${space}
    ${layout}
    ${typography}
`;

export default Text;
