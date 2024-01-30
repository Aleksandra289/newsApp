import styled from "styled-components";

export const StyledHomeBannerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 8.9375rem;
  border-radius: 1rem;
  background: linear-gradient(
    271deg,
    ${({ theme }) => theme.color.turquoise} -8.54%,
    ${({ theme }) => theme.color.classicBlue} 103.39%
  );
`;
export const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
`;
export const StyledImg = styled.img`
  position: absolute;
  right: 4%;
`;
