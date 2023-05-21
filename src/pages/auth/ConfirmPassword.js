import React from "react";
import { Div, Text, Input, Button, Checkbox } from "../../components/basic";

function ConfirmPassword() {
    return (
        <Div>
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
            <Button mt="20px">
                <Text>confirm new password</Text>
            </Button>
        </Div>
    );
}

export default ConfirmPassword;
