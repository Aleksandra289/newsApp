import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
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
    immer((set) => ({
      newsList: [],
      addNews: (news) =>
        set((state) => {
          state.newsList.push(news);
        })
    })),
    {
      name: "news-local-storage"
    }
  )
);
