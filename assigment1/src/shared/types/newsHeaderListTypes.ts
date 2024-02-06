type NewsType = {
  src: string;
  title: string;
  description: string;
  chipText: string;
  isActive: boolean;
};
export type NewsHeaderListType = {
  headlineTitle: string;
  newsList: NewsType[];
};
