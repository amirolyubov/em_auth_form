import React from "react";
import { Text, Input, Button } from "../../components/basic";

function ForgotPassword() {
    return (
        <>
            <Input
                width="100%"
                label="username"
                placeholder="enter your email or @user"
                name="email"
            />
            <Button mt="20px">
                <Text>reset password</Text>
            </Button>
        </>
    );
}

export default ForgotPassword;
