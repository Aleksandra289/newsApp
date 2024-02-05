import { latestNews } from "../shared/data/latestNews/mockedLatestNews";
import NewsCard from "../components/Cards/NewsCard/NewsCard";
import { LatestNewsWrapper } from "../components/Cards/NewsCard/StyledNewsCard";
import Headline from "../components/Headline/Headline";
import TrustCard from "../components/Cards/TrustCard/TrustCard";
import Banner from "../components/Banner/Banner";
import image3 from "../assets/slikaaa 1.png";
import { mockedAlltNews } from "../shared/data/navigation/mockedAllNews";
import NewsCard from "../components/Cards/NewsCard/NewsCard";
import { StyledAllNews } from "../components/Cards/NewsCard/StyledNewsCard";
import Button from "../components/Button/Button";
import {
  HomeButtonWrapper,
  StyledAllNewsAndButton
} from "../components/Button/StyledButton";

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
  const mappedMockedAllNews = mockedAlltNews.map((item, index) => (
    <NewsCard
      key={index}
      src={item.src}
      title={item.title}
      description={item.description}
      chipText={item.chipText}
      isActive={item.isActive}
    ></NewsCard>
  ));
  return (
    <>
      <Banner
        title="The best news always available"
        description="On all devices, always on time"
        image={image3}
      />
      <Headline title="Latest news" />
      <TrustCard
        title="News Recognized for Unparalleled Objectivity"
        description="Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued"
      />
      <Headline title="All news" isAddedLineBelow={false} />
      <StyledAllNewsAndButton>
        <StyledAllNews>{mappedMockedAllNews}</StyledAllNews>
        <HomeButtonWrapper>
          <Button size="extraLarge">View all news</Button>
        </HomeButtonWrapper>
      </StyledAllNewsAndButton>
    </>
  );
}
export default Home;
