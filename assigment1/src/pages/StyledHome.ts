import styled from "styled-components";
export const LatestNewsWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;
