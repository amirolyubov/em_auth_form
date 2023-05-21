import React from "react";
import styled from "@emotion/styled";
import { layout, space } from "styled-system";
import Div from "./Div";
import Text from "./Text";

const BaseInput = styled.input`
    ${space}
    ${layout};
    font-family: monospace;
    outline: 0;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #eaeaea;
    padding: 10px 5px 10px 10px;
    &:focus {
        border-bottom: 1px solid black;
    }
    ${(props) =>
        props.error &&
        `
            border-bottom: 1px solid #ea0000;
        
    `}
`;

const Input = (props) => {
    return (
        <Div {...props}>
            <Div display="flex">
                <Text
                    color={props.error ? "#ea0000" : "inherit"}
                    fontSize="10px"
                    ml="10px"
                >
                    {props.error || props.label}
                </Text>
            </Div>
            <BaseInput
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                error={props.error}
                mt="5px"
            />
        </Div>
    );
};

export default Input;
