import { z } from "zod";

export const FormSchema = z.object({
  headline: z.string().min(1, "Headline is required."),
  fullStory: z.string().min(1, "Full story is required."),
  link: z.string().min(1, "Link is required.")
});

export type FormType = z.infer<typeof FormSchema>;

export type FormNames<T> = {
  [name in keyof T]: name;
};
