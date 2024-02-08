import { z } from "zod";

export const newPostSchema = z.object({
  headline: z.string().min(1, "Headline is required."),
  fullStory: z.string().min(1, "Full story is required."),
  link: z.string().min(1, "Link is required.")
});

export type NewPostData = z.infer<typeof newPostSchema>;

export type FormNames<T> = {
  [name in keyof T]: name;
};

export const formNames: FormNames<NewPostData> = {
  headline: "headline",
  fullStory: "fullStory",
  link: "link"
};
