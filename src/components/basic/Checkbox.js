import React from "react";
import styled from "@emotion/styled";
import { color, flexbox, layout, space } from "styled-system";
import Text from "./Text";
import Div from "./Div";

const BaseCheckbox = styled.input`
    margin-right: 10px;
    ${color};
    ${layout};
    ${flexbox};
    ${space};
`;
BaseCheckbox.defaultProps = {
    type: "checkbox",
};

const Checkbox = (props) => (
    <>
        <label>
            <Div alignItems="center" display="flex" {...props}>
                <BaseCheckbox />
                <Text>{props.label}</Text>
            </Div>
        </label>
    </>
);

export default Checkbox;
