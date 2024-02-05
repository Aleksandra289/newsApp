import { StyledAllNewsContainer } from "./StyledAllNews";
import Headline from "../Headline/Headline";
import { mockedAllNews } from "../../shared/data/latestNews/mockedAllNews";
import NewsCard from "../Cards/NewsCard/NewsCard";

export default function AllNews() {
  const mappedMockedAllNews = mockedAllNews.map((item, index) => (
    <NewsCard
      key={index}
      src={item.src}
      title={item.title}
      description={item.description}
      chipText={item.chipText}
      isActive={item.isActive}
    />
  ));
  return (
    <>
      <Headline title="All news" isAddedLineBelow={false} />

      <StyledAllNewsContainer>{mappedMockedAllNews}</StyledAllNewsContainer>
    </>
  );
}
