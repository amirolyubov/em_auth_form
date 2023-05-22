import React from "react";
import { Div, Text, Link } from "../../components/basic";
import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const FormTab = styled(Link)`
    width: 50%;
    text-decoration: none;
    color: inherit;
    background-color: grey;
    padding: 10px 15px;
    transition: 0.3s;
    transition-property: transform;
    ${({ active }) =>
        active &&
        `
        background-color: white;
        color: black;
        cursor: default;

    `};
`;

function Auth() {
    const { pathname } = useLocation();

    return (
        <Div
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            height="100%"
            bg="black"
        >
            <Div bg="white" width="300px" mt="10%">
                <Div display="flex" justifyContent="space-between">
                    <FormTab
                        active={
                            pathname === "/auth/signin"
                                ? 1
                                : 0 /* this is for removing the warning from log, but the best way for it is using TS */
                        }
                        to="signin"
                    >
                        <Text>signin</Text>
                    </FormTab>
                    <FormTab
                        active={pathname === "/auth/signup" ? 1 : 0 /* same */}
                        to="signup"
                    >
                        <Text>signup</Text>
                    </FormTab>
                </Div>
                <Div p="20px 15px 30px">
                    <Outlet />
                </Div>
            </Div>
        </Div>
    );
}

export default Auth;
