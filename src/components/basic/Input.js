/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { layout, space } from "styled-system";
import Div from "./Div";
import Text from "./Text";
import { useState } from "react";

const TooltipWrapper = styled(Div)`
    display: flex;
    justify-content: space-between;
    height: 12px;
    overflow: hidden;
`;

const AnimatedTextBlock = styled(Div)`
    transform: translateY(-10px);
    transition: 0.2s;
    ${(props) =>
        props.isTopText &&
        `
        transform: translateY(2px);
    `}
`;

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

const TooltipIcon = styled(Div)`
    border-radius: 100px;
    width: 12px;
    height: 12px;
    border: 1px solid #aaaaaa;
    color: #aaa;

    &:hover {
        background: #aaaaaa;
        color: white;
    }
`;

const Input = (props) => {
    const [isInputHovered, setInputHovered] = useState(false);
    const [isTooltipHovered, setTooltipActive] = useState(false);
    return (
        <Div
            {...props}
            onMouseLeave={() => setInputHovered(false)}
            onMouseEnter={() => setInputHovered(true)}
        >
            <TooltipWrapper>
                {props.tooltip ? (
                    <AnimatedTextBlock
                        display="flex"
                        flexDirection="column"
                        isTopText={isTooltipHovered}
                    >
                        <Text fontSize="8px" ml="10px">
                            {props.tooltip}
                        </Text>
                        <Text
                            color={props.error ? "#ea0000" : "inherit"}
                            fontSize="10px"
                            ml="10px"
                        >
                            {props.error || props.label}
                        </Text>
                    </AnimatedTextBlock>
                ) : (
                    <Text
                        color={props.error ? "#ea0000" : "inherit"}
                        fontSize="10px"
                        ml="10px"
                    >
                        {props.error || props.label}
                    </Text>
                )}
                {props.tooltip && (isInputHovered || isTooltipHovered) && (
                    <TooltipIcon
                        ml="10px"
                        onMouseLeave={() => setTooltipActive(false)}
                        onMouseEnter={() => setTooltipActive(true)}
                    >
                        <Text
                            lineHeight="11px"
                            fontSize="8px"
                            textAlign="center"
                        >
                            i
                        </Text>
                    </TooltipIcon>
                )}
            </TooltipWrapper>
            <BaseInput
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                mt="5px"
            />
        </Div>
    );
};

export default Input;
