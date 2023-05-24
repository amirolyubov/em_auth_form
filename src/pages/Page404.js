import React from "react";
import { Div, Text } from "../components/basic";

function Page404() {
    return (
        <Div
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bg="black"
        >
            <Text fontSize="50px" color="white">
                404
            </Text>
            <Text fontSize="20px" color="white">
                This address doesnt exists
            </Text>
        </Div>
    );
}

export default Page404;
