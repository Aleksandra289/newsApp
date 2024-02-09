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
import {
  NewPostData,
  newPostSchema,
  formNames
} from "./schema/createNewPostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNewsStore } from "../../store/store";

function NewPost() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<NewPostData>({
    resolver: zodResolver(newPostSchema),
    mode: "onChange"
  });
  const { addNews } = useNewsStore();
  function onClickHandler(data: NewPostData) {
    addNews({
      title: data.title,
      description: data.description,
      url: data.url
    });
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
            error={errors[formNames.title]?.message}
            placeholder="Title"
            {...register(formNames.title)}
          />
          <TextArea
            label="Full story"
            error={errors[formNames.description]?.message}
            {...register(formNames.description)}
          />
          <Input
            label="Link"
            placeholder="URL"
            error={errors[formNames.url]?.message}
            {...register(formNames.url)}
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
