import {
  StyledAllNewsContainer,
  StyledAllNewsWrapper
} from "./StyledNewsHeaderList";
import Headline from "../Headline/Headline";
import { NewsHeaderList } from "./newsHeaderList";
import NewsCard from "../Cards/NewsCard/NewsCard";
import React from "react";

export default function NewsHeaderList({
  headlineTitle,
  newsList
}: NewsHeaderList) {
  const mappedMockedAllNews = newsList.map((item) => (
    <NewsCard
      key={item.src}
      src={item.src}
      title={item.title}
      description={item.description}
      chipText={item.chipText}
      isActive={item.isActive}
    />
  ));
  return (
    <StyledAllNewsWrapper>
      <Headline title={headlineTitle} isAddedLineBelow={false} />
      <StyledAllNewsContainer>{mappedMockedAllNews}</StyledAllNewsContainer>
    </StyledAllNewsWrapper>
  );
}
