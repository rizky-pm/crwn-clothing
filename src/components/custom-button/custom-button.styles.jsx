import styled, { css } from "styled-components";

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: white;
        color: #4285f4;
        border: 1px solid #4285f4;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    line-height: 50px;
    padding: 0 25px 0 25px;
    margin: 0 5px;
    font-size: 13px;
    text-transform: uppercase;
    font-family: "Ubuntu";
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;
