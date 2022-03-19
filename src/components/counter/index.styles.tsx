import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Card, Container } from "@mui/material";

export const CounterContainer = styled(Container)(
  () => css`
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `
);

export const AddSubtractButton = styled(Button)(
  ({ theme }) => css`
    width: 2rem;
    height: 2rem;
    font-size: ${theme.typography.h1.fontSize};
    padding: ${theme.spacing("2rem", "2rem")};
  `
);

export const CounterDisplay = styled(Card)(
  ({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.h3.fontSize};
    padding: ${theme.spacing(0, 10)};
  `
);
