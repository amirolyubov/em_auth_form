import styled from "@emotion/styled";
import { display, flex, position, space } from "styled-system";

const Form = styled.form`
    ${space}
    ${position}
    ${flex}
    ${display}
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default Form;
