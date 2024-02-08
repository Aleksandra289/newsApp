import { useNewsStore } from "../store/store";
import NewsHeaderList from "../components/NewsHeaderList/NewsHeaderList";

function AllNews() {
  const { newsList } = useNewsStore();
  return (
    <>
      <NewsHeaderList headlineTitle="All news" newsList={newsList} />
    </>
  );
}

export default AllNews;
