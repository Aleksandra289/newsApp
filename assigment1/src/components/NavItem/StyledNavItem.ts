import styled from "styled-components";

export const StyledNavItemDiv = styled.div<{ $isActive: boolean }>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 4.6875rem;
  cursor: pointer;
`;
export const StyledTextWrapper = styled.div`
  max-width: 6.25rem;
  overflow: hidden;
`;
