import { z } from "zod";
import { FormNames } from "../../../shared/types/formNames";

export const FormSchema = z.object({
  headline: z.string().min(1, "Headline is required."),
  fullStory: z.string().min(1, "Full story is required."),
  link: z.string().min(1, "Link is required.")
});

export type FormType = z.infer<typeof FormSchema>;

export const formNames: FormNames<FormType> = {
  headline: "headline",
  fullStory: "fullStory",
  link: "link"
};
