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

export const StyledAllNewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.313rem, 1fr));
  gap: 1.25rem;
  width: 100%;
`;
export const HomeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;
export const StyledAllNewsAndButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`;
