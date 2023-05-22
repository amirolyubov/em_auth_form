/** @jsxImportSource @emotion/react */
import { keyframes, css } from "@emotion/react";
import { Div, Text } from "./basic";

const animationTextclip = keyframes`
    to { background-position: -200% center; }
`;
const animationOpacity = keyframes`
    from { background-color: rgba(255, 255, 255, 0); }
    to { background-color: rgba(255, 255, 255, 0.5); }
`;

function SuccessPopup() {
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
                    text-transform: uppercase;
                    background-image: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0) 0%,
                        rgba(0, 0, 0, 0) 60%,
                        blue 60%,
                        blue 100%
                    );
                    background-size: auto auto;
                    background-clip: border-box;
                    background-size: 200% auto;
                    color: #fff;
                    background-clip: text;
                    text-fill-color: transparent;
                    animation: ${animationTextclip} 3s;
                    display: inline-block;
                    font-size: 190px;
                `}
                fontSize="180px"
            >
                ✓
            </Text>
        </Div>
    );
}

export default SuccessPopup;
