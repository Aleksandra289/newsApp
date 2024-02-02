import styled from "styled-components";
import { breakpoints } from "../../shared/breakpoints/breakpoints";

export const StyledNotFound = styled.div`
  display: flex;
  width: 37.5rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;

  @media ${breakpoints.tablet.tabletSm} {
    padding-left: 5.25rem;
    padding-right: 5.25rem;
  }
  @media ${breakpoints.desktop.desktopSm} {
    padding-left: 0;
    padding-right: 0;
  }
`;
export const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
`;
export const ButtonWrapper = styled.div`
  width: 25rem;
`;
