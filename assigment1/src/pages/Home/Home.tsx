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
import { useState } from "react";
import { getFormattedDate } from "../../helpers/getFormattedDate";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Router/routes";
import { axiosInstance } from "../../api/axiosInstance";
import { News } from "../../shared/types/news";
import PageStateContainer from "../../components/PageStateContainer/PageStateContainer";
import { queryKeys } from "../../enums/queryKeys";
function Home() {
  const [showAllData, setShowAllData] = useState(false);
  const { isLoading, isError, data } = useQuery(queryKeys.newsDataKey, () =>
    axiosInstance.get("").then((response) => response.data.results)
  );
  const navigate = useNavigate();

  function onClickHandler() {
    navigate(routes.root);
  }
  if (isLoading || isError) {
    return (
      <PageStateContainer
        isLoading={isLoading}
        isError={isError}
        onClickHandler={onClickHandler}
      />
    );
  }

  const latestData = data.slice(-4);
  const mappedLatestNews = latestData.map((item: News) => {
    return (
      <NewsCard
        key={item.article_id}
        src={item.image_url}
        title={item.title}
        description={item.description}
        chipText={getFormattedDate(new Date())}
        isActive={true}
      />
    );
  });
  const allData = showAllData ? data : data.slice(0, 8);
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
