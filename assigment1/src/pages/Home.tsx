import NewsCard from "../components/Cards/NewsCard/NewsCard";
import { LatestNewsWrapper } from "../components/Cards/NewsCard/StyledNewsCard";
import Headline from "../components/Headline/Headline";
import { useNewsStore } from "../store/store";
import { useEffect, useState } from "react";
import { News } from "../store/store";

function Home() {
  const { newsList } = useNewsStore();
  const [latestN, setLatestN] = useState<News[]>([]);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  useEffect(() => {
    setLatestN(newsList.slice(-4));
  }, [newsList]);
  const mappedLatestNews = latestN.map((item) => {
    return (
      <NewsCard
        key={item.url}
        src={item.url}
        title={item.title}
        description={item.description}
        chipText={formattedDate}
        isActive={true}
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
