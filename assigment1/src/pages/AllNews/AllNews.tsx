import NewsHeaderList from "../../components/NewsHeaderList/NewsHeaderList";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { News } from "../../shared/types/news";
import { config } from "../../config/config";
import axios from "axios";
function AllNews() {
  const [fetchedData, setFetchedData] = useState<News[]>([]);
  const { data } = useQuery("newsData", fetchData, {
    staleTime: 2 * (60 * 1000)
  });
  async function fetchData() {
    const { apiKey, apiUrl, language, includeImage } = config;
    const url = `${apiUrl}?apikey=${apiKey}&image=${includeImage}&language=${language}`;

    const response = await axios.get(url);
    return response.data.results;
  }
  useEffect(() => {
    if (data) {
      setFetchedData(data);
    }
  }, [data]);

  return (
    <>
      <NewsHeaderList headlineTitle="All news" newsList={fetchedData} />
    </>
  );
}

export default AllNews;
