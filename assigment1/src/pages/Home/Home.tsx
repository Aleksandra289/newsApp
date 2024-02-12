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
import { News } from "../../shared/types/news";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Router/routes";
import { LoadingWrapper } from "./StyledHome";
import DataStatus from "../../components/DataStatus/DataStatus";
import LoadingErrorIcon from "../../icons/LoadingErrorIcon";
import LoadingIcon from "../../icons/LoadingIcon";
function Home() {
  const [fetchedData, setFetchedData] = useState<News[]>([]);
  const [showAllData, setShowAllData] = useState(false);
  const { isLoading, error, data } = useQuery("newsData", fetchData);
  const navigate = useNavigate();

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

  function onClickHandler() {
    navigate(routes.root);
  }

  if (isLoading)
    return (
      <LoadingWrapper>
        <LoadingIcon />
      </LoadingWrapper>
    );
  if (error)
    return (
      <LoadingWrapper>
        <DataStatus
          title="Something went wrong!"
          description="An error occurred while attempting to retrieve data from the server."
          buttonText="Back home"
          icon={LoadingErrorIcon}
          onClick={onClickHandler}
        />
      </LoadingWrapper>
    );

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
