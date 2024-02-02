import styled from "styled-components";

export const LatestNewsWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 100%;
  overflow-x: scroll;
  float: left;
  &::-webkit-scrollbar {
    display: none;
  }
`;
