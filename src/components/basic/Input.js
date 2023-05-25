/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { layout, space } from "styled-system";
import Div from "./Div";
import Text from "./Text";
import { useEffect, useState } from "react";

const TooltipWrapper = styled(Div)`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`;

const InputWrapper = styled(Div)`
    border-bottom: 1px solid #eaeaea;
    justify-content: space-between;
    display: flex;
`;

const AnimatedTextBlock = styled(Div)`
    transform: translateY(-10px);
    transition: 0.2s;
    ${(props) =>
        props.isTopText &&
        `
        transform: translateY(3px);
    `}
`;

const BaseInput = styled.input`
    ${space}
    ${layout};
    font-family: monospace;
    outline: 0;
    width: 100%;
    border: 0;
    padding: 10px 5px 10px 10px;
    ${(props) =>
        props.withShowButton
            ? `
                div:has(> &:focus) {
                    border-bottom: 1px solid black;
                }
                ${
                    props.error &&
                    `
                    div:has(> &) {
                        border-bottom: 1px solid #ea0000;
                    }
                `
                }
            `
            : `
                border-bottom: 1px solid #eaeaea;
                &:focus {
                    border-bottom: 1px solid black;
                }
                ${
                    props.error &&
                    `
                        border-bottom: 1px solid #ea0000;
                    
                `
                }
            `}
`;

const ShowPasswordButton = styled.button`
    border: 0;
    background: transparent;
    cursor: pointer;
    filter: grayscale(1);
`;

const TooltipIcon = styled(Div)`
    border-radius: 100px;
    border: 1px solid #aaaaaa;
    color: #aaa;

    &:hover {
        background: #aaaaaa;
        color: white;
    }
`;
// note:
// its possibly to make hovering effect on tooltip without js only on css
// with ${Element}, or with :has, and if its make sense, ping me and i will rewrite it
const Input = (props) => {
    const [inputType, setInputType] = useState(props.type);
    const [isInputHovered, setInputHovered] = useState(false);
    const [isTooltipHovered, setTooltipActive] = useState(false);

    useEffect(() => {
        setInputType(props.type);
    }, [props.type]);

    return (
        <Div
            {...props}
            id={undefined}
            onBlur={undefined}
            onMouseLeave={() => setInputHovered(false)}
            onMouseEnter={() => setInputHovered(true)}
        >
            <label>
                <TooltipWrapper height={["16px", "12px"]}>
                    {props.tooltip ? (
                        <AnimatedTextBlock
                            display="flex"
                            flexDirection="column"
                            isTopText={isTooltipHovered}
                            device={["mobile", "desktop"]}
                        >
                            <Text
                                fontSize={["9px", "8px"]}
                                ml="10px"
                                mb={["1px", "0"]}
                            >
                                {props.tooltip}
                            </Text>
                            <Text
                                color={props.error ? "#ea0000" : "inherit"}
                                fontSize="10px"
                                ml={["12px", "10px"]}
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
                            width={["16px", "12px"]}
                            height={["16px", "12px"]}
                            mr={["10px", "8px"]}
                            onMouseLeave={() => setTooltipActive(false)}
                            onMouseEnter={() => setTooltipActive(true)}
                        >
                            <Text
                                lineHeight={["17px", "11px"]}
                                fontSize={["14px", "8px"]}
                                textAlign="center"
                            >
                                i
                            </Text>
                        </TooltipIcon>
                    )}
                </TooltipWrapper>
                {props.type === "password" ? (
                    <InputWrapper>
                        <BaseInput
                            autoComplete={props.autoComplete}
                            id={props.id}
                            onChange={props.onChange}
                            onBlur={props.onBlur}
                            value={props.value}
                            placeholder={props.placeholder}
                            type={inputType}
                            name={props.name}
                            error={props.error}
                            withShowButton={props.type === "password"}
                            mt="5px"
                        />
                        <Div display="flex" alignItems="center">
                            {props.isConfirmed && (
                                <Text fontSize={["16px", "11px"]}>✔️</Text>
                            )}
                            <ShowPasswordButton
                                type="button"
                                onClick={() =>
                                    setInputType((type) =>
                                        type === "password"
                                            ? "text"
                                            : "password"
                                    )
                                }
                            >
                                <Text fontSize={["20px", "13px"]}>
                                    {inputType === "text" ? "🔓" : "🔒"}
                                </Text>
                            </ShowPasswordButton>
                        </Div>
                    </InputWrapper>
                ) : (
                    <BaseInput
                        autoComplete={props.autoComplete}
                        id={props.id}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        value={props.value}
                        placeholder={props.placeholder}
                        type={props.type}
                        withShowButton={props.type === "password"}
                        name={props.name}
                        error={props.error}
                        mt="5px"
                    />
                )}
            </label>
        </Div>
    );
};

export default Input;
