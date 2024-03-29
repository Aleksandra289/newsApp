import NewsHeaderList from "../../components/NewsHeaderList/NewsHeaderList";
import { useQuery } from "react-query";
import { axiosInstance } from "../../api/axiosInstance";
import { QueryKeys } from "../../enums/queryKeys";
import PageStateContainer from "../../components/PageStateContainer/PageStateContainer";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Router/routes";
import { News } from "../../api/responses/news";
function AllNews() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery<News[]>({
    queryKey: QueryKeys.LATEST_NEWS,
    queryFn: () =>
      axiosInstance.get("").then((response) => response.data.results)
  });
  function onClickHandler() {
    navigate(routes.root);
  }

  return (
    <PageStateContainer
      isLoading={isLoading}
      isError={isError}
      onClickHandler={onClickHandler}
    >
      {data && <NewsHeaderList headlineTitle="All news" newsList={data} />}
    </PageStateContainer>
  );
}

export default AllNews;
