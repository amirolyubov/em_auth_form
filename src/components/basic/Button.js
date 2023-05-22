/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import { color, flexbox, layout, space } from "styled-system";

const bgTranspose = keyframes`
    to {
        background-position: 200% center;
    }
`;

const BaseButton = styled.button`
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

const Button = (props) => {
    return (
        <BaseButton
            {...props}
            css={
                props.isLoading
                    ? css`
                          background: linear-gradient(
                              90deg,
                              blue 0%,
                              #6666ff 70%,
                              #6666ff 80%,
                              blue 100%
                          );
                          background-color: blue;
                          background-clip: border-box;
                          background-size: 200% auto;
                          animation: ${bgTranspose} 1s linear infinite;
                          cursor: default;
                      `
                    : undefined
            }
        >
            {props.children}
        </BaseButton>
    );
};

export default Button;
