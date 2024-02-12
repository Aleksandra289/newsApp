import Headline from "../../components/Headline/Headline";
import TrustCard from "../../components/Cards/TrustCard/TrustCard";
import Banner from "../../components/Banner/Banner";
import image3 from "../../assets/slikaaa 1.png";
import NewsCard from "../../components/Cards/NewsCard/NewsCard";
import { LatestNewsWrapper, HomeButtonWrapper } from "./StyledHome";
import NewsHeaderList from "../../components/NewsHeaderList/NewsHeaderList";
import Button from "../../components/Button/Button";
import { StyledAllNewsWrapper } from "./StyledHome";
import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { getFormattedDate } from "../../helpers/getFormattedDate";
import LoadingError from "../../components/LoadingError/LoadingError";
import Loading from "../../components/Loading/Loading";
import { News } from "../../shared/types/news";
function Home() {
  const [fetchedData, setFetchedData] = useState<News[]>([]);
  const [showAllData, setShowAllData] = useState(false);
  const { isLoading, error, data } = useQuery("newsData", fetchData);

  async function fetchData() {
    const url =
      "https://newsdata.io/api/1/news?apikey=pub_37865967e1adeb725f8f08328b1596eaa4a46&image=1&language=en";

    const response = await axios.get(url);
    return response.data.results;
  }

  useEffect(() => {
    if (data) {
      setFetchedData(data);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (error) return <LoadingError />;

  const latestData = fetchedData.slice(-4);
  const date = getFormattedDate(new Date());
  const mappedLatestNews = latestData.map((item) => {
    return (
      <NewsCard
        key={item.article_id}
        src={item.image_url}
        title={item.title}
        description={item.description}
        chipText={date}
        isActive={true}
      />
    );
  });
  const allData = showAllData ? fetchedData : fetchedData.slice(0, 8);
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
      <StyledAllNewsWrapper>
        <NewsHeaderList headlineTitle="All news" newsList={allData} />
      </StyledAllNewsWrapper>
      <HomeButtonWrapper>
        {!showAllData && (
          <Button
            size="extraLarge"
            onClick={() => {
              setShowAllData(true);
            }}
          >
            View all news
          </Button>
        )}
      </HomeButtonWrapper>
    </>
  );
}
export default Home;
