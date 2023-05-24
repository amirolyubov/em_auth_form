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
    text-transform: uppercase;
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
            display={["inherit", "flex"]}
            alignItems="flex-start"
            justifyContent="center"
            height="100%"
            bg="black"
            position="relative"
        >
            <Div
                bg="white"
                width={["100%", "300px"]}
                mt={["0", "10%"]}
                height={["100%", "auto"]}
                display={["flex", "block"]}
                flexDirection="column"
                justifyContent=""
            >
                <Div display="flex" justifyContent="space-between">
                    <FormTab
                        active={
                            pathname === "/auth/signin"
                                ? 1
                                : 0 /* this is for removing the warning from log, the best way for it is using TS */
                        }
                        to="signin"
                    >
                        <Text
                            lineHeight={["36px", "13px"]}
                            fontSize={["20px", "13px"]}
                            pl="10px"
                        >
                            login
                        </Text>
                    </FormTab>
                    <FormTab
                        active={pathname === "/auth/signup" ? 1 : 0 /* same */}
                        to="signup"
                    >
                        <Text
                            lineHeight={["36px", "13px"]}
                            fontSize={["20px", "13px"]}
                            pl="10px"
                        >
                            register
                        </Text>
                    </FormTab>
                </Div>
                <Div
                    p="20px 15px 30px"
                    position="relative"
                    height={["100%", "auto"]}
                >
                    <Outlet />
                </Div>
            </Div>
        </Div>
    );
}

export default Auth;
