import {
  StyledAllNewsContainer,
  StyledAllNewsWrapper
} from "./StyledNewsHeaderList";
import Headline from "../Headline/Headline";
import NewsCard from "../Cards/NewsCard/NewsCard";
type NewsType = {
  src: string;
  title: string;
  description: string;
  chipText: string;
  isActive: boolean;
};
type NewsHeaderListType = {
  headlineTitle: string;
  newsList: NewsType[];
};

export default function NewsHeaderList({
  headlineTitle,
  newsList
}: NewsHeaderListType) {
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
