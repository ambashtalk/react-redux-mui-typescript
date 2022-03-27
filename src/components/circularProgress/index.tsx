import React from "react";
import { CircularProgress } from "@mui/material";
import { CustomBackdrop } from "./index.styles";

const CircularProgressPage: React.FC = () => {
  return (
    <CustomBackdrop open>
      <CircularProgress color='inherit' disableShrink />
    </CustomBackdrop>
  );
};

export default CircularProgressPage;
