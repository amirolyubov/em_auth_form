/** @jsxImportSource @emotion/react */
import { keyframes, css } from "@emotion/react";
import { Div, Text } from "./basic";

const animationTextRotating = keyframes`
    to { transform: rotate(360deg); }
`;
const animationOpacity = keyframes`
    from { background-color: rgba(255, 255, 255, 0); }
    to { background-color: rgba(255, 255, 255, 0.5); }
`;

function LoaderPopup() {
    return (
        <Div
            css={css`
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.5);
                animation: ${animationOpacity} 0.3s;
            `}
        >
            <Text
                css={css`
                    color: blue;
                    animation: ${animationTextRotating} 3s linear infinite;
                    font-size: 190px;
                `}
                fontSize="180px"
            >
                ∴
            </Text>
        </Div>
    );
}

export default LoaderPopup;
