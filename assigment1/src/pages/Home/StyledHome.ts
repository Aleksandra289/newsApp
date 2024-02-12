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
  margin: auto;
`;
export const StyledAllNewsWrapper = styled.div`
  margin-bottom: 1rem;
`;
export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: white;
  min-height: 100vh;
  padding: 2.5rem 5.25rem;
  display: flex;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
`;
