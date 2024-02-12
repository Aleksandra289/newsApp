import {
  StyledNewPostWrapper,
  StyledTitleAndFormWrapper,
  StyledTitle,
  StyledForm
} from "./StyledNewPost";
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
import { FormType, FormSchema } from "./schema/createNewPostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNewsStore } from "../../store/store";
import { getFormattedDate } from "../../helpers/getFormattedDate";
import { formNames } from "./schema/createNewPostSchema";

function NewPost() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    mode: "onChange"
  });

  const { addNews } = useNewsStore();

  function onClickHandler(data: FormType) {
    addNews({
      title: data.headline,
      description: data.fullStory,
      url: data.link,
      date: getFormattedDate(new Date())
    });
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
            error={errors[formNames.headline]?.message}
            placeholder="Title"
            {...register(formNames.headline)}
          />
          <TextArea
            label="Full story"
            error={errors[formNames.fullStory]?.message}
            {...register(formNames.fullStory)}
          />
          <Input
            label="Link"
            placeholder="URL"
            error={errors[formNames.link]?.message}
            {...register(formNames.link)}
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
