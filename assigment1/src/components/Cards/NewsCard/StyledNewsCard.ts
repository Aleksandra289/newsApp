import styled from "styled-components";
export const NewsCardWrapper = styled.div`
  max-width: 16.3125rem;
`;
export const StyledNewsCard = styled.div`
  width: 16.4375rem;
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;
export const StyledTitleDiv = styled.div`
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
`;
export const StyledDescriptionDiv = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
export const StyledChipDiv = styled.div`
  position: absolute;
  right: 1.5625rem;
  top: 1.5625rem;
`;
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
