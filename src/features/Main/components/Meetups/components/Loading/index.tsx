import React from "react";
import { StyledCard, StyledCol } from "../components";

const loadingItems = Array(8).fill("");

export const Loading: React.FC = () => (
  <>
    {loadingItems.map(() => (
      <StyledCol>
        <StyledCard loading hoverable />
      </StyledCol>
    ))}
  </>
);
