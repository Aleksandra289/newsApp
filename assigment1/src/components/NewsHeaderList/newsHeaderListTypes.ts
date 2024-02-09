type News = {
  src: string;
  title: string;
  description: string;
  chipText: string;
  isActive: boolean;
};
export type NewsHeaderListProps = {
  headlineTitle: string;
  newsList: News[];
};
