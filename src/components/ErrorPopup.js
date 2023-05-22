/** @jsxImportSource @emotion/react */
import { keyframes, css } from "@emotion/react";
import { Div, Text } from "./basic";

const animationOpacity = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

function ErrorPopup(props) {
    return (
        <Div
            css={css`
                top: 0;
                left: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: absolute;
                width: 100%;
                height: 100%;
                background: white;
                animation: ${animationOpacity} 0.3s;
            `}
        >
            <Text lineHeight="0.9" color="#ff4040" fontSize="180px">
                !
            </Text>
            <Text m="0 20px" textAlign="center" color="#ff4040">
                {props.children}
            </Text>
        </Div>
    );
}

export default ErrorPopup;
