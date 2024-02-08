import { z } from "zod";
import { FormNames } from "../../../shared/types/newPostFormNames";

export const newPostSchema = z.object({
  title: z.string().min(5, "Title is required."),
  description: z.string().min(1, "Description is required."),
  url: z.string().min(1, "Url is required.")
});

export type NewPostData = z.infer<typeof newPostSchema>;

export const formNames: FormNames<NewPostData> = {
  title: "title",
  description: "description",
  url: "url"
};
