import styled from "@emotion/styled";
import { color, flexbox, layout, space } from "styled-system";

const Button = styled.button`
    ${color};
    ${layout};
    ${space};
    ${flexbox};
    width: 100%;
    padding: 10px;
    text-transform: uppercase;
    cursor: pointer;
    background-color: blue;
    color: white;
    border: 0;
    transition: 0.2s;

    &:disabled {
        opacity: 0.3;
        color: #bababa;
        cursor: default;
    }
`;

export default Button;
