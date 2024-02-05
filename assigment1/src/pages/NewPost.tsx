import {
  StyledNewPostWrapper,
  StyledTitleAndFormWrapper,
  StyledTitle,
  StyledForm
} from "./StyledNewPost";
import Text from "../components/Text/Text";
import Input from "../components/Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../components/Button/Button";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  headline: z.string().min(1, "Headline is required."),
  fullStory: z.string().min(1, "Full story is required."),
  link: z.string().min(1, "Link is required.")
});

type FormType = z.infer<typeof FormSchema>;

function NewPost() {
  const form = useForm<FormType>({
    defaultValues: {
      headline: "",
      fullStory: "",
      link: ""
    },
    resolver: zodResolver(FormSchema)
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  function onClickHandler(data: FormType) {
    console.log("Form submitted", data);
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <StyledNewPostWrapper>
      <StyledTitleAndFormWrapper>
        <StyledTitle>
          <Text fontSize="large" fontWeight="extraBold" lineHeight="high">
            New post
          </Text>
        </StyledTitle>
        <StyledForm>
          <Input
            label="Headline"
            error={errors.headline?.message}
            placeholder="Title"
            {...register("headline")}
          />
          <TextArea
            label="Full story"
            error={errors.fullStory?.message}
            {...register("fullStory")}
          />
          <Input
            label="Link"
            placeholder="URL"
            error={errors.link?.message}
            {...register("link")}
          />
          <Button
            type="submit"
            size="extraLarge"
            onClick={handleSubmit(onClickHandler)}
          >
            Create post
          </Button>
        </StyledForm>
        <DevTool control={control}></DevTool>
      </StyledTitleAndFormWrapper>
    </StyledNewPostWrapper>
  );
}
export default NewPost;
