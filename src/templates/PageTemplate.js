import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 80%;
  margin: 32px auto;
`;

const PageTemplate = ({ children, title }) => (
  <StyledWrapper>
    <h1 className={`title is-2`}>{title}</h1>
    {children}
  </StyledWrapper>
);

export default PageTemplate;
