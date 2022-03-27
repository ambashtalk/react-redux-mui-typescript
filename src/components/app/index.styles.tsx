import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const RootWrapper = styled(Box)(
  ({ theme }) => css`
    margin: 0 auto;

    ${theme.breakpoints.up(theme.breakpoints.values.desktop)} {
      max-width: ${theme.breakpoints.values.xlarge}px;
    }
  `
);
