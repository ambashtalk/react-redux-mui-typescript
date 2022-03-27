import { Paper } from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const LoginFormWrapper = styled(Paper)(
  ({ theme }) => css`
    width: 95%;
    margin: 40px auto;
    padding: 20px 15px;

    ${theme.breakpoints.up(theme.breakpoints.values.mobile)} {
      width: 80%;
    }

    ${theme.breakpoints.up(theme.breakpoints.values.tablet)} {
      width: 60%;
    }
  `
);

export const LoginFormContainer = styled("form")(
  () => css`
    display: flex;
    flex-direction: column;
  `
);
