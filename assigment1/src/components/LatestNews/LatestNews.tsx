import { latestNews } from "../../shared/data/latestNews/latestNews";
import NewsCard from "../Cards/NewsCard/NewsCard";
import { LatestNewsWrapper } from "./StyledLatestNews";

export default function LatestNews() {
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
  return <LatestNewsWrapper>{mappedLatestNews}</LatestNewsWrapper>;
}
