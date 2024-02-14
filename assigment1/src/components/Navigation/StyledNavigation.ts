import styled from "styled-components";
import { breakpoints } from "../../shared/breakpoints/breakpoints";

export const StyledNavDiv = styled.div`
  display: flex;
  padding: 1.5rem 4rem;
  justify-content: center;
  align-items: center;
  gap: 7.5rem;
  box-shadow: 0px 4px 20px 0px rgba(16, 24, 40, 0.1);
  width: 100%;
  @media ${breakpoints.mobile} {
    gap: 5rem;
  }
`;
