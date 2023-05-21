import styled from "@emotion/styled";
import { Link as BaseLink } from "react-router-dom";
import { color, flexbox, layout, space, typography } from "styled-system";

const Link = styled(BaseLink)`
    text-decoration: none;
    color: blue;
    ${color};
    ${layout};
    ${flexbox};
    ${space};
    ${typography}
`;

export default Link;
