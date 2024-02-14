import NewsHeaderList from "../../components/NewsHeaderList/NewsHeaderList";
import { useQuery } from "react-query";
import { axiosInstance } from "../../api/axiosInstance";
import { queryKeys } from "../../enums/queryKeys";
function AllNews() {
  const { data } = useQuery(queryKeys.newsDataKey, () =>
    axiosInstance.get("").then((response) => response.data.results)
  );

  return (
    <>
      <NewsHeaderList headlineTitle="All news" newsList={data} />
    </>
  );
}

export default AllNews;
