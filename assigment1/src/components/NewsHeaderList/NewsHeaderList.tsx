import { StyledAllNewsContainer } from "./StyledNewsHeaderList";
import Headline from "../Headline/Headline";
import NewsCard from "../Cards/NewsCard/NewsCard";
import { NewsHeaderListProps } from "../../shared/types/newsHeaderList";
import { getFormattedDate } from "../../helpers/getFormattedDate";

export default function NewsHeaderList({
  headlineTitle,
  newsList
}: NewsHeaderListProps) {
  const mappedMockedAllNews = newsList.map((item) => (
    <NewsCard
      key={item.url}
      src={item.url}
      title={item.title}
      description={item.description}
      chipText={getFormattedDate(new Date())}
      isActive={false}
    />
  ));
  return (
    <>
      <Headline title={headlineTitle} isAddedLineBelow={false} />
      <StyledAllNewsContainer>{mappedMockedAllNews}</StyledAllNewsContainer>
    </>
  );
}
