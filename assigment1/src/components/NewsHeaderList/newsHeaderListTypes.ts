type News = {
  src: string;
  title: string;
  description: string;
  chipText: string;
  isActive: boolean;
};
export type NewsHeaderList = {
  headlineTitle: string;
  newsList: News[];
};
