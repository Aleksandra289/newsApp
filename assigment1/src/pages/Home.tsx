import { latestNews } from "../shared/data/latestNews/mockedLatestNews";
import NewsCard from "../components/Cards/NewsCard/NewsCard";
import { LatestNewsWrapper } from "../components/Cards/NewsCard/StyledNewsCard";
import Headline from "../components/Headline/Headline";

function Home() {
  const mappedLatestNews = latestNews.map((item) => {
    return (
      <NewsCard
        key={item.src}
        src={item.src}
        title={item.title}
        description={item.description}
        chipText={item.chipText}
        isActive={item.isActive}
      />
    );
  });
  return (
    <>
      <Headline title="Latest news" />
      <LatestNewsWrapper>{mappedLatestNews}</LatestNewsWrapper>
    </>
  );
}
export default Home;
