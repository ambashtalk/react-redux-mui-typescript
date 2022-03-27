import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Backdrop } from "@mui/material";

export const CustomBackdrop = styled(Backdrop)(
  ({ theme }) => css`
    color: "#fff";
    z-index: ${theme.zIndex.drawer + 1};
  `
);
