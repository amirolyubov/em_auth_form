import React from "react";
import { Global, css, keyframes } from "@emotion/react";

function GlobalStyles() {
    return (
        <Global
            styles={css`
                html,
                body,
                #root {
                    margin: 0;
                    height: 100%;
                }

                * {
                    box-sizing: border-box;
                    user-select: none;
                }
            `}
        />
    );
}

export default GlobalStyles;
