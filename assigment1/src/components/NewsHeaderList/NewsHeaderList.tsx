import {
  StyledAllNewsContainer,
  StyledAllNewsAndHeadingWrapper
} from "./StyledNewsHeaderList";
import Headline from "../Headline/Headline";
import NewsCard from "../Cards/NewsCard/NewsCard";
import { NewsHeaderListProps } from "./newsHeaderListTypes";
import { getFormattedDate } from "../../helpers/getFormattedDate";

export default function NewsHeaderList({
  headlineTitle,
  newsList
}: NewsHeaderListProps) {
  const mappedMockedAllNews = newsList.map((item) => (
    <NewsCard
      key={item.article_id}
      src={item.image_url}
      title={item.title}
      description={item.description}
      chipText={getFormattedDate(new Date())}
      isActive={false}
    />
  ));
  return (
    <StyledAllNewsAndHeadingWrapper>
      <Headline title={headlineTitle} isAddedLineBelow={false} />
      <StyledAllNewsContainer>{mappedMockedAllNews}</StyledAllNewsContainer>
    </StyledAllNewsAndHeadingWrapper>
  );
}
