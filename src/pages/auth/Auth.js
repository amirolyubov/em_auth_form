import React from "react";
import { Div, Text } from "../../components/basic";
import { Navigate, Outlet } from "react-router-dom";

function Auth() {
    return (
        <Div>
            <Text>This is auth page!</Text>

            <Outlet />
        </Div>
    );
}

export default Auth;
