import { create } from "zustand";
import { produce } from "immer";
import { persist } from "zustand/middleware";
export type News = {
  title: string;
  description: string;
  url: string;
};
type StoreProps = {
  newsList: News[];
  addNews: (news: News) => void;
};

export const useNewsStore = create<StoreProps>()(
  persist(
    (set) => ({
      newsList: [],
      addNews: (news) =>
        set(
          produce((state) => {
            state.newsList.push(news);
          })
        )
    }),
    {
      name: "news-local-storage"
    }
  )
);
