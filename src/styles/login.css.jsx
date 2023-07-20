import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";

export const Container = styled(Stack)`
    flex: 4;
    justify-content: center;
    align-items: center;
    & > .login-form {
        width: 400px;
        border-radius: 0.2em;
        display: flex;
        flex-direction: column;
        padding: 1.25em;
    }
`

export const Title = styled(Typography)`
    color: #00ff4c;
    &.main-title {
        font-size: 1.5rem;
        font-weight: 600;
    }
    &.message {
        color: red;
        font-weight: 400;
        margin: 0.3125em 0;
    }
`
export const Input = styled.input`
    margin: 0.625em 0;
    border: none;
    border-bottom: 1px solid #2bde0b;
    margin-bottom: 1.25em;
    padding: 0.625em 0;
    outline: none;
`
export const SButton = styled(Button)`
    margin-top: 0.625em;
    padding: 0.3125em 0;
    border-radius: 0.625em;
    background-color: #2bde0b;
    color: white;
    font-weight: 600;
    text-transform: capitalize;
    &:hover {
        background-color: #2bde0b;
    }
`