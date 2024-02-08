import { StyledAllNewsContainer } from "./StyledNewsHeaderList";
import Headline from "../Headline/Headline";
import NewsCard from "../Cards/NewsCard/NewsCard";
import { NewsHeaderList } from "./newsHeaderListTypes";

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
    <>
      <Headline title={headlineTitle} isAddedLineBelow={false} />
      <StyledAllNewsContainer>{mappedMockedAllNews}</StyledAllNewsContainer>
    </>
  );
}
