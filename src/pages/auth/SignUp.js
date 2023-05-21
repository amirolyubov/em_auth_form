import React from "react";
import { Text, Input, Button, Checkbox } from "../../components/basic";

function SignUp() {
    return (
        <>
            <Input
                width="100%"
                label="username"
                placeholder="email or @user"
                name="email"
            />
            <Input
                placeholder="create new password"
                label="password"
                name="password"
                type="password"
                mt="20px"
            />
            <Input
                placeholder="confirm your password"
                label="password confirmation"
                type="password"
                mt="20px"
            />
            <Checkbox mt="20px" label="I confirm EVERYTHING" />
            <Button mt="20px">
                <Text>sign up</Text>
            </Button>
        </>
    );
}

export default SignUp;
