import React from "react";
import { Div, Text, Input, Button } from "../../components/basic";

function ForgotPassword() {
    return (
        <Div>
            <Input
                width="100%"
                label="username"
                placeholder="enter your email or @user"
                name="email"
            />
            <Button mt="20px">
                <Text>reset password</Text>
            </Button>
        </Div>
    );
}

export default ForgotPassword;
