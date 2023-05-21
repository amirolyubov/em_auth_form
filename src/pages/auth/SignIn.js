import React from "react";
import { Button, Div, Input, Text, Link } from "../../components/basic";

function SignIn() {
    return (
        <Div>
            <Input
                width="100%"
                label="username"
                placeholder="email or @user"
                name="email"
            />
            <Input
                placeholder="enter password"
                label="password"
                name="password"
                type="password"
                mt="20px"
            />
            <Button mt="20px" mb="10px">
                <Text>sign in</Text>
            </Button>
            <Link to="/auth/resetpassword">
                <Text>Forgot your password?</Text>
            </Link>
        </Div>
    );
}

export default SignIn;
