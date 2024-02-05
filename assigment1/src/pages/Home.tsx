import { latestNews } from "../shared/data/latestNews/mockedLatestNews";
import Headline from "../components/Headline/Headline";
import TrustCard from "../components/Cards/TrustCard/TrustCard";
import Banner from "../components/Banner/Banner";
import image3 from "../assets/slikaaa 1.png";
import NewsCard from "../components/Cards/NewsCard/NewsCard";
import { LatestNewsWrapper, HomeButtonWrapper } from "./StyledHome";
import AllNews from "../components/AllNews/AllNews";
import Button from "../components/Button/Button";

function Home() {
  const mappedLatestNews = latestNews.map((item, index) => {
    return (
      <NewsCard
        key={index}
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
      <Banner
        title="The best news always available"
        description="On all devices, always on time"
        image={image3}
      />
      <Headline title="Latest news" />
      <LatestNewsWrapper>{mappedLatestNews}</LatestNewsWrapper>

      <TrustCard
        title="News Recognized for Unparalleled Objectivity"
        description="Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued"
      />

      <AllNews />
      <HomeButtonWrapper>
        <Button size="extraLarge">View all news</Button>
      </HomeButtonWrapper>
    </>
  );
}
export default Home;
