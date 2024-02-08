import {
  StyledAllNewsContainer,
  StyledAllNewsWrapper
} from "./StyledNewsHeaderList";
import Headline from "../Headline/Headline";
import NewsCard from "../Cards/NewsCard/NewsCard";
import { NewsHeaderListProps } from "../../shared/types/newsHeaderList";

export default function NewsHeaderList({
  headlineTitle,
  newsList
}: NewsHeaderListProps) {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-GB");
  const mappedMockedAllNews = newsList.map((item) => (
    <NewsCard
      key={item.url}
      src={item.url}
      title={item.title}
      description={item.description}
      chipText={formattedDate}
      isActive={false}
    />
  ));
  return (
    <StyledAllNewsWrapper>
      <Headline title={headlineTitle} isAddedLineBelow={false} />
      <StyledAllNewsContainer>{mappedMockedAllNews}</StyledAllNewsContainer>
    </StyledAllNewsWrapper>
  );
}
