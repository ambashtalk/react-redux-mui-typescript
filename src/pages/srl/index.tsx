import React from "react";
import { Outlet } from "react-router-dom";

const SRLPage: React.FC = () => {
  return (
    <>
      <div>HomePage: SRL</div>
      <Outlet />
    </>
  );
};

export default SRLPage;
